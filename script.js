var questions = ["Commonly used data types do not include:", "The condition in a if/else statment in enclosed within __________.", "Arrays in JavaScript can be used to store __________.", "String vales must be inclosed within ________ when being assined to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];

console.log(questions[0]);

var start = document.getElementById("startQuiz");
start.addEventListener("click", setTime);
start.addEventListener("click", showQuest1);
start.addEventListener("click", myFunction);

function myFunction() {
    var q1 = document.getElementById("hide");
    if (q1.style.display === "none") {
      q1.style.display = "block";
    } else{
      q1.style.display = "none";
    }
  }

var secondsLeft = 75;
var timeLeft = document.getElementById("timer");
timeLeft.textContent = ("Start time: " +secondsLeft+ " seconds");

function setTime() {
var timer = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = "Time left: " +secondsLeft+ " seconds"; 

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timer);
    //   scorePage();
    }

  }, 1000);
}

var question1 = {
    answer1: "Strings",
    answer2: "Booleans",
    answer3: "Alerts",
    answer4: "Numbers",
    answer1Check: false,
    answer2Check: false,
    answer3Check: true,
    answer4Check: false,
}


// Question 1
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
var question1Buttons = document.getElementById("answer1");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest2());
});
var question1Buttons = document.getElementById("answer2");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest2());
});
var question1Buttons = document.getElementById("answer3");
question1Buttons.addEventListener("click", function(){
question1Buttons.addEventListener("click", showQuest2());
});
var question1Buttons = document.getElementById("answer4");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest2());
});
}

var question2 = {
    answer1: "Quotes",
    answer2: "Curly brackets",
    answer3: "Parenthese",
    answer4: "Squar brackets",
    answer1Check: false,
    answer2Check: false,
    answer3Check: true,
    answer4Check: false,
}

function showQuest2(){
var quest = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[1]);
ans1.textContent = (question2.answer1);
ans2.textContent = (question2.answer2);
ans3.textContent = (question2.answer3);
ans4.textContent = (question2.answer4);
var question1Buttons = document.getElementById("answer1");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest3());
});
var question1Buttons = document.getElementById("answer2");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest3());
});
var question1Buttons = document.getElementById("answer3");
question1Buttons.addEventListener("click", function(){
question1Buttons.addEventListener("click", showQuest3());
});
var question1Buttons = document.getElementById("answer4");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest3());
});
}


var question3 = {
    answer1: "Numbers & Strings",
    answer2: "Other aryyas",
    answer3: "Booleans",
    answer4: "All of the above",
    answer1Check: false,
    answer2Check: false,
    answer3Check: true,
    answer4Check: false,
}

function showQuest3(){
var quest = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[2]);
ans1.textContent = (question3.answer1);
ans2.textContent = (question3.answer2);
ans3.textContent = (question3.answer3);
ans4.textContent = (question3.answer4);
var question1Buttons = document.getElementById("answer1");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest4());
});
var question1Buttons = document.getElementById("answer2");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest4());
});
var question1Buttons = document.getElementById("answer3");
question1Buttons.addEventListener("click", function(){
question1Buttons.addEventListener("click", showQuest4());
});
var question1Buttons = document.getElementById("answer4");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest4());
});
}

var question4 = {
    answer1: "Commas",
    answer2: "Curlly brackets",
    answer3: "Quotations",
    answer4: "Parentheses",
    answer1Check: false,
    answer2Check: false,
    answer3Check: true,
    answer4Check: false,
}

function showQuest4(){
var quest = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[3]);
ans1.textContent = (question4.answer1);
ans2.textContent = (question4.answer2);
ans3.textContent = (question4.answer3);
ans4.textContent = (question4.answer4);
var question1Buttons = document.getElementById("answer1");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest5());
});
var question1Buttons = document.getElementById("answer2");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest5());
});
var question1Buttons = document.getElementById("answer3");
question1Buttons.addEventListener("click", function(){
question1Buttons.addEventListener("click", showQuest5());
});
var question1Buttons = document.getElementById("answer4");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest5());
});
}

var question5 = {
    answer1: "JavaScript",
    answer2: "Terminal/bash",
    answer3: "For loops",
    answer4: "Consale log",
    answer1Check: false,
    answer2Check: false,
    answer3Check: true,
    answer4Check: false,
}

function showQuest5(){
var quest = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[2]);
ans1.textContent = (question5.answer1);
ans2.textContent = (question5.answer2);
ans3.textContent = (question5.answer3);
ans4.textContent = (question5.answer4);
var question1Buttons = document.getElementById("answer1");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest4());
});
var question1Buttons = document.getElementById("answer2");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest4());
});
var question1Buttons = document.getElementById("answer3");
question1Buttons.addEventListener("click", function(){
question1Buttons.addEventListener("click", showQuest4());
});
var question1Buttons = document.getElementById("answer4");
question1Buttons.addEventListener("click", function(){
    if (secondsLeft > 0)
    secondsLeft - 10;
question1Buttons.addEventListener("click", showQuest4());
});
}

function scorePage(){
    
}
