'use strict'

const input = document.getElementById('input');
let word = document.getElementById('apple').textContent.split('');
let countNumb = document.getElementById('count');
console.log(countNumb)
let inp = '';
let toggle = 0;

const tab = (event) => {
    if (event.code !== 'Tab') {
        return;
    } else {
        toggle += 1;
        event.preventDefault();
        if ((toggle % 2) !== 0) {
            input.focus();
        } else {
            input.blur();
        }
    }
}

document.body.addEventListener('keydown', tab);

let count = 0;
let i = 0;
const all = (event) => {
    inp = input.value.split('');
    let apple = document.getElementById('apple');
    let style;
    if (word[i] !== inp[inp.length - 1]) {
        if ((event.code === 'Tab') || (event.code === 'Backspace')) {
            return;
        } else {
            count += 1;
            countNumb.textContent = count;
            return;
        }
    } else {
        word[i] = "<span class='letstyle'>" + word[i] + "</span>";
        style = word.join('');
        apple.innerHTML = style;
        i += 1;
        if (i === word.length) {
            input.remove();
        }
    }
}

input.addEventListener('keyup', all);




