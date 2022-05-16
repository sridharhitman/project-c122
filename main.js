x = 0;
y = 0;
var screenWidth = 0;
var screenHeight = 0;
drawApple = "";
toNumber = '';
var SpeechRecognition = window.webkitSpeechRecognition;
apple = 'apple.png' ;
var recognition = new SpeechRecognition();
function preload(){
  loadImage('apple.png');
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
 
 console.log(event); 
 content = event.results[0][0].transcript;
 toNumber = Number(content);
if(Number.isInteger(toNumber)){
  document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  drawApple = 'set';
}
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screenWidth = window.innerWidth;
 screenHeight = window.innerHeight;
 canvas = createCanvas(screenWidth, screenHeight-150);
 canvas.position();
}

function draw() {
  if(drawApple == "set")
  {
    for(var i = 1; i <= toNumber; i++){
      x = Math.floor(Math.random()*700)
      x = Math.floor(Math.random()*400);
      image(apple, x,y,50,50)
    }
    document.getElementById("status").innerHTML = toNumber + " Apples drawn";
    speak();
    drawApple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = toNumber + 'Apples drawn'
}
