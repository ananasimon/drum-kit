let buttons = []

for(let i=0; i<9; i++) {
    buttons.push(document.getElementsByClassName('keys')[0].children[i])
}

function playSound(x) {
    let sound =document.querySelector(`audio[data-key="${x}"]`)
    sound.play()
}

window.addEventListener('keydown', e => playSound(e.key))

for (i of buttons){
    i.addEventListener('click', function() {
        playSound(this.getAttribute('data-key'))
    })
}

