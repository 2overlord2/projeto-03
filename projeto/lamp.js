const turnOn = document.getElementById('ligar');
const turnOff = document. getElementById('desligar');
const lamp = document.getElementById('lampada');
function lampOn (){
    lamp.src = './img/ligada.jpeg';
    
}

function lampOff (){
    lamp.src = './img/desligada.jpeg';
    
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
