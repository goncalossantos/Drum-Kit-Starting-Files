document.querySelectorAll("button").forEach(element => element.addEventListener("click", handleClick))
document.addEventListener('keydown', (event) => handleKeyboardPress(event));


function playSound(loc) {
    let audio = new Audio(loc)
    audio.play() 
}

function handleKeyboardPress(event) {
    console.log(event)
    handlePlaySound(event.key)
    buttonAnimation(event.key)
}

function handleClick() {
    handlePlaySound(this.innerHTML)
    buttonAnimation(this.innerHTML)
}

function handlePlaySound(val) {
    switch (val) {
        case "w":
            playSound("sounds/tom-1.mp3")
            break;
        case "a":
            playSound("sounds/tom-2.mp3")
            break;
        case "s":
            playSound("sounds/tom-3.mp3")
            break;
        case "d":
            playSound("sounds/tom-4.mp3")
            break;
        case "j":
            playSound("sounds/snare.mp3")
            break;
        case "k":
            playSound("sounds/crash.mp3")
            break;
        case "l":
            playSound("sounds/kick-bass.mp3")
            break;
        default:
            break;
    }
}

function buttonAnimation(val) {
    if (["w", "a", "s", "d", "j", "k", "l"].includes(val)) {
        document.querySelector("." + val).classList.add("pressed")
        setTimeout(function() {
            document.querySelector("." + val).classList.remove("pressed")}, 100

        )
    }
}
