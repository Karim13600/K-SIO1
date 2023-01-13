console.log("script loaded");

//On récupère les élèments de notre calculatrice

const buttons = document.querySelectorAll("button");
console.log("buttons => ", buttons);

const screen = document.querySelector(".screen");
console.log("screen => ", screen);

const history = document.querySelector(".history");
console.log("history => ", history);

//On définit les variables utiles

let firstOperand = "";
let lastOperand = "";
let operator = "";

//On ajoute un écouteur d'événement à chaque bouton

buttons.forEach((button) => {
    //Boucle, button prend chaque valeur du tableau
    button.addEventListener("click", (e) => {
        //On récupére le contenu du bouton
        const buttonContent = e.target.innerText;
        //Si c'est un chiffre, on l'ajoute à l'operande en cours
        if (!isNaN(buttonContent) || buttonContent === ".") {
            if (operator === "") {
                firstOperand += buttonContent;
                screen.innerText = firstOperand;
            } else {
                lastOperand += buttonContent;
                screen.innerText = lastOperand;
            }
        }
        //Si c'est un opérateur on stocke
        if (
            buttonContent === "+" ||
            buttonContent === "-" ||
            buttonContent === "*" ||
            buttonContent === "/"
        ) {
            //firstOperand === true
            operator = buttonContent;
        }
        //On affiche le résultat
        if (buttonContent === "=") {
            screen.innerText = eval(
                `${firstOperand} ${operator} ${lastOperand}`
            );
        }
        //RESET
        //Si c'est le bouton AC , on réinitialise toutes les variables
        if (buttonContent === "C") {
            screen.innerText = "0";
            firstOperand = "";
            lastOperand = "";
            operator = "";
        }
    });
});

// buttons.forEach((button) => {
//     //Boucle, button prend chaque valeur du tableau
//     button.addEventListener("click", ecoute)
// });

// function ecoute(e){
//     console.log (e)
// }
