const escritorio_actual = document.getElementById('escritorio__actual')
const lblPendientes = document.getElementById('lblPendientes')
const nomas = document.getElementById('nomas')
const small  = document.getElementById('small')
const btn = document.getElementById('btn')




const searchParams = new URLSearchParams( window.location.search )

if (!searchParams.has('escritorio')) {
	window.location = 'index.html'
	throw new Error('El escritorio es obligatorio')
}

const escritorio = searchParams.get('escritorio')
escritorio_actual.textContent = `Escritorio ${escritorio}` 

const socket = io()

socket.on('connect', () => {
	btn.disabled = false
})
socket.on('disconnect', () => btn.disabled = true)

socket.on('tickets-pendientes', (tickets) => {
	lblPendientes.textContent = tickets
})

btn.addEventListener('click', () => {
	socket.emit('atender-ticket', { escritorio }, ( { ok , ticket } ) => {
		
		if (!ok) {
			small.textContent = "Nadie"
			return nomas.style.display = 'block' 
		}
		nomas.style.display = 'none'
		small.textContent = `Ticket ${ticket.numero}`

	})
})
