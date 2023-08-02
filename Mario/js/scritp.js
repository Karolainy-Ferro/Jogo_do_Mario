const Mario = document.querySelector('.Mario');
const pipe = document.querySelector('.pipe');
const gameover = document.querySelector('.gameover')

// pulo do Mario
const jump = () => {
    Mario.classList.add('jump');

    setTimeout(() => {
        Mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')
    
    const pipePosition = pipe.offsetLeft;
    const MarioPosition = +window.getComputedStyle(Mario).bottom.replace('px', '');
    

    if (pipePosition <= 120 && pipePosition > 0 && MarioPosition < 80) {

        pipe.style.animation = 'none'
        pipe.style.left = '${pipePosition}px';

        Mario.style.animation = 'none'
        Mario.style.bottom = '${MarioPosition}px';
        
        Mario.src = './img/game-over.png';
        Mario.style.width = '75px';
        Mario.style.marginLeft = '50px';

        let i = 0;
        const upDownInterval = setInterval(() => {
            if (i % 2 === 0) {
                Mario.style.bottom = '200px';
            } else {
                Mario.style.bottom = '-300px';
            }
            i++;
            if (i > 5) {
                clearInterval(upDownInterval);
            }
        }, 100);

       if (jogadorPerdeu) {
       const gameover = document.createElement('img');
       gameover.src = './img/gameover.png';
       document.body.appendChild(gameover);
  }
  
        clearInterval(loopGame)
    }

}, 10)

document.addEventListener('keydown', jump);