const lblTicket1 = document.getElementById('lblTicket1')
const lblEscritorio1 = document.getElementById('lblEscritorio1')
const lblTicket2 = document.getElementById('lblTicket2')
const lblEscritorio2 = document.getElementById('lblEscritorio2')
const lblTicket3 = document.getElementById('lblTicket3')
const lblEscritorio3 = document.getElementById('lblEscritorio3')
const lblTicket4 = document.getElementById('lblTicket4')
const lblEscritorio4 = document.getElementById('lblEscritorio4')





const socket = io()

socket.on('estado-actual', ( payload ) => {

	const audio = new Audio('../audio/new-ticket.mp3')
	audio.play()

	const [tick1, tick2, tick3, tick4] = payload

	if (tick1) {
		lblTicket1.textContent = 'Ticket ' + tick1.numero
		lblEscritorio1.textContent = 'Escritorio ' + tick1.escritorio
	}

	if (tick2) {
		lblTicket2.textContent = 'Ticket ' + tick2.numero
		lblEscritorio2.textContent = 'Escritorio ' + tick2.escritorio
	}

	if (tick3) {
		lblTicket3.textContent = 'Ticket ' + tick3.numero
		lblEscritorio3.textContent = 'Escritorio ' + tick3.escritorio
	}

	if (tick4) {
		lblTicket4.textContent = 'Ticket ' + tick4.numero
		lblEscritorio4.textContent = 'Escritorio ' + tick4.escritorio
	}

	})
