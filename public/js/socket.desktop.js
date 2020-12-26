const tituloEscritorio = document.querySelector('h1');
const numeroTicket = document.querySelector('small');
const btnAtender = document.querySelector('button');


var socket = io();

socket.on('connect', () => {
 console.log('Conectado');
});

socket.on('disconnect', () => {
  console.log('Desconectado');
});

var searchParams = new URLSearchParams(window.location.search);
if(!searchParams.has('escritorio')) {
  window.location = 'index.html';
  throw new Error('El parámetro escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
tituloEscritorio.innerText = `Escritorio ${escritorio}`;

// ========================
// === Eventos ============
// ========================

btnAtender.addEventListener('click', () => {
  socket.emit('atenderTicket', {
    escritorio
  }, (resp) => {
    if (!resp.numero) {
      numeroTicket.innerText = '....';
      return alert(resp);
    }
    numeroTicket.innerText = `Ticket ${resp.numero}`;
  });
});