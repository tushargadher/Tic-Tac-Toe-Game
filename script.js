//varible and const declaration
let input = document.querySelectorAll('.input');
//funciton section
function inputdisable(){
    input.forEach((element)=>{
        element.disabled=true;
    })
}
function virbateMe(){
    navigator.vibrate(50);
}
function checkwinner() {
    console.log('Checking Winner...')
    //if all zero in first rows & second row & third Row
    if (g1.value == 'O' && g2.value == 'O' && g3.value == 'O') {
        clearInterval(interval);
        g1.style.background = 'green';
        g2.style.background = 'green';
        g3.style.background = 'green';
        winner.innerText = 'Player 2 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    else if (g4.value == 'O' && g5.value == 'O' && g6.value == 'O') {
        clearInterval(interval);
        g4.style.background = 'green';
        g5.style.background = 'green';
        g6.style.background = 'green';
        winner.innerText = 'Player 2 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }

    else if (g7.value == 'O' && g8.value == 'O' && g9.value == 'O') {
        clearInterval(interval);
        g7.style.background = 'green';
        g8.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = 'Player 2 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    //if the all zero in column one & column Two & column Three

    else if (g1.value == 'O' && g4.value == 'O' && g7.value == 'O') {
        clearInterval(interval);
        g1.style.background = 'green';
        g4.style.background = 'green';
        g7.style.background = 'green';
        winner.innerText = 'Player 2 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    else if (g2.value == 'O' && g5.value == 'O' && g8.value == 'O') {
        clearInterval(interval);
        g2.style.background = 'green';
        g5.style.background = 'green';
        g8.style.background = 'green';
        winner.innerText = 'Player 2 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    else if (g3.value == 'O' && g6.value == 'O' && g9.value == 'O') {
        clearInterval(interval);
        g3.style.background = 'green';
        g6.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = 'Player 2 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }

    //if all cross in first rows & second row & third Row
    else if (g1.value == 'X' && g2.value == 'X' && g3.value == 'X') {
        clearInterval(interval);
        g1.style.background = 'green';
        g2.style.background = 'green';
        g3.style.background = 'green';
        winner.innerText = 'Player 1 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    else if (g4.value == 'X' && g5.value == 'X' && g6.value == 'X') {
        clearInterval(interval);
        g4.style.background = 'green';
        g5.style.background = 'green';
        g6.style.background = 'green';
        winner.innerText = 'Player 1 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }

    else if (g7.value == 'X' && g8.value == 'X' && g9.value == 'X') {
        clearInterval(interval);
        g7.style.background = 'green';
        g8.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = 'Player 1 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    //if the all cross in column one & column Two & column Three
    else if (g1.value == 'X' && g4.value == 'X' && g7.value == 'X') {
        clearInterval(interval);
        g1.style.background = 'green';
        g4.style.background = 'green';
        g7.style.background = 'green';
        winner.innerText = 'Player 1 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    else if (g2.value == 'X' && g5.value == 'X' && g8.value == 'X') {
        clearInterval(interval);
        g2.style.background = 'green';
        g5.style.background = 'green';
        g8.style.background = 'green';
        winner.innerText = 'Player 1 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    else if (g3.value == 'X' && g6.value == 'X' && g9.value == 'X') {
        clearInterval(interval);
        g3.style.background = 'green';
        g6.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = 'Player 1 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }


    //if zero in cross line
    else if (g1.value == 'O' && g5.value == 'O' && g9.value == 'O') {
        clearInterval(interval);
        g1.style.background = 'green';
        g5.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = 'Player 2 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    else if (g3.value == 'O' && g5.value == 'O' && g7.value == 'O') {
        clearInterval(interval);
        g3.style.background = 'green';
        g5.style.background = 'green';
        g7.style.background = 'green';
        winner.innerText = 'Player 2 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    //if cross in cross line
    else if (g1.value == 'X' && g5.value == 'X' && g9.value == 'X') {
        clearInterval(interval);
        g1.style.background = 'green';
        g5.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = 'Player 1 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    else if (g3.value == 'X' && g5.value == 'X' && g7.value == 'X') {
        clearInterval(interval);
        g3.style.background = 'green';
        g5.style.background = 'green';
        g7.style.background = 'green';
        winner.innerText = 'Player 1 Winner';
        button.style.display = 'inline-block';
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        inputdisable();
    }
    //if none of the player will then game over
    else if ((g1.value == 'X' || g1.value == 'O') && (g2.value == 'X' || g2.value == 'O') && (g3.value == 'X' || g3.value == 'O') && (g4.value == 'X' || g4.value == 'O') && (g5.value == 'X' || g5.value == 'O') && (g6.value == 'X' || g6.value == 'O') && (g7.value == 'X' || g7.value == 'O') && (g8.value == 'X' || g8.value == 'O') && (g9.value == 'X' || g9.value == 'O')) {
        input.forEach((element) => {
            element.style.background = 'rgb(242, 98, 98)';
            element.disabled = true;
        })
        player.innerHTML = `<span>Click On Any Box To Play</span>`;
        winner.innerText = 'Game Over';
        button.style.display = 'inline-block';
    }
    else {

    }

}

//if the click is odd then circle and if click is even then cross
let click = 1;
g1.addEventListener('click', () => {
    //this condition for only one time input
    if (g1.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g1.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g1.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g1.style.cursor = 'not-allowed';
    }
})
g2.addEventListener('click', () => {
    if (g2.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g2.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g2.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g2.style.cursor = 'not-allowed';
    }
})
g3.addEventListener('click', () => {
    if (g3.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g3.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g3.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g3.style.cursor = 'not-allowed';
    }
})
g4.addEventListener('click', () => {
    if (g4.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g4.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g4.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g4.style.cursor = 'not-allowed';
    }
})
g5.addEventListener('click', () => {
    if (g5.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g5.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g5.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g5.style.cursor = 'not-allowed';
    }
})
g6.addEventListener('click', () => {
    if (g6.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g6.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g6.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g6.style.cursor = 'not-allowed';
    }
})

g7.addEventListener('click', () => {
    if (g7.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g7.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g7.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g7.style.cursor = 'not-allowed';
    }
})
g8.addEventListener('click', () => {
    if (g8.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g8.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g8.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g8.style.cursor = 'not-allowed';
    }
})

g9.addEventListener('click', () => {
    if (g9.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g9.value = 'X';
            click += 1;
            player.innerText = `Player 2 Your Turn`;
        }
        else {
            virbateMe();
            g9.value = 'O';
            click += 1;
            player.innerText = `Player 1 Your Turn`;
        }
    }
    else {
        g9.style.cursor = 'not-allowed';
    }
})


//checking every time who is winner
const interval = setInterval(checkwinner, 100);
