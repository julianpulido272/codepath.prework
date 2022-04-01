/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//global constants
const clueHoldTime =300; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime =1000; //how long to wait before playing sequence

//Global Variables
var pattern = []//2,2,4,3,2,1,2,4]; //secret pattern of button presses  
var progress = 0; // progress of player    
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter=0;
var random =0;


function startGame()
{
  //initialize game variables
  randPattern();
  progress = 0;
  gamePlaying = true;
  
  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}
function stopGame()
{
  gamePlaying = false;
  
  //
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn)
{
  document.getElementById("button" +btn).classList.add("lit");
}
function clearButton(btn)
{
  document.getElementById("button" +btn).classList.remove("lit");
}
function playSingleClue(btn)
{
  if(gamePlaying)
    {
      lightButton(btn);
      playTone(btn,clueHoldTime);
      setTimeout(clearButton, clueHoldTime,btn);
    }
}

function playClueSequence()
{
  context.resume();
  guessCounter =0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i=0; i<= progress; i++)
    {
      console.log("play single cue: " + pattern[i] + " in " +delay + "ms");
      setTimeout(playSingleClue,delay,pattern[i]) //set a timeout to play that clue
      delay += clueHoldTime;
      delay += cluePauseTime;
    }
}

function loseGame()
{
  stopGame();
  alert("Game Over. You Lost.");
}
function winGame()
{
  stopGame();
  alert("Congratulations! You won. ");
}
function guess(btn)
{
  console.log("user guessed: " + btn);
  if(!gamePlaying)
    {
      return;
    }
    if(pattern[guessCounter] == btn)
    {
    //Guess was correct!
      if(guessCounter == progress)
        {
          if(progress == pattern.length - 1)
            {
              //GAME OVER: WIN!
              winGame();
            }
            else
            {
              //Pattern correct. Add next segment
              progress++;
              playClueSequence();
            }
        }
          else
          {
          //so far so good... check the next guess
          guessCounter++;
          }
  }
  else
  {
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();
  }
}
function randPattern()
{
  //random = Math.floor(Math.random() * 4) +1;
  for(let i =0; i <9; i++)
    {
      random = Math.floor(Math.random() * 4) +1;
      pattern[i] = random;
    }
}

    
  
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
