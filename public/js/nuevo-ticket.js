const lblNuevoTicket = document.getElementById('lblNuevoTicket')
const btn = document.getElementById('btn')



const socket = io();



socket.on('connect', () => {
  
  btn.disabled = false

});

socket.on('ultimo-ticket', ( ticket ) => {
        lblNuevoTicket.textContent = ticket
})

socket.on('disconnect', () => {

  btn.disabled = true

});

btn.addEventListener( 'click', () => {

    
    socket.emit( 'siguiente-ticket', null, ( ticket ) => {
        lblNuevoTicket.textContent = ticket
    });

});