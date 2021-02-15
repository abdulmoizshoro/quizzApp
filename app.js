var questions = [
    {

        question: "This set of Javascript Multiple Choice Questions & Answers (MCQs) focuses on “Object Attributes and Serialization”.",
        option1: "String",
        option2: "Object",
        option3: "Serialized Object",
        answer: "2"
    },
    {

        question: "The object has three object attributes namely",
        option1: "Class, parameters, object’s extensible flag",
        option2: "Prototype, class, object’s extensible flag",
        option3: "Prototype, class, objects’ parameters",
        answer: "2"
    },
    {

        question: "In the above snippet, firstname and surname are",
        option1: "properties",
        option2: " property values",
        option3: " property names",
        answer: "3"
    },
    {

        question: "A linkage of series of prototype objects is called as",
        option1: "prototype stack",
        option2: "prototype chain",
        option3: "prototype class",
        answer: "2"
    },
    {

        question: "In the above syntax, the datatype within the square brackets must be",
        option1: " A String",
        option2: "An object",
        option3: "An integer",
        answer: "1"
    },
    {

        question: "The basic purpose of the toLocaleString() is to",
        option1: "return a localised object representation",
        option2: "return a parsed string",
        option3: "return a localized string representation of the object",
        answer: "3"
    },
    {

        question: " Do functions in JavaScript necessarily return a value ",
        option1: "It is mandatory",
        option2: "Not necessary",
        option3: "Few functions return values by default",
        answer: "3"
    },
    {

        question: "If you have a function f and an object o, you can define a method named m of o with",
        option1: " o.m=m.f;",
        option2: " o.m=f;",
        option3: "o=f.m;",
        answer: "1"
    }
];



var percentage = document.getElementById('perc')
var marks = document.getElementById('resul')
var result = document.getElementById("result")
var btn = document.getElementById("btn")
var time = document.getElementById("clock");
var count = 0;
var score = 0;
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var div = document.getElementById("div");

question.innerHTML = "Q1) " + questions[count].question
option1.innerHTML = questions[count].option1
option2.innerHTML = questions[count].option2
option3.innerHTML = questions[count].option3

function nextQuestion() {
    
    if (count < questions.length - 1) {
        var options = document.getElementsByName("option")
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                var checkedOption = options[i].value
            }
            if(checkedOption == options[i].answer){
                score += 12.5;
                
            }
            options[i].checked = false
            btn.disabled = true
        }
        
        count++
        question.innerHTML = "Q" + (count + 1) + ") " + questions[count].question
        option1.innerHTML = questions[count].option1
        option2.innerHTML = questions[count].option2
        option3.innerHTML = questions[count].option3
        }
    else {
        time.innerHTML = "Time Out";
        result.style.display = 'block';
        div.style.display = 'none';
        percentage.innerHTML = "Your Percentage is: " + ((score/100) *100)
        marks.innerHTML = "Your score is: "+ score
    }

}


function startQuiz() {
    location = "quiz.html"
}
window.onload = function startTimer() {
    var minV = 4;
    var secV = 60;
    var int;
    var min = document.getElementById("min")
    var sec = document.getElementById("sec")

    var int = setInterval(function () {
        secV = --secV
        sec.innerHTML = secV
        min.innerHTML = minV
        if (secV < 1 && secV !== 0) {
            secV = 60;
            minV = --minV
        }
        else if (minV < 1 && secV < 1) {
            clearInterval(int)
            time.innerHTML = "Time Out";
            result.style.display = 'block';
            div.style.display = 'none';
        }
    }, 1000)
}

function enable() {
    btn.disabled = false
}
