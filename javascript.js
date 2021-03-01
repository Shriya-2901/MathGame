var play=false;
var x;
var y;
var score=0;
var ans;
//are we playing?
document.getElementById("startreset").onclick=function()
{if(play==false)
{
    play=true;
    document.getElementById("startreset").innerHTML="Reset Game";
    document.getElementById("scorevalue").value=0;
    document.getElementById("timeremaining").style.display='block';
    var counter=document.getElementById("timeremaining");
    var t=60;
    var action=setInterval
    (function(){ t--;counter.innerHTML="Time Remaining:"+t+"sec";
               if(t==0) {clearInterval(action);
                        gameover();
                        }
                         
               },1000);
    
    qa();
    
   }
else
{ location.reload();}}

 for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    //check if we are playing     
    if(play == true){//yes
        if(this.innerHTML == ans){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            qa();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}
       
    function stopCountdown(){
    clearInterval(action);   
}

//hide an element

function hide(Id){
    document.getElementById(Id).style.display = "none";   
}

//show an element

function show(Id){
    document.getElementById(Id).style.display = "block";   
}

function gameover(){
    
    document.getElementById("gameover").style.display='block';
    document.getElementById("gameover").innerHTML="<p>Game over!</p><p>Your score is:</p>"+ score;
    document.getElementById("timeremaining").style.display='none';
    document.getElementById("startreset").innerHTML="Start game";
    document.getElementById("timeremaining").style.display='none';
    
}

function qa()
{
    var x=Math.floor(Math.random()*10);
    var y=Math.floor(Math.random()*10);
    ans=x*y;
    document.getElementById("question").innerHTML=x+"x"+y;
    var correctpos=Math.round(Math.random()*3)+1;
    
    document.getElementById("box"+correctpos).innerHTML=ans;
   var answers = [ans];
    for(var i=1; i<=4;i++)
        {
            if(i!=correctpos)
                {
            
                   var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
                }
            
        }}
    
    


  

//if we are playing

    
    
    
    

//set score to 0
//reload page
//reduce time in loops
//timeleft?
 //yes then continue
//no then gameover
//change button to reset
//generate QA
// if click on answerbox
   //if we are playing
     //correct?
         //yes
              //increase score
              //show correct answer box
