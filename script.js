// var questions = ["Commonly used data types do not include:", "The condition in a if/else statment in enclosed within __________.", "Arrays in JavaScript can be used to store __________.", "String vales must be inclosed within ________ when being assined to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];

var answer1_2 = [false, false, false, false, false];
var answer3 = [true, true, false, true, false];
var answer4 = [false, false, true, false, true];

var questions = [
    {
        question: "Commonly used data types do not include:",
        answer: [
            {text: "String", correct: false},
            {text: "Booleans", correct: false},
            {text: "Alerts", correct: true},
            {text: "Numbers", correct: false}
        ]
    }    
]
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

function hideStart() {
    var q1 = document.getElementById("hide");
    if (q1.style.display === "none") {
    //   q1.style.display = "block";
    } else{
      q1.style.display = "none";
    }
  }

var start = document.getElementById("startQuiz");
start.addEventListener("click", showQuest);
start.addEventListener("click", hideStart);
start.addEventListener("click", setTime);

var quest = document.getElementById("question");
var ans1 = document.getElementById("answer1");
var ans2 = document.getElementById("answer2");
var ans3 = document.getElementById("answer3");
var ans4 = document.getElementById("answer4");  
var questionButton1 = document.getElementById("answer1");
var questionButton2 = document.getElementById("answer2");
var questionButton3 = document.getElementById("answer3");
var questionButton4 = document.getElementById("answer4");

var i = 0
function showQuest (){
    if (i < questions.length){
        quest.textContent = questions[i];
        i++;
    } 
    
// for (var i = 0; i < questions.length; i++){
//     quest.textContent = questions[i];
//     console.log(questions[i]);
// }
}
questionButton1.addEventListener("click", showQuest);
questionButton2.addEventListener("click", showQuest);
questionButton3.addEventListener("click", showQuest);
questionButton4.addEventListener("click", showQuest);



// ans1.textContent = (question5.answer1);
// ans2.textContent = (question5.answer2);
// ans3.textContent = (question5.answer3);
// ans4.textContent = (question5.answer4);

// var question5Button1 = document.getElementById("answer1");
// questionButton1.addEventListener("click", queryAnswer(answer1_2[4]));
// question5Button1.addEventListener("click", showQuest());

// var question5Button2 = document.getElementById("answer2");
// question5Button2.addEventListener("click", queryAnswer(answer1_2[4]));
// question5Button2.addEventListener("click", showQuest());

// var question5Button3 = document.getElementById("answer3");
// question5Button3.addEventListener("click", queryAnswer(answer3[4]));
// question5Button3.addEventListener("click", showQuest());


// var question5Button4 = document.getElementById("answer4");
// question5Button4.addEventListener("click", queryAnswer(answer4[4]));
// question5Button4.addEventListener("click", showQuest());
