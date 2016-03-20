var time = {
	mil: 0,
	sec: 0,
	min: 0,
	hour: 0,
	strTime: '00:00:00.000',
	counter: 0,
	startFlag: 0
}


time.makeStr = function (){
	
	var tempHour = this.hour;
	if (this.hour < 10) tempHour = '0' + tempHour;
		
	var tempMin = this.min;
	if (this.min < 10) tempMin = '0' + tempMin;
	
	var tempSec = this.sec;
	if (this.sec < 10) tempSec = '0' + tempSec;
	
	var tempMil = this.mil;
	if (this.mil < 100) tempMil = '0' + tempMil;
	if (this.mil < 10) tempMil = '0' + tempMil;
		
	this.strTime = ''+ tempHour + ':' + tempMin + ':' + tempSec + '.' + tempMil;
						
}
		
	
time.Tik = function () {
	
	this.makeStr();
	var timerDiv = document.getElementById('timer');
	timerDiv.innerHTML = this.strTime;
		
	this.mil +=3;

	
	if (this.mil > 999) {
		this.mil = 0;
		this.sec += 1; 
	}
	
	if (this.sec == 60) {
		this.sec = 0;
		this.min += 1;
	}
	
	if (this.min == 60) {
		this.min = 0;
		this.hour += 1;
	}
	
}


	
function removeChilds(el) {
	while(el.childNodes[0]){ el.removeChild(el.childNodes[0]);}
}


	
function Start () {
   if (time.startFlag) { 
		clearInterval(timerId);
		event.target.setAttribute('value', 'Start');
		time.startFlag = 0;
		
		var temp = document.createElement('p');
		temp.setAttribute('class', 'stop');
		temp.innerHTML = (time.counter + 1) + ' Stop: ' + time.strTime;
		splitParrent.appendChild(temp);
		time.counter++;	
	}
		
	else {
		timerId = setInterval(function(){time.Tik()}, 3); 	
		event.target.setAttribute('value', 'Stop');
		time.startFlag = 1;
	}
}


function Reset() {
	clearInterval(timerId);
	var tempDiv = document.getElementById('btStart');
	tempDiv.setAttribute('value', 'Start');
	time.startFlag = 0;
	removeChilds(splitParrent);
	time.counter = 0;
	time.hour = 0;
	time.min = 0;
	time.sec = 0;
	time.mil = 0;
	time.makeStr();
	var timerDiv = document.getElementById('timer');
	timerDiv.innerHTML = time.strTime;	
}


function Split() {
	if (time.startFlag) {
		var temp = document.createElement('p');
		temp.setAttribute('class', 'stop');
		temp.innerHTML = (time.counter + 1) +' Split: ' + time.strTime;
		splitParrent.appendChild(temp);
		time.counter++;	
	}
}



var tempButton = document.getElementById('btStart');
tempButton.addEventListener('click', Start);


var tempButton = document.getElementById('btSplit');
tempButton.addEventListener('click', Split);

var tempButton = document.getElementById('btReset');
tempButton.addEventListener('click', Reset);


time.makeStr();
var timerDiv = document.getElementById('timer');
timerDiv.innerHTML = time.strTime;
var timerId;
var splitParrent = document.getElementById('split');






