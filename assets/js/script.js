var questions = [
  {
    questionId: 0,
    questionText: "True or False: JavaScript is a compiled language.",
    questionAnswers: [
      {
        0: "True",
      },
      {
        1: "False",
      },
    ],
    correctAnswer: 1,
  },
  {
    questionId: 1,
    questionText: "Which is not a primitive data type in JavaScript?",
    questionAnswers: [
      {
        0: "Number",
      },
      {
        1: "String",
      },
      {
        2: "Boolean",
      },
      {
        3: "Array",
      },
    ],
    correctAnswer: 3,
  },
];

var main = document.querySelector("main");

var score = 0;

var questionNumber = 0;

var startQuiz = function (event) {
  main.innerHTML = "";
  // TODO: Start a timer here
  generateQuestion(questions[0]);
};

var generateQuestion = function (questionDataObj) {
  main.innerHTML = "";
  var questionEl = document.createElement("div");
  questionEl.setAttribute("data-question-id", questionDataObj.questionId);
  questionEl.addEventListener("click", checkAnswer);
  main.appendChild(questionEl);

  var questionTextEl = document.createElement("h2");
  questionTextEl.className = "question-text";
  questionTextEl.innerHTML = `${questionDataObj.questionText}`;
  questionEl.appendChild(questionTextEl);

  var choicesListEl = document.createElement("ul");
  choicesListEl.className = "choices-list";
  questionEl.appendChild(choicesListEl);

  for (var i = 0; i < questionDataObj.questionAnswers.length; i++) {
    var choiceEl = document.createElement("li");
    choiceEl.className = "choice";
    choiceEl.innerHTML = Object.values(questionDataObj.questionAnswers[i])[0];
    choiceEl.setAttribute(
      "data-answer-id",
      Object.keys(questionDataObj.questionAnswers[i])[0]
    );
    choiceEl.setAttribute("data-question-id", questionDataObj.questionId);

    choicesListEl.appendChild(choiceEl);
  }
};

var checkAnswer = function (event) {
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].questionId === parseInt(event.target.dataset.questionId)) {
      var correctAnswer = questions[i].correctAnswer;
    }
  }
  if (parseInt(event.target.dataset.answerId) === correctAnswer) {
    console.log("Correct answer!");
    score++;
    questionNumber++;
  } else {
    console.log("Wrong answer! ");
    questionNumber++;
  }
  console.log(questionNumber);
  console.log(questions.length);

  if (questionNumber === questions.length) {
    completeQuiz();
  } else {
    generateQuestion(questions[questionNumber]);
  }
};

var completeQuiz = function () {
  main.innerHTML = `<h1>Quiz Complete!</h1>`;
};

document.querySelector("#start-quiz-btn").addEventListener("click", startQuiz);
