let combs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let list = ["","","","","","","","",""]
let turn = 1
let char = 'X'

document.querySelector(".contain").onclick =()=>{
    let element = event.target
    let node = element.parentNode
    turn%2 == 1 ? char = "X" : char = "0"
    if (element.innerText==""){
    element.innerText = char 
    let i = [...node.children].indexOf(element)
    list [i] = char
    combs.forEach((e)=>{
        if (list[e[0]] === char && list[e[1]] === char && list[e[2]] === char){
            document.querySelector(".isWinner").innerHTML = char+ " You winner"
            win()
            NewGame()
        }
    })
    turn++
    }else{
        Nope()
    }
}

function win(){
    let audio = new Audio()
    audio.src = "Win.mp3"
    audio.autoplay = true
}

function Nope(){
    let audio = new Audio()
    audio.src = "Nope.mp3"
    audio.autoplay = true
}

function NewGame(){
    turn = 1
    char = "X"
    list = ["","","","","","","","",""] 
    
}
    