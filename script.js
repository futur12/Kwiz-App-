// /*
//     VARIABLES
// -------------------*/
// const question = document.querySelector(".question")
// const options = document.querySelector(".options")
// const score = document.querySelector(".score")
// const message = document.querySelector(".message")
// const indicator = document.querySelector(".indicator")
// const questions = {
//     "Which of the following is used to request and load data Asynchronously?": [["SQL", "Ajax", "JSON", "Bootstrap"], "Ajax"],
//     "Which of the following is not an inbuilt array function in JavaScript?": [["filter", "forEach", "map", "set"], "set"],
//     "You want to store an Array called 'items' to local storage. How will you convert it?": [["JSON.stringify(items)", "items.indexOf()", "Object.keys(items)", "item.toString()"], "JSON.stringify(items)"],
//     "Which property references the DOM object that dispatched an event?": [["self", "object", "target", "source"], "target"],
//     "How does a function create a closure?": [["It reloads the document whenever the value changes", "It returns a reference to a variable in its parent scope", "It completes execution without returning", "It copies a local variable to the global scope"], "It returns a reference to a variable in its parent scope"],
//     "How is a forEach statement different from a for statement?": [["Only a for statement uses a callback function", "A for statement is generic, but a forEach statement can be used only with an array", "Only a forEach statement lets you specify your own iterator.", "A forEach statement is generic, but a for statement ca be used only with an array"], "A for statement is generic, but a forEach statement can be used only with an array"]
// }



/*
    VARIABLES
-------------------*/
const question = document.querySelector(".question");
const options = document.querySelector(".options");
const score = document.querySelector(".score");   

const message = document.querySelector(".message");
const indicator = document.querySelector(".indicator");

const  
 questions = {

  "Quelle est la somme de 2 et 3 ?": [[1, 4, 5, 6], 5],
  "Quel est le produit de 4 et 8 ?": [[16, 24, 32, 40], 32],
  "Quelle est la valeur absolue de -5 ?": [[0, 5, -5, 10], 5],
  "Quelle est la racine carrée de 16 ?": [[2, 3, 4, 8], 4],
  "Quel est le périmètre d'un carré de côté 5 cm ?": [[10, 15, 20, 25], 20],
  "Quelle est l'aire d'un rectangle de longueur 3 cm et de largeur 4 cm ?": [[6, 8, 10, 12], 12],
  "Résoudre pour x : x + 2 = 7": [[3, 4, 5, 6], 5],
  "Résoudre pour y : 2y - 1 = 5": [[2, 3, 4, 5], 3],
  "Quel est le plus grand commun diviseur (PGCD) de 12 et 18 ?": [[3, 6, 9, 12], 6],
  "Quel est le plus petit commun multiple (PPCM) de 4 et 6 ?": [[8, 12, 16, 20], 12],
  "Quel nombre est divisible par 3 ?": [[3, 5, 7, 9], 3],
  "Quel nombre est pair ?": [[2, 4, 5, 7], 2],
  "Quel nombre est premier ?": [[2, 4, 6, 8], 2],
  "Quelle est la pente de la droite y = 2x + 1 ?": [[1, 2, 3, 4], 2],
  "Quelle est l'ordonnée à l'origine de la droite y = mx + b (avec m = 2 et b = 1) ?": [[1, 2, 3, 4], 1],
//   "Quelle est l'équation de la droite passant par les points (1, 3) et (2, 5) ?": [[y = x + 2, y = 2x + 1, y = x - 1, y = 3x], y = 2x + 1],
//   "Quel est le volume d'un cube de côté 4 cm ?": [[16, 24, 32, 64], 64],
  "Quelle est l'aire totale d'un cube de côté 6 cm ?": [[36, 72, 108, 144], 108],
  "Quelle est la circonférence d'un cercle de rayon 7 cm ? (Utilisez π ≈ 3.14)": [[14, 21, 28, 35], 44],
  "Quelle est l'aire d'un cercle de rayon 5 cm ? (Utilisez π ≈ 3.14)": [[25, 31, 37, 43], 78.54],
//   "Quel est le théorème de Pythagore ?": [[a^2 + b^2 = c^2, a^2 - b^2 = c^2, a + b = c, a * b = c], a^2 + b^2 = c^2],
//   "Quelle est la dérivée de la fonction f(x) = x^2 ?": [[2x, x^3, x, 1], 2x],
//   "Quelle est l'intégrale de la fonction f(x) = 2x ?": [[x^2, 2x^3, x, 1], x^2],
//   "Quel est le domaine de définition de la fonction f(x) = 1/x ?": [[Tous_les_réels_sauf_0, Tous_les_réels, Entiers_seulement, Nombres_positifs_seulement], Tous_les_réels_sauf_0],
//   "Quelle est l'image de la fonction f(x) = x^2 ?": [[Tous les réels, Réels positifs ou nuls, Entiers seulement, Nombres négatifs seulement], Réels positifs ou nuls],
//   "Résoudre l'équation 2x + 5 = 13": [[-4, -2, 2, 4], 4],
//   "Quel est le résultat de (-3)^2 ?": [[9, -9, 6, -6], 9],
//   "Simplifier l'expression 5x + 2x - 3x": [[4x, 5x, 6x, 7x], 4x],
  "Si un angle mesure 30 degrés, quel est son complément ?": [[30, 60, 90, 120], 60],
  "Dans un triangle équilatéral, tous les angles mesurent en degre :": [[30 , 45, 60, 90], 60],
//   "Un cercle a un diamètre de 10 cm. Quel est son rayon ?": [[2 cm, 5 cm, 10 cm, 20 cm], 5 cm],
//   "Quelle est la probabilité de tirer un as d'un jeu de 52 cartes ?": [[1/52, 1/13, 1/4, 1/2], 1/13],
//   "La moyenne de 2, 4 et 6 est :": [[2, 3, 4, 5], 4],
//   "La médiane de 1, 3, 5, 7, 9 est :": [[3, 5, 7, 9], 5],
//   "Le mode de l'ensemble de données 1, 2, 2, 3, 4, 4, 4 est :": [[1, 2, 3, 4], 4],
//   "Si un objet coûte 100 € et on applique une réduction de 20%, quel est le nouveau prix ?": [[80 €, 70 €, 60 €, 50 €], 80 €],
//   "Si un investissement de 1000 € rapporte 5% d'intérêts par an, combien d'argent aura-t-on après un an ?": [[1050 €, 1100 €, 1150 €, 1200 €], 1050 €],
//   "Un train parcourt 120 km en 2 heures. Quelle est sa vitesse moyenne en km/h ?": [[40 km/h, 60 km/h, 80 km/h, 100 km/h], 60 km/h],
};



let scoreValue = 0
let indicatorWidth = 0

/*
    EVENT LISTENERS
----------------------*/
document.addEventListener("DOMContentLoaded", loadFirstQuestion)
options.addEventListener("click", onOptionSelect)

/*
    FUNCTIONS
-----------------*/

// Load the first question on page load
function loadFirstQuestion() {
    // load question
    let firstQuestion = Object.keys(questions)[0]
    question.textContent = firstQuestion
    // load options
    let firstOptions = Object.values(questions)[0][0]
    firstOptions.forEach(function(item) {
        let li = document.createElement("li")
        li.textContent = item
        options.appendChild(li)
    })
}

// compare the clicked option with correct answer & update the score
function onOptionSelect(e) {
    let optionSelected = e.target.textContent
    let questionDisplayed = e.target.parentElement.previousElementSibling.textContent
    let correctAnswer = questions[questionDisplayed][1]
    if (optionSelected == correctAnswer) {
        incrementScore()
        // loadNextQuestion()
    } else {
        loadNextQuestion()
    }
}

// load next question
function loadNextQuestion() {
    let questionDisplayed = question.textContent
    let questionsArray = Object.keys(questions)
    let currentQuestionIndex = questionsArray.indexOf(questionDisplayed)
    let nextIndex = currentQuestionIndex + 1
    if (nextIndex < questionsArray.length) {
        let nextQuestion = questionsArray[nextIndex]
        question.textContent = nextQuestion
        loadOptions(nextQuestion)
        // updating the progress bar
        indicatorWidth += 100 / (questionsArray.length - 1)
        if (indicatorWidth <= 100) {
            indicator.style.width = indicatorWidth.toString() + "%"
        }
    } else {
        // if all questions loaded - load the first question and display the final score
        let lastScore = scoreValue
        resetScore()
        options.innerHTML = ""
        loadFirstQuestion()
        let messageString = "You scored: " + `${lastScore}` + "/" + `${questionsArray.length}`
        message.textContent = messageString
        hideMessage()
        // resetting the progress bar
        indicatorWidth = 0
        indicator.style.width = indicatorWidth.toString() + "%"
    }
}

// load options for a given question
function loadOptions(ques) {
    let quesOptions = questions[ques][0]
    options.innerHTML = ""
    quesOptions.forEach(function(item) {
        let li = document.createElement("li")
        li.textContent = item
        options.appendChild(li)
    })
}

// increment and update the score
function incrementScore() {
    scoreValue++
    score.textContent = scoreValue
}

//reset score
function resetScore() {
    scoreValue = 0
    score.textContent = scoreValue
}

// hide message
function hideMessage() {
    setTimeout(function() {
        message.textContent = ""
    }, 3500)
}