// creating a variable to hold all questions
var questions = ["Commonly used data types do not include:", "The condition in a if/else statement in enclosed within __.", "Arrays in JavaScript can be used to store __.", "String vales must be enclosed within __ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];
console.log(questions[0]);

var start = document.getElementById("startQuiz");
start.addEventListener("click", function() {
    var button = document.querySelector(".button-container");
    button.style.display = "block";
})



// Code to hide the section with the opening page after start button is clicked
function hideStart() {
    var q1 = document.getElementById("hide");
      q1.style.display = "none";
    }
  
start.addEventListener("click", hideStart);

//   To start the timer when the start button is clciked 
var secondsLeft = 75;
var timeLeft = document.getElementById("timer");
timeLeft.textContent = ("Start time: " +secondsLeft+ " seconds");

var timer;

function setTime() {
timer = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = "Time left: " +secondsLeft+ " seconds"; 

    if(secondsLeft === 0) {
      // Stops execution of action at set interval   
      clearInterval(timer);
      zeroTimer();
    }

  }, 1000);
}
start.addEventListener("click", setTime);


function zeroTimer(){


    var zero = document.querySelector("#zero-timer")
    zero.style.display = "block";

    var button = document.querySelector("#questionBlock")
     button.style.display = "none";
 
    
}


var question1 = {
    answer1: "Strings",
    answer2: "Booleans",
    answer3: "Alerts",
    answer4: "Numbers",
}

// Question 1: set info to show question 1 and asign functions to question 1 answer buttons
function showQuest1(){
var quest = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");    
quest.textContent = (questions[0]);
ans1.textContent = (question1.answer1);
ans2.textContent = (question1.answer2);
ans3.textContent = (question1.answer3);
ans4.textContent = (question1.answer4);


var question1Button1 = document.getElementById("answer1");
question1Button1.addEventListener("click", function(){
    if(secondsLeft > 10){
    secondsLeft = secondsLeft - 10;
    }else {
    zeroTimer();
    }
question1Button1.addEventListener("click", question2.showQuest2());
});

var question1Button2 = document.getElementById("answer2");
question1Button2.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question1Button2.addEventListener("click", question2.showQuest2());
});

var question1Button3 = document.getElementById("answer3");
question1Button3.addEventListener("click", function(){
    
question1Button3.addEventListener("click", question2.showQuest2());
});

var question1Button4 = document.getElementById("answer4");
question1Button4.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question1Button4.addEventListener("click", question2.showQuest2());

});
}
start.addEventListener("click", showQuest1);

// Question 2: set info to show question 2 and asign functions to question 2 answer buttons
var question2 = {
    answer1: "Quotes",
    answer2: "Curly brackets",
    answer3: "Parenthese",
    answer4: "Squar brackets",  
   
 showQuest2: function (){
var quest = document.getElementById("question");
// var ans1 = document.getElementById("answer1");
// var ans2 = document.getElementById("answer2");
// var ans3 = document.getElementById("answer3");
// var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[1]);
// ans1.textContent = (question2.answer1);
// ans2.textContent = (question2.answer2);
// ans3.textContent = (question2.answer3);
// ans4.textContent = (question2.answer4);
// ans1.setAttribute("id", "q2a1")
// ans2.setAttribute("id", "q2a2")
// ans3.setAttribute("id", "q2a3")
// ans4.setAttribute("id", "q2a4")

var buttonContainer = document.querySelector(".button-container");
buttonContainer.innerHTML="";
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
ans1.setAttribute("class", "btn");
ans1.setAttribute("id", "answer1");
ans2.setAttribute("class", "btn");
ans2.setAttribute("id", "answer2");
ans3.setAttribute("class", "btn");
ans3.setAttribute("id", "answer3");
ans4.setAttribute("class", "btn");
ans4.setAttribute("id", "answer4");
ans1.textContent = (question2.answer1);
ans2.textContent = (question2.answer2);
ans3.textContent = (question2.answer3);
ans4.textContent = (question2.answer4);
buttonContainer.appendChild(ans1);
buttonContainer.appendChild(ans2);
buttonContainer.appendChild(ans3);
buttonContainer.appendChild(ans4);

var question2Button1 = document.getElementById("answer1");
question2Button1.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question2Button1.addEventListener("click", question3.showQuest3());
});

var question2Button2 = document.getElementById("answer2");
question2Button2.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question2Button2.addEventListener("click", question3.showQuest3());
});

var question2Button3 = document.getElementById("answer3");
question2Button3.addEventListener("click", function(){
    
question2Button3.addEventListener("click", question3.showQuest3());
});

var question2Button4 = document.getElementById("answer4");
question2Button4.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question2Button4.addEventListener("click", question3.showQuest3());
});
}
}

// Question 3: set info to show question 3 and asign functions to question 3 answer buttons
var question3 = {
    answer1: "Numbers & Strings",
    answer2: "Other aryyas",
    answer3: "Booleans",
    answer4: "All of the above",
 showQuest3: function (){
var quest = document.getElementById("question");
// var ans1 = document.getElementById("answer1");
// var ans2 = document.getElementById("answer2");
// var ans3 = document.getElementById("answer3");
// var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[2]);
var buttonContainer = document.querySelector(".button-container");
buttonContainer.innerHTML="";
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
ans1.setAttribute("class", "btn");
ans1.setAttribute("id", "answer1");
ans2.setAttribute("class", "btn");
ans2.setAttribute("id", "answer2");
ans3.setAttribute("class", "btn");
ans3.setAttribute("id", "answer3");
ans4.setAttribute("class", "btn");
ans4.setAttribute("id", "answer4");
ans1.textContent = (question3.answer1);
ans2.textContent = (question3.answer2);
ans3.textContent = (question3.answer3);
ans4.textContent = (question3.answer4);
buttonContainer.appendChild(ans1);
buttonContainer.appendChild(ans2);
buttonContainer.appendChild(ans3);
buttonContainer.appendChild(ans4);


var question3Button1 = document.getElementById("answer1");
question3Button1.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question3Button1.addEventListener("click", question4.showQuest4());
});
var question3Button2 = document.getElementById("answer2");
question3Button2.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question3Button2.addEventListener("click", question4.showQuest4());
});
var question3Button3 = document.getElementById("answer3");
question3Button3.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question3Button3.addEventListener("click", question4.showQuest4());
});

var question3Button4 = document.getElementById("answer4");
question3Button4.addEventListener("click", function(){
    
question3Button4.addEventListener("click", question4.showQuest4());
});
}
}

// Question 4: set info to show question 4 and asign functions to question 4 answer buttons
var question4 = {
    answer1: "Commas",
    answer2: "Curlly brackets",
    answer3: "Quotations",
    answer4: "Parentheses",
    showQuest4: function showQuest4(){
var quest = document.getElementById("question");
// var ans1 = document.getElementById("answer1");
// var ans2 = document.getElementById("answer2");
// var ans3 = document.getElementById("answer3");
// var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[3]);
var buttonContainer = document.querySelector(".button-container");
buttonContainer.innerHTML="";
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
ans1.setAttribute("class", "btn");
ans1.setAttribute("id", "answer1");
ans2.setAttribute("class", "btn");
ans2.setAttribute("id", "answer2");
ans3.setAttribute("class", "btn");
ans3.setAttribute("id", "answer3");
ans4.setAttribute("class", "btn");
ans4.setAttribute("id", "answer4");
ans1.textContent = (question4.answer1);
ans2.textContent = (question4.answer2);
ans3.textContent = (question4.answer3);
ans4.textContent = (question4.answer4);
buttonContainer.appendChild(ans1);
buttonContainer.appendChild(ans2);
buttonContainer.appendChild(ans3);
buttonContainer.appendChild(ans4);

var question4Button1 = document.getElementById("answer1");
question4Button1.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question4Button1.addEventListener("click", question5.showQuest5());
});
var question4Button2 = document.getElementById("answer2");
question4Button2.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question4Button2.addEventListener("click", question5.showQuest5());
});
var question4Button3 = document.getElementById("answer3");
question4Button3.addEventListener("click", function(){
    
question4Button3.addEventListener("click", question5.showQuest5());
});

var question4Button4 = document.getElementById("answer4");
question4Button4.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question4Button4.addEventListener("click", question5.showQuest5());
});
}
}

// Question 5: set info to show question 5 and asign functions to question 5 answer buttons
var question5 = {
    answer1: "JavaScript",
    answer2: "Terminal/bash",
    answer3: "For loops",
    answer4: "Consale log",
    showQuest5:function (){
var quest = document.getElementById("question");
// var ans1 = document.getElementById("answer1");
// var ans2 = document.getElementById("answer2");
// var ans3 = document.getElementById("answer3");
// var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[4]);
var buttonContainer = document.querySelector(".button-container");
buttonContainer.innerHTML="";
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
ans1.setAttribute("class", "btn");
ans1.setAttribute("id", "answer1");
ans2.setAttribute("class", "btn");
ans2.setAttribute("id", "answer2");
ans3.setAttribute("class", "btn");
ans3.setAttribute("id", "answer3");
ans4.setAttribute("class", "btn");
ans4.setAttribute("id", "answer4");
ans1.textContent = (question5.answer1);
ans2.textContent = (question5.answer2);
ans3.textContent = (question5.answer3);
ans4.textContent = (question5.answer4);
buttonContainer.appendChild(ans1);
buttonContainer.appendChild(ans2);
buttonContainer.appendChild(ans3);
buttonContainer.appendChild(ans4);

var question5Button1 = document.getElementById("answer1");
question5Button1.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question5Button1.addEventListener("click", scorePage());
question5Button1.addEventListener("click", clearInterval(timer));
});

var question5Button2 = document.getElementById("answer2");
question5Button2.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question5Button2.addEventListener("click", scorePage());
question5Button2.addEventListener("click", clearInterval(timer));
});

var question5Button3 = document.getElementById("answer3");
question5Button3.addEventListener("click", function(){
    if(secondsLeft > 10){
        secondsLeft = secondsLeft - 10;
        }else {
        zeroTimer();
        }
question5Button3.addEventListener("click", scorePage());
question5Button3.addEventListener("click", clearInterval(timer));
});

var question5Button4 = document.getElementById("answer4");
question5Button4.addEventListener("click", function(){
    
question5Button4.addEventListener("click", scorePage());
question5Button4.addEventListener("click", clearInterval(timer));
});
}
}

function scorePage(){
    
    
    var score = document.querySelector("#scoreP")
    score.style.display = "block";
   
    var button = document.querySelector("#questionBlock")
     button.style.display = "none";
    
    localStorage.setItem("score1", secondsLeft);
    

    var score1 = localStorage.getItem("score1")

    var finalScore = document.getElementById("score");
    finalScore.textContent = "Your final score is " +score1+ "!";
    console.log(score1)

    var timerDisplay = document.getElementById("timer");
    timerDisplay.style.display = "none";
}

var score1 = localStorage.getItem("score1")
console.log(score1)





var intInput = document.getElementById('name')
var leaderBoard = document.querySelector("#highScore");
var scores = []

function renderScore(){
    leaderBoard.innerHTML = "";

    for (var i = 0; i < scores.length; i++) {
        var enteredScore = scores[i];

        var li = document.createElement('li');
        li.textContent = enteredScore;
        li.setAttribute("data-index", i);
        leaderBoard.appendChild(li);
    }    
}
console.log(scores)
// function init() {
//     // Get stored todos from localStorage
//     var storedScores = JSON.parse(localStorage.getItem("scores"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedScores !== null) {
//       scores = storedScores;
//     }
  
//     // This is a helper function that will render todos to the DOM
//     renderScore();
//   }

//   function storeScores() {
//     // Stringify and set key in localStorage to todos array
//     localStorage.setItem("scores", JSON.stringify(scores));
//   }

// var nameForm = document.querySelector("#scoreP")
// var nameInput = document.querySelector('#name')
//   nameForm.addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var nameText = nameInput.value.trim();
  
//     // Return from function early if submitted todoText is blank
//     if (nameText === "") {
//       return;
//     }
  
//     // Add new todoText to todos array, clear the input
//     scores.push(todoText);
//     nameInput.value = "";
  
//     // Store updated todos in localStorage, re-render the list
//     storeScores();
//     renderScore();
//   });



// // Add click event to todoList element 
// leaderBoard.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {
//       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//       todos.splice(index, 1);
  
//       // Store updated todos in localStorage, re-render the list
//       storeScores();
//       renderScore();
//     }
//   });