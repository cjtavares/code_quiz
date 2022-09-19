// creating a variable to hold all questions
var questions = ["Commonly used data types do not include:", "The condition in a if/else statment in enclosed within __________.", "Arrays in JavaScript can be used to store __________.", "String vales must be inclosed within ________ when being assined to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];

console.log(questions[0]);

var start = document.getElementById("startQuiz");




// Code to hide the section with the opening page after start button is clicked
function hideStart() {
    var q1 = document.getElementById("hide");
    if (q1.style.display === "none") {
    //   q1.style.display = "block";
    } else{
      q1.style.display = "none";
    }
  }
start.addEventListener("click", hideStart);

//   To start the timer when the start button is clciked 
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
start.addEventListener("click", setTime);

var question1 = {
    answer1: "Strings",
    answer2: "Booleans",
    answer3: "Alerts",
    answer4: "Numbers",
}

var wrong = function(x){
    if (secondsLeft > 0)
    secondsLeft -= x;
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
    wrong(10)
question1Button1.addEventListener("click", question2.showQuest2());
});

var question1Button2 = document.getElementById("answer2");
question1Button2.addEventListener("click", function(){
    wrong(10)  
question1Button2.addEventListener("click", question2.showQuest2());
});

var question1Button3 = document.getElementById("answer3");
question1Button3.addEventListener("click", function(){
    wrong(0)
question1Button3.addEventListener("click", question2.showQuest2());
});

var question1Button4 = document.getElementById("answer4");
question1Button4.addEventListener("click", function(){
    wrong(10);
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
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[1]);
ans1.textContent = (question2.answer1);
ans2.textContent = (question2.answer2);
ans3.textContent = (question2.answer3);
ans4.textContent = (question2.answer4);

var question2Button1 = document.getElementById("answer1");
question2Button1.addEventListener("click", function(){
    wrong(10)
question2Button1.addEventListener("click", question3.showQuest3());
});

var question2Button2 = document.getElementById("answer2");
question2Button2.addEventListener("click", function(){
    wrong(10)
question2Button2.addEventListener("click", question3.showQuest3());
});

var question2Button3 = document.getElementById("answer3");
question2Button3.addEventListener("click", function(){
    wrong(0)
question2Button3.addEventListener("click", question3.showQuest3());
});

var question2Button4 = document.getElementById("answer4");
question2Button4.addEventListener("click", function(){
    wrong(10)
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
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[2]);
ans1.textContent = (question3.answer1);
ans2.textContent = (question3.answer2);
ans3.textContent = (question3.answer3);
ans4.textContent = (question3.answer4);

var question3Button1 = document.getElementById("answer1");
question3Button1.addEventListener("click", function(){
    wrong(0)
question3Button1.addEventListener("click", question4.showQuest4());
});
var question3Button2 = document.getElementById("answer2");
question3Button2.addEventListener("click", function(){
    wrong(0)
question3Button2.addEventListener("click", question4.showQuest4());
});
var question3Button3 = document.getElementById("answer3");
question3Button3.addEventListener("click", function(){
    wrong(10)
question3Button3.addEventListener("click", question4.showQuest4());
});

var question3Button4 = document.getElementById("answer4");
question3Button4.addEventListener("click", function(){
    wrong(0)
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
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[3]);
ans1.textContent = (question4.answer1);
ans2.textContent = (question4.answer2);
ans3.textContent = (question4.answer3);
ans4.textContent = (question4.answer4);

var question4Button1 = document.getElementById("answer1");
question4Button1.addEventListener("click", function(){
    wrong(0)
question4Button1.addEventListener("click", question5.showQuest5());
});
var question4Button2 = document.getElementById("answer2");
question4Button2.addEventListener("click", function(){
    wrong(0)
question4Button2.addEventListener("click", question5.showQuest5());
});
var question4Button3 = document.getElementById("answer3");
question4Button3.addEventListener("click", function(){
    wrong(-30)
question4Button3.addEventListener("click", question5.showQuest5());
});

var question4Button4 = document.getElementById("answer4");
question4Button4.addEventListener("click", function(){
    wrong(0)
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
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");        
quest.textContent = (questions[4]);
ans1.textContent = (question5.answer1);
ans2.textContent = (question5.answer2);
ans3.textContent = (question5.answer3);
ans4.textContent = (question5.answer4);

var question5Button1 = document.getElementById("answer1");
question5Button1.addEventListener("click", function(){
    wrong(0)
question5Button1.addEventListener("click", showQuest4());
});

var question5Button2 = document.getElementById("answer2");
question5Button2.addEventListener("click", function(){
    wrong(0)
question5Button2.addEventListener("click", showQuest4());
});

var question5Button3 = document.getElementById("answer3");
question5Button3.addEventListener("click", function(){
    wrong(70)
question5Button3.addEventListener("click", showQuest4());
});

var question5Button4 = document.getElementById("answer4");
question5Button4.addEventListener("click", function(){
    wrong(0)
question5Button4.addEventListener("click", showQuest4());
});
}
}

function scorePage(){
    
}