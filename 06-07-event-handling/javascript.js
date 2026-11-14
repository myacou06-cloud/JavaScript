const grid = document.getElementById('grid')
const resultDisplay = document.getElementById('result')

const width = 15
const totalSquares = width * width
const squares = []
const bombsRemoved = []
const bombs = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
]

let shoterIndex = 217
let directionRight = true
let xStep = 1
let timerId

function createBoard() {
    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
    }
}
console.log(squares)

function drawBombs(){
    bombs.forEach((bombindex, i)=>{
        squares[bombindex].classList.add('bomb')
    })
}

function moveShooter(event) {
    
}
function shoot(event) {
    
}
function removeBombs(params) {
    bombs.forEach((bombindex, i)=>{
        squares[bombindex].classList.remove('bomb')
    })
}
function moveBombs() {
    // TODO: додати рух до бомб
}



createBoard()
drawBombs()
squares[shoterIndex].classList.add('shooter')

document.addEventListener("keydown", moveShooter)
document.addEventListener("keydown", shoot)
timerId = setInterval(moveBombs, 500)
