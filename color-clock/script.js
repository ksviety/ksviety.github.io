const clock = document.getElementById("clock")
const color = document.getElementById("color")

var showColons = true

setInterval(() => {
	tick()
}, 1000)

const tick = () => {
	const time = new Date();
	const hour = time.getHours()
	const minute = time.getMinutes()
	const second = time.getSeconds()
	
	if (hour + minute + second >= 130) {
		document.body.style.color = "#000000"
	}
	
	clock.textContent = 
		addLeadingZero(hour.toString()) + 
		(showColons ? ':' : ' ') + 
		addLeadingZero(minute.toString()) + 
		(showColons ? ':' : ' ') + 
		addLeadingZero(second.toString())
	
	color.textContent = timeToColor(time).toUpperCase()
	document.body.style.background = timeToColor(time)
	
	showColons = !showColons
}

const timeToColor = (time) => {
	const hour = time.getHours()
	const minute = time.getMinutes()
	const second = time.getSeconds()
	const milliseconds = time.getMilliseconds()
	
	var red = addLeadingZero(Math.floor(((hour / 24) * 255)).toString(16))
	var green = addLeadingZero(Math.floor(((minute / 60) * 255)).toString(16))
	var blue = addLeadingZero(Math.floor(((second / 60) * 255)).toString(16))
	
	return '#'+red+green+blue
}

const addLeadingZero = (s) => {
	if (s.length < 2) {
		return '0' + s
	}
	return s
}

const bodyClicked = (body) => {
	body.requestFullscreen()
}