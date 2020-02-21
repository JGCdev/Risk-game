const express = require("express")();
const http = require("http").Server(express);
const io = require("socket.io")(http);
const partidaController = require('./controllers/partida');

http.listen(3000, () => {
    console.log("Listening at :3000...");
});

// Añadimos origen de confianza para evitar problemas CORS
io.set('origins', 'http://localhost:4200'); 
// io.set('origins', 'http://192.168.0.164:4200'); 

partidaController.init();

// Constructor
var partidas = [];
var partida = {
    "personas": [
    ]
}
var usuariosRegistrados = 0;
var numeroPartida = 0;
var colores = generateColors();


// Next step - asignar fichas automáticamente y rellenar el mapa de forma inicial
io.on("connection", socket => {

    // Asignamos variable local al socket con el número de sala = al numero de partida
    var currentRoomId;
    console.log('socket connection -', socket.id)

    socket.on('conectar', function(data){
    
        const persona = {
            id: socket.id,
            nombre: data.usuario,
            color: colores[usuariosRegistrados]
        }

        // Unimos usuario a su sala
        socket.join('sala-' + numeroPartida);
        currentRoomId =  numeroPartida;
        

        partida.personas.push(persona);
        partida.numeroPartida = numeroPartida;
        
        // Lógica de entrada a una sala
        if (usuariosRegistrados === 0) {  // Si no hay nadie creamos partida
            partidas.push(partida);
        }

        // Anunciamos que entra un nuevo usuario
        io.sockets.in('sala-'+numeroPartida).emit('partida', partidas[numeroPartida].personas);

        usuariosRegistrados++;

        // Destruimos para crear nueva partida
        if (partida.personas.length === 3) {
            usuariosRegistrados = 0;
            partida = {
                "personas": [
                ]
            }
            colores = generateColors(); 
            io.sockets.in('sala-'+numeroPartida).emit('comenzarPartida', partidas[numeroPartida]);
            numeroPartida++;
        } 
    });

    socket.on('disconnect', function(){
        console.log('Disconnection');
        if (partidas[currentRoomId] !== undefined) {
            const personas = partidas[currentRoomId].personas;
            for (let i = 0; i < personas.length; i++) {
                if ( personas[i] !== undefined && personas[i].id === socket.id) {
                    personas.splice(i,1);
                }
            }
            io.sockets.in('sala-'+currentRoomId).emit('desc', personas);
        }
        socket.leave('sala-' + currentRoomId);
    })

});

// Función que genera un array de colores HEX aleatorios
function generateColors() {
    let numerosElegidos = [];
    let selectedColors = [];
    for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
        if (!numerosElegidos.includes(randomNumber)) {
            numerosElegidos.push(randomNumber);
            selectedColors.push(randomNumberToColor(randomNumber));
        } else {
            i--;
        }
    }
    return selectedColors;
}

// Traduce el número aleatorio en un color dado
function randomNumberToColor(num) {
    colorString = '';
    switch(num) {
        case 1:
            colorString = 'amarillo';
            break;
        case 2: 
            colorString = 'azul';
            break;
        case 3: 
            colorString = 'verde';
            break;
        case 4: 
            colorString = 'rojo';
            break;
        case 5:
            colorString = 'naranja';
            break;
        case 6: 
            colorString = 'morado';
        break;
    }
    return colorString;
}