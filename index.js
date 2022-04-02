const messageEl = document.getElementById("message")
const emojiEl = document.getElementById("emoji")
const cardsEl = document.getElementById("cards")
const sumEl = document.getElementById("sum")
const startGameBtn = document.getElementById("startGame")
const newCardBtn = document.getElementById("newCard")

let myCards = []
let sum = 0

disableButton()

function getRandomCard(){
    return Math.floor(Math.random()*13)+1
}

function startGame(){
    myCards.length = 0
    newCard()
    newCard()
    messageEl.textContent = `Draw a new card?`
    emojiEl.textContent = `🤔`
    enableButton()
    checkGame()
}

function renderCards(){
    cardsEl.textContent = `Cards: ${myCards.join(", ")}`
}

function sumCards(){
    sum = 0
    for(let i=0; i<myCards.length; i++){
        sum += myCards[i]
    }
    sumEl.textContent = `Sum: ${sum}`
}

function newCard(){
    myCards.push(getRandomCard())
    sumCards()
    renderCards()
    checkGame()
}

function checkGame(){
    if(sum === 21){
        messageEl.textContent = `You've got a BLACKJACK! You Win!`
        emojiEl.textContent = `🥳`
        disableButton()
    }else if(sum > 21){
        messageEl.textContent = `NO BLACKJACK! You Lose!`
        emojiEl.textContent = `💀`
        disableButton()
    }
}

function disableButton(){
    newCardBtn.removeEventListener("click", newCard)
    newCardBtn.style.backgroundColor = "gray"
    newCardBtn.style.cursor = "not-allowed"
}

function enableButton(){
    newCardBtn.addEventListener("click", newCard)
    newCardBtn.style.backgroundColor = "#daa520"
    newCardBtn.style.cursor = "pointer"
}

startGameBtn.addEventListener("click", startGame)
