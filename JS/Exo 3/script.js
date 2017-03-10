/*    -Créer une variable nommée« decompte» dans le localStorage, elle correspondra au
nombre de seconde du timer. -
    Créer une variable« repetition», elle sera égal à setInterval(decompter, 2000); -
Créer une fonction nommée« decompter» qui décrémentera de 2 la variable« decompte» et vérifiera si la variable est arrivée à 0. Si elle passe dans la condition,
affiche un message et arrête le compte à rebours(clearInterval(repetition)).*/
user = document.getElementById('user');
pw = document.getElementById('pw');
if (localStorage.getItem('counter') === null) {
    localStorage.setItem('counter', 1);
} else {
    localStorage.setItem('counter', Number(localStorage['counter']) + 1);
}

document.getElementById('form').onsubmit = function functionName() {
    if (localStorage.getItem(user.value) === null) {
        localStorage.setItem(user.value, pw.value);
    } else {
        alert('Give me new users goddamit!');
    }
}
timer = document.getElementById('timer');
timer.onsubmit = function setTimer() {
    localStorage.setItem('countdown', Number(timer.value));
}
repetition = setInterval(localStorage['countdown'], Number(2000));

function countingDown() {
    if (localStorage['countdown'] == 0) {
        alert('STOP!');
    } else {
        localStorage['countdown'] -= 2;
    }
};
console.log(localStorage);
