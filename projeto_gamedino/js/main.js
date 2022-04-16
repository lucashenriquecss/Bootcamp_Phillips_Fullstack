const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

let isJumping =false;
let position = 0; // posição inicial

function handlerkeyup(event) {
    if(event.keyCode === 32){
        if (!isJumping) {           
            jump();
            console.log(jump())
        }
        
    }
    if(event.keyCode === 65){
        console.log('left')
    }
    if(event.keyCode === 68){
        console.log('right')
    }
    /* if(event.keyCode === 83){
        console.log('down')
    } */
    if(event.keyCode === 76){
        console.log('atirou')
    }
   
}


function shoot() {  
}

function jump() {  
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <=0) {
                    clearInterval(downInterval);
                }else{
                    position -=20;
                    dino.style.bottom = position + 'px';
                }
            }, 20); //tempo da descida
        }else{
            position +=20;
            dino.style.bottom = position + 'px';
        }
    }, 20); // tempo da subida
}


function createObstacle() {
    const obstacle = document.createElement('div');
    let obstaclePosition = 1000;
    let randomTime = Math.random() * 6000;


    obstacle.classList.add('obstacle');
    obstacle.style.left = 1000 + 'px';
    background.appendChild(obstacle);

    let lefInterval = setInterval(() => {
        
        if (obstaclePosition <-60) {
            clearInterval(lefInterval);
            background.removeChild(obstacle);
        }else if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60){
           //Game over
           clearInterval(lefInterval);
           document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';
           
        }else{
            obstaclePosition -= 8.5; // movimentação mais rapida para esquerda 
            obstacle.style.left = obstaclePosition + 'px';
        }
    }, 20);

    setTimeout(createObstacle, randomTime);
}

createObstacle();
document.addEventListener('keyup',handlerkeyup);
