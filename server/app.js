const express = require("express")();
const http = require("http").Server(express);
const io = require("socket.io")(http);

const partidaController = require('./controllers/partida');
let paises = partidaController.init();

http.listen(3000, () => {
    console.log("Listening at :3000...");
});

// Añadimos origen de confianza para evitar problemas CORS
io.set('origins', 'http://localhost:4200'); 
// io.set('origins', 'http://192.168.0.164:4200'); 

// Constructor - Iniciamos variables partidas
var numeroPartida = 0;
var colores = generateColors();
var jugadoresListaEspera = [];
var partidas = [];
var partida = {
    personas: [
    ]
}

// Optimizar todos los foreach
io.on("connection", socket => {

    // Asignamos variable local al socket con el número de sala = al numero de partida
    var currentRoomId;
    console.log('socket connection -', socket.id)

    socket.on('conectarListaEspera', function(data){ 
        console.log('----EVENTO conectar a LISTA DE ESPERA---------');
        socket.join('listaEspera');
        data.id = socket.id;

        // Comprobamos si ya está en la lista antes de añadirlo - refactorizar
        let yaEstaEnLaLista = false;
        jugadoresListaEspera.forEach(element => {
            if (element.id === data.id) {
                yaEstaEnLaLista = true;
            }
        });
        if (yaEstaEnLaLista) {
            console.log('el jugador ya estaba en lista de espera');
        } else {
            jugadoresListaEspera.push(data);
            console.log('nueva conexión a lista de espera', data);
        }
        io.sockets.in('listaEspera').emit('listaEspera', {jugadoresListaEspera, partidas});
    });

    socket.on('crearSala', function(sala){ 
        console.log('----EVENTO CREAR SALA ---------');
        // Lógica crear una sala - refaztorizar
        console.log(sala);
        partida = {
            id: numeroPartida,
            config: sala.config,
            colores: colores,
            personas: [
                {
                    nick: sala.user,
                    id: socket.id,
                    color: colores[0],
                    turno: false,
                    fichasDisp: 0,
                    fase: 0
                }
            ]
        };

        // Eliminamos el color asignado al creador
        partida.colores.splice(0, 1);

        // Añadimos partida a la lista de partidas y volvemos a generar colores e ID para la siguiente
        partidas.push(partida);
        colores = generateColors();

        // Dejamos la lista de espera y eliminamos al jugador del array - refactorizar
        socket.leave('listaEspera');
        jugadoresListaEspera.forEach( (elem, i) => {
            if (socket.id === elem.id) {
                jugadoresListaEspera.splice(i, 1);
                console.log('salimos de lista de espera para entrar en sala');
            }
        });
        // Entramos a la sala y emitimos cambios en lista de espera y sala
        socket.join('sala-' + numeroPartida);
        io.sockets.in('listaEspera').emit('listaEspera', {jugadoresListaEspera, partidas});
        io.sockets.in('sala-'+ numeroPartida).emit('salaCreada', partida);

        // Aumentamos número de partida después de emitir - posible refactor
        numeroPartida++;
    });

    socket.on('conectarSala', function(objConectar){ 
        console.log('----EVENTO CONECTAR A SALA---------');
        // Lógica conectar a partida
        if (objConectar.nick) {
            // Obtenemos sala con ID de sala
            let partidaAux;
            partidas.forEach( (elem) => {
                if (elem.id == objConectar.idSala) {
                    partidaAux = elem;
                }
            });
            // Si la sala existe y no está llena
            if (partidaAux && partidaAux.config.jugadores > partidaAux.personas.length) {
                // añadimos al usuario
                socket.join('sala-' + objConectar.idSala);
                // Seteamos variable local a nivel de socket
                currentRoomId = objConectar.idSala;
                let existeEnlaSala = false;
                partidaAux.personas.forEach( (per, i) => {
                    if (per.id === socket.id) {
                        existeEnlaSala = true;
                    }
                });
                if (!existeEnlaSala) {
                    const user = {
                        nick: objConectar.nick,
                        id: socket.id,
                        color: partidaAux.colores[0]
                    }
                    partidaAux.colores.splice(0, 1);
                    console.log('colores: ', partidaAux.colores);
                    partidaAux.personas.push(user);
                }

                socket.leave('listaEspera');
                // Eliminamos jugador de usuarios en lista de espera
                jugadoresListaEspera.forEach( (elem, i) => {
                    if (socket.id === elem.id) {
                        jugadoresListaEspera.splice(i, 1);
                    }
                });
                console.log('Usuario nuevo a entrado a la sala', partidaAux);
                io.sockets.in('sala-' + objConectar.idSala).emit('nuevaConexionSala', partidaAux);
                io.sockets.in('listaEspera').emit('listaEspera', {jugadoresListaEspera, partidas});


                // SI es el último jugador, comenzamos
                if (partidaAux.config.jugadores == partidaAux.personas.length) {
                    console.log('la partida está llena');
                    // Mandar la partida tratada en función de la config, capturar desde cliente el id
                    // Cambiar desde cliente a la ruta con el ID del socket capturado
                    // Si el inicio es automático
                    if ( partidaAux.config.inicio == 1) {
                        // Generar colores automáticamente según los jugadores y sus colores
                        console.log('tratamos paises: ');
                        let listaPaisesColoresDisponibles = [];
                        partidaAux.personas.forEach( (persona) => {
                            listaPaisesColoresDisponibles.push(persona.color);
                        });
                        console.log('Rellenamos paises con: ', listaPaisesColoresDisponibles);
                        const paisesCopy = paises;
                        partidaAux.listaPaises = rellenarPaises(listaPaisesColoresDisponibles, paisesCopy);
                        // Enviar señal para terminar de setear las tropas que faltan - Revisar como retomar
                    } else {
                        // Enviar paises sin color para rellenar por el usuario
                        partidaAux.listaPaises = paises;
                    }
                    partidaAux.personas[0].turno = true;
                    partidaAux.personas[0].fichasDisp = 7;


                    io.sockets.in('sala-' + partidaAux.id).emit('comenzarPartida', partidaAux);
                }

            } else {
                // Manejar este error - La partida está llena o ya no existe
                io.sockets.in('listaEspera').emit('errorConexionSala', 'La partida está llena');
            }

        }

    });

    socket.on('disconnect', function(){
        console.log('----EVENTO DESCONEXIÓN---------');

        // Si el desconectado estaba en lista de espera:
        if (currentRoomId === undefined) {
            console.log('el socket que abandona estaba en lista de espera');
            socket.leave('listaEspera');
             // Eliminamos jugador de usuarios en lista de espera
            jugadoresListaEspera.forEach( (elem, i) => {
                if (socket.id === elem.id) {
                    jugadoresListaEspera.splice(i, 1);
                }
            });
        // Si el desconectado estaba en una sala
        } else {
            console.log('se marchan de la sala : ', currentRoomId);
            console.log('el socket abandona y no estaba en lista de espera, eliminar de la sala');
            // Obtenemos partida con ID
            let partidaAux;
            partidas.forEach( (elem) => {
                if (elem.id == currentRoomId) {
                    partidaAux = elem;
                }
            });
            // eliminamos persona y volvemos a meter color a array
            partidaAux.personas.forEach( (elem, i ) => {
                if (elem.id === socket.id) {
                    partidaAux.colores.push(partidaAux.personas[i].color);
                    partidaAux.personas.splice(i, 1);
                }
            });
            // SI era la última persona, eliminamos la partida
            if (partidaAux.personas.length === 0) {
                partidas.forEach( (elem, i) => {
                    if (elem.id === partidaAux.id) {
                        partidas.splice(i, 1);
                    }
                });
                // Emitimos cambio partida eliminada a lista de espera
                io.sockets.in('listaEspera').emit('listaEspera', {jugadoresListaEspera, partidas});
            }
            // Emitimos cambio persona que ha salido de la sala
            socket.leave('sala-' + currentRoomId);
            io.sockets.in('sala-' + currentRoomId).emit('nuevaConexionSala', partidaAux);
        }
        io.sockets.in('listaEspera').emit('listaEspera', {jugadoresListaEspera, partidas});
    })

});

// Refactor
function rellenarPaises(lista, paisesCopy) {
    console.log('introducimos colores: ', lista);
    let auxColores = generateRandomArray(lista.length);
    // Asignar colores - hacer más aleatorio
    paisesCopy.forEach( (elem, i) => {
        // Reiniciamos array de paises
        elem.color = '';
        elem.fichas = 0;
        while (elem.color.length < 1) {
            if (auxColores.length > 0) {
                elem.color = lista[auxColores[0]];
                auxColores.splice(0, 1);
            } else {
                auxColores = generateRandomArray(lista.length);
            }
        }
        elem.fichas++;
    });


    // Parte añadir fichas sobrantes
    const fichasSobrantesPorPais = Math.round((72 / lista.length) - (42 / lista.length));
    let auxFichasPais = [];
    lista.forEach( () => {
        auxFichasPais.push(fichasSobrantesPorPais);
    });
    console.log('fichas a añadir a cada color: ', fichasSobrantesPorPais);
    auxFichasPais.forEach( (elem, i) => {
        while(elem > 1) {
            let max;
            // Ratio de nueva barrida, aumentar para fichas más altas
            if (elem > 3) {
                max = 2;
            } else {
                max = elem;
            }
            const numRandom = Math.floor(Math.random() * max+1) + 0;
            const paisRandom = Math.floor(Math.random() * paisesCopy.length) + 0;

            // asignar fichas a pais random si es del color
            if (paisesCopy[paisRandom].color === lista[i] && numRandom <= elem) {
                elem -= numRandom;
                paisesCopy[paisRandom].fichas += numRandom;
            }
            
        }
    });
    console.log('devolvemos paises: ', auxFichasPais);
    return paisesCopy;
}

function generateRandomArray(arraySize) {
    let randomArray = [];
    while(randomArray.length < arraySize) {
        let number = Math.floor(Math.random() * arraySize) + 0;
        if (!randomArray.includes(number)) {
            randomArray.push(number);
        }
    }

    return randomArray;
}

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