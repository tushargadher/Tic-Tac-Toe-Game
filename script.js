//varible and const declaration section
let input = document.querySelectorAll('.input');
let wonsound = new Audio('wongameSound.wav');
let gameoversound = new Audio('gameover.wav');
let clicksound = new Audio('clicksound.wav');
let tapsound = new Audio('boxtapsound.wav');
let frontpg = document.querySelector('.frontpg');
let player1;
let player2;

//funciton section
function setlocalply1(){
    localStorage.setItem()
}
//function for player indication 
function p1styremove(){
    p1.style.border='none';
}
function p1styset(){
    p1.style.border="3px solid white";
}
function p2styremove(){
    p2.style.border='none';
}
function p2styset(){
    p2.style.border="3px solid white";
}

function clickplay() {
    clicksound.play();
}
function inputdisable() {
    input.forEach((element) => {
        element.disabled = true;
    })
}
function virbateMe() {
    tapsound.play();
    navigator.vibrate(100);
}
function ext() {
    window.close();
}
function overtask() {
    wonsound.play();
    button.style.display = 'inline-block';
    inputdisable();
}
function checkwinner() {
    console.log('Checking Winner...')
    //if all zero in first rows & second row & third Row
    if (g1.value == 'O' && g2.value == 'O' && g3.value == 'O') {
        clearInterval(interval);
        g1.style.background = 'green';
        g2.style.background = 'green';
        g3.style.background = 'green';
        winner.innerText = `${player2} Winner`;
        overtask();
    }
    else if (g4.value == 'O' && g5.value == 'O' && g6.value == 'O') {
        clearInterval(interval);
        g4.style.background = 'green';
        g5.style.background = 'green';
        g6.style.background = 'green';
        winner.innerText = `${player2} Won 🥂 `;
        overtask();
    }

    else if (g7.value == 'O' && g8.value == 'O' && g9.value == 'O') {
        clearInterval(interval);
        g7.style.background = 'green';
        g8.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = `${player2} Won 🥂 `;
        overtask();
    }
    //if the all zero in column one & column Two & column Three

    else if (g1.value == 'O' && g4.value == 'O' && g7.value == 'O') {
        clearInterval(interval);
        g1.style.background = 'green';
        g4.style.background = 'green';
        g7.style.background = 'green';
        winner.innerText = `${player2} Won 🥂 `;
        overtask();
    }
    else if (g2.value == 'O' && g5.value == 'O' && g8.value == 'O') {
        clearInterval(interval);
        g2.style.background = 'green';
        g5.style.background = 'green';
        g8.style.background = 'green';
        winner.innerText = `${player2} Won 🥂 `;
        overtask();
    }
    else if (g3.value == 'O' && g6.value == 'O' && g9.value == 'O') {
        clearInterval(interval);
        g3.style.background = 'green';
        g6.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = `${player2} Won 🥂 `;
        overtask();
    }

    //if all cross in first rows & second row & third Row
    else if (g1.value == 'X' && g2.value == 'X' && g3.value == 'X') {
        clearInterval(interval);
        g1.style.background = 'green';
        g2.style.background = 'green';
        g3.style.background = 'green';
        winner.innerText = `${player1} Won 🥂 `;
        overtask();
    }
    else if (g4.value == 'X' && g5.value == 'X' && g6.value == 'X') {
        clearInterval(interval);
        g4.style.background = 'green';
        g5.style.background = 'green';
        g6.style.background = 'green';
        winner.innerText = `${player1} Won 🥂 `;
        overtask();
    }

    else if (g7.value == 'X' && g8.value == 'X' && g9.value == 'X') {
        clearInterval(interval);
        g7.style.background = 'green';
        g8.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = `${player1} Won 🥂 `;
        overtask();
    }
    //if the all cross in column one & column Two & column Three
    else if (g1.value == 'X' && g4.value == 'X' && g7.value == 'X') {
        clearInterval(interval);
        g1.style.background = 'green';
        g4.style.background = 'green';
        g7.style.background = 'green';
        winner.innerText = `${player1} Won 🥂 `;
        overtask();
    }
    else if (g2.value == 'X' && g5.value == 'X' && g8.value == 'X') {
        clearInterval(interval);
        g2.style.background = 'green';
        g5.style.background = 'green';
        g8.style.background = 'green';
        winner.innerText = `${player1} Won 🥂 `;
        overtask();
    }
    else if (g3.value == 'X' && g6.value == 'X' && g9.value == 'X') {
        clearInterval(interval);
        g3.style.background = 'green';
        g6.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = `${player1} Won 🥂 `;
        overtask();
    }


    //if zero in cross line
    else if (g1.value == 'O' && g5.value == 'O' && g9.value == 'O') {
        clearInterval(interval);
        g1.style.background = 'green';
        g5.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = `${player2} Won 🥂 `;
        overtask();
    }
    else if (g3.value == 'O' && g5.value == 'O' && g7.value == 'O') {
        clearInterval(interval);
        g3.style.background = 'green';
        g5.style.background = 'green';
        g7.style.background = 'green';
        winner.innerText = `${player2} Won 🥂 `;
        overtask();
    }
    //if cross in cross line
    else if (g1.value == 'X' && g5.value == 'X' && g9.value == 'X') {
        clearInterval(interval);
        g1.style.background = 'green';
        g5.style.background = 'green';
        g9.style.background = 'green';
        winner.innerText = `${player1} Won 🥂 `;
        overtask();
    }
    else if (g3.value == 'X' && g5.value == 'X' && g7.value == 'X') {
        clearInterval(interval);
        g3.style.background = 'green';
        g5.style.background = 'green';
        g7.style.background = 'green';
        winner.innerText = `${player1} Won 🥂 `;
        overtask();
    }
    //if none of the player will then game over
    else if ((g1.value == 'X' || g1.value == 'O') && (g2.value == 'X' || g2.value == 'O') && (g3.value == 'X' || g3.value == 'O') && (g4.value == 'X' || g4.value == 'O') && (g5.value == 'X' || g5.value == 'O') && (g6.value == 'X' || g6.value == 'O') && (g7.value == 'X' || g7.value == 'O') && (g8.value == 'X' || g8.value == 'O') && (g9.value == 'X' || g9.value == 'O')) {
        input.forEach((element) => {
            element.style.background = 'rgb(242, 98, 98)';
            element.disabled = true;
        })
        
        winner.innerText = 'Game Over';
        gameoversound.play();
        setTimeout(() => {
            gameoversound.pause();
        }, 1100);
        button.style.display = 'inline-block';
    }
    else {

    }

}


//logic start here
//when user click on newgame buttton 
newgm.addEventListener('click', () => {
    document.querySelector(".newgame").style.zIndex = "2";
})
//when user click on startgame button
gmstarbtn.addEventListener('click', () => {
    if (ply1.value == '' && ply2.value == '') {
        alert("Plaese Enter Player Name")
    }
    else {
        player1 = ply1.value;
        player2 = ply2.value;
        frontpg.style.visibility = "hidden";
        p1.innerText = `Player 1 [X]: ${player1}`
        p2.innerText = `Player 2 [O]: ${player2}`
    }

})

//when user click on exit button
exit.addEventListener('click', () => {
    let conform = confirm('Do you really want to quit?');
    console.log(conform);
    if (conform) {
        ext();
    }
})
//if the click is odd then circle and if click is even then cross
let click = 1;
g1.addEventListener('click', () => {
    //this condition for only one time input
    if (g1.value === '') {
        if (click == 1 || click % 2 != 0) {
            virbateMe();
            g1.value = 'X';
            click += 1;
            p1styremove();
            p2styset();
        }
        else {
            virbateMe();
            g1.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
            player.innerText = `${player1} Your Turn`;
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
            p1styremove();
            p2styset();
            
        }
        else {
            virbateMe();
            g2.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
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
            p1styremove();
            p2styset();
            
        }
        else {
            virbateMe();
            g3.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
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
            p1styremove();
            p2styset();
            
        }
        else {
            virbateMe();
            g4.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
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
            p1styremove();
            p2styset();
            
        }
        else {
            virbateMe();
            g5.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
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
            p1styremove();
            p2styset();
            
        }
        else {
            virbateMe();
            g6.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
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
            p1styremove();
            p2styset();
            
        }
        else {
            virbateMe();
            g7.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
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
            p1styremove();
            p2styset();
            
        }
        else {
            virbateMe();
            g8.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
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
            p1styremove();
            p2styset();
            
        }
        else {
            virbateMe();
            g9.value = 'O';
            click += 1;
            p2styremove();
            p1styset();
        }
    }
    else {
        g9.style.cursor = 'not-allowed';
    }
})


//checking the winner
const interval = setInterval(checkwinner, 100);
