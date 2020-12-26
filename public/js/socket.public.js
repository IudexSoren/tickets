const lblT1 = document.querySelector('#lblTicket1');
const lblE1 = document.querySelector('#lblEscritorio1');

const lblT2 = document.querySelector('#lblTicket2');
const lblE2 = document.querySelector('#lblEscritorio2');

const lblT3 = document.querySelector('#lblTicket3');
const lblE3 = document.querySelector('#lblEscritorio3');

const lblT4 = document.querySelector('#lblTicket4');
const lblE4 = document.querySelector('#lblEscritorio4');

const lblTickets = [lblT1, lblT2, lblT3, lblT4];
const lblEscritorios = [lblE1, lblE2, lblE3, lblE4];

var socket = io();

socket.on('connect', () => {
 console.log('Conectado');
});

socket.on('disconnect', () => {
  console.log('Desconectado');
});

socket.on('estadoActual', (data) => {
  actualizarHTML(data.ultimosCuatro);
});

socket.on('ultimosCuatro', (data) => {
  let audio = new Audio('audio/new-ticket.mp3');
  audio.play();
  actualizarHTML(data.ultimosCuatro);
});

const actualizarHTML = (ultimosCuatro) => {
  for (let i = 0; i < ultimosCuatro.length; i++) {
    lblTickets[i].innerText = `Ticket ${ultimosCuatro[i].numero}`;
    lblEscritorios[i].innerText = `Escritorio ${ultimosCuatro[i].escritorio}`;
  }
}