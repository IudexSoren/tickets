const label = document.querySelector('#lblNuevoTicket');
const button = document.querySelector('button');

var socket = io();

socket.on('connect', () => {
 console.log('Conectado');
});

socket.on('disconnect', () => {
  console.log('Desconectado');
});

socket.on('estadoActual', (data) => {
  label.innerText = data.actual;
});

// ========================
// === Eventos ============
// ========================

button.addEventListener('click', () => {
  socket.emit('siguienteTicket', null, (resp) => {
    label.innerText = resp;
  });
});