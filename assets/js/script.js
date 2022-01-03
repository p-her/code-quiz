var timerEl = document.getElementById('timer');
var questionnaireEl = document.getElementById('questionnaire');
var startBtnEl = document.getElementById('start-btn');
var pageContentEl = document.getElementById('page-content');
var theChoices = document.querySelector('.btn');
var formSubmit = document.querySelector('#submit-btn');
var scoreEl = document.getElementById('score');
var timeInterval;
var score = 0;
var subtractTime = 10; 

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "boolean", "alerts", "numbers"],
        answer: 2
    },
    {
        question: "The condition in an if/else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: 2

    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3
    },
    {
        question: "String values must be enclosed with ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        answer: 3
    }
]



function guess()
{
    var questionCount = 0;
        getQuestion(questionCount) 
        pageContentEl.addEventListener('click', function (e){
            var eventEl = e.target;
               
            if(eventEl.matches('.span'))
            {
                var answer = questions[questionCount].answer; 
                var userAnswer = eventEl.innerHTML;
                var theAnswer = questions[questionCount].choices[answer];   
                if(userAnswer === theAnswer){
                        
                    
                    questionCount++;
                    score += 5;
                        
                    if(questionCount < questions.length){
                    document.querySelector('.footer').style.display = "block";
                    var msg = document.getElementById('msg');
                    msg.innerHTML = "Correct!";
                        getQuestion(questionCount)     
                        
                    }else{
                        console.log('no more and end game') 
                        clearInterval(timeInterval);
                        console.log("scoreEl " + scoreEl.innerHTML);
                        var stopTime = document.getElementById('timer').innerHTML;
                          
                        scoreEl.textContent = "Your final score is " + stopTime + ".";

                        
                        endGame();
                        
                        
                    }
                        
                }else{
                    questionCount++
                    
                    
                    if(questionCount < questions.length){
                        document.querySelector('.footer').style.display = "block";
                        var msg = document.getElementById('msg');
                        msg.innerHTML = "Wrong!";
                        getQuestion(questionCount);
                        
                    }else{

                        clearInterval(timeInterval);
                        var stopTime = document.getElementById('timer').innerHTML;
                        
                    
                        scoreEl.textContent = "Your final score is " + stopTime + ".";
                      
                        endGame();
                    }
                }
    
            }
    
                
        })

 
}


function getQuestion(nextQuestion)
{
    for(var i = 0; i <=nextQuestion; i++) {
        var theQuestion = questions[i].question;
        questionnaireEl.innerHTML = theQuestion;
       
        for(var j = 0; j < 4; j++){
            var userChoices = questions[i].choices[j]
            theChoices = document.getElementById('span-'+(j+1));
            theChoices.innerHTML = userChoices;

        }
    }  
} 


function endGame(){

    document.querySelector('.form').style.display = 'block';
    
    removeElement(pageContentEl);
                        

}



function countDown () {
    var timeLeft = 80;

    timeInterval = setInterval(function(){
        timerEl.textContent = timeLeft;
       

        if(timeLeft > 0){

             timeLeft--;
        }else if(timeLeft == 0){
            console.log('timer up')
            clearInterval(timeInterval);
        }


    }, 1000);
}

var titleContainerEl = document.getElementById('title');
var btnContainerEl = document.getElementById('btn-container');
var titleTemp = document.getElementById('title');
var btnContainerTemp = document.getElementById('btn-container');
var headerTemp = document.querySelector('.header');
var tempPageContent = document.getElementById('page-content');

function removeElement(removeEl){
  
    removeEl.remove();
}



formSubmit.addEventListener('click', function(){
    var time = document.getElementById('timer').innerHTML;
   // var goBack = document.getElementById('go-back');
    var clearScore = document.getElementById('clear-score');
    console.log('tttime: ' + time)

    
    var inputbtn = document.getElementById('input-btn');
    var removeForm = document.querySelector('.form');
    var removeHeader = document.querySelector('.header');
    removeElement(removeHeader);
    removeElement(removeForm);
    var displayInfo = document.querySelector('.info');
    displayInfo.style.display = "block";

    var displayTitle = document.getElementById('info-title');
    displayTitle.innerHTML = "Highscores";

    var displayScore = document.getElementById('span-score');
    
    console.log("input value " + inputbtn.value)
    displayScore.innerHTML = inputbtn.value + " - " + time ;
    
   
})



var goBack = document.getElementById('go-back');
goBack.addEventListener('click', function(){
    removeElement(document.querySelector('.info'));

    
    document.body.appendChild(headerTemp);
    document.body.appendChild(titleTemp);
    document.body.appendChild(btnContainerTemp);
    



})

// try to figure out a new start function

startBtnEl.addEventListener('click', function(){
   
    document.querySelector('.page-content').style.display = "block";
    removeElement(titleContainerEl);
    removeElement(btnContainerEl);
    countDown();
    guess();
    
})




