const baseCards = [
    { name: 'bullbasaur', img: 'bullbasaur.png' },
    { name: 'charmander', img: 'charmander.png' },
    { name: 'eevee', img: 'eevee.png' },
    { name: 'pikachu', img: 'pikachu.png' },
    { name: 'psyduck', img: 'psyduck.png' },
    { name: 'squirtle', img: 'squirtle.png' }
];


const cardsArray = [
    ...baseCards, 
    ...baseCards
].sort( () => Math.random() - 0.5 )


const modal = document.getElementById('rules-modal')
const rulesBtn = document.getElementById('rules-btn')
const closeBtn = document.getElementById('close-btn')

rulesBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden')
})

modal.addEventListener('click', (event) => {
    if (event.target === modal)
         modal.classList.add('hidden')
})



const backImg = 'pokeball.jpg'
const winImg = 'pokecoin.jpg'

const grid = document.querySelector('#grid')
const stepsDisplay = document.querySelector('#steps')
const matchesDisplay = document.querySelector('#matches')

let stepsCount = 0
let matchesCount = 0
let chosenCardsElements = []
let isBoardLocked = false

function createBoard() {
    cardsArray.forEach((card, index) => {
        //TODO:  вивести таблицю картинок
    })
}


createBoard()