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
        if(!bombsRemoved.includes(i)){
            squares[bombindex].classList.add('bomb')
        }
        
    })
}

function moveShooter(event) {
    squares[shoterIndex].classList.remove('shooter')


    if(event.code == 'ArrowLeft' && shoterIndex % width !== 0){
        shoterIndex--
    }else if(event.code == 'ArrowRight' && shoterIndex % width !== width-1){
        shoterIndex++
    }

    squares[shoterIndex].classList.add('shooter')
}
function shoot(event) {
    //console.log(event)

    if(event.code !== "ArrowUp") return

    let shootTimerId
    let currentSootIndex = shoterIndex

    shootTimerId = setInterval(()=>{
        if(currentSootIndex > 0){
            squares[currentSootIndex].classList.remove('shoot')
        }

        currentSootIndex -= width

        if(currentSootIndex < 0){
            squares[currentSootIndex].classList.remove('shoot')
            clearInterval(shootTimerId)
            return
        }

        if(squares[currentSootIndex].classList.contains('bomb')){
            squares[currentSootIndex].classList.remove('bomb')
            squares[currentSootIndex].classList.add('boom')
            setTimeout(()=>{
                squares[currentSootIndex].classList.remove('boom')
            }, 300)

            clearInterval(shootTimerId)

            const bombIndex = bombs.indexOf(currentSootIndex)
            bombsRemoved.push(bombIndex)
            resultDisplay.textContent = bombsRemoved.length
        }else{
            squares[currentSootIndex].classList.add('shoot')
        }

        squares[currentSootIndex].classList.add('shoot')

    }, 100)
}
function removeBombs(params) {
    bombs.forEach((bombindex, i)=>{
        squares[bombindex].classList.remove('bomb')
    })
}
function moveBombs() {

    //clean display
    removeBombs()

    //2 розрахування положення

    let yStep = 0
    const rightEdge = bombs[bombs.length-1] % width === width - 1    
    const leftEdge = bombs[0] % width === 0

    if (directionRight && rightEdge) {
        directionRight = false
        yStep = width
        xStep = -1
    } else if (!directionRight && leftEdge) {
        xStep = 1
        directionRight = true
        yStep = width
    }
    
    for(let i=0; i<bombs.length; i++){
        if(yStep > 0){
            bombs[i]+= yStep
        }else{
            bombs[i]+= xStep
        }
        
    }

    //3

    drawBombs()
}



createBoard()
drawBombs()
squares[shoterIndex].classList.add('shooter')

document.addEventListener("keydown", moveShooter)
document.addEventListener("keydown", shoot)
timerId = setInterval(moveBombs, 500)
