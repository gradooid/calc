// Variables
const equals = document.querySelector('#calc__btn_equals');
const add = document.querySelector('#calc__btn_add');
const substract = document.querySelector('#calc__btn_substract');
const multiply = document.querySelector('#calc__btn_multiply');
const divide = document.querySelector('#calc__btn_divide');
const numBtn = document.querySelectorAll('#calc__num-btn');
const reset = document.querySelector('#calc__btn_reset');
const backspace = document.querySelector('#calc__btn_backspace');

// Functions
function addFunction() {
    const input = document.querySelector('#calc__input');

    localStorage.removeItem('a');
    localStorage.removeItem('b');
    localStorage.removeItem('o');
    localStorage.setItem('a', input.value);
    localStorage.setItem('o', '+');
    input.value = '';
}
function substractFunction() {
    const input = document.querySelector('#calc__input');

    localStorage.removeItem('a');
    localStorage.removeItem('b');
    localStorage.removeItem('o');
    localStorage.setItem('a', input.value);
    localStorage.setItem('o', '-');
    input.value = '';
}
function multiplyFunction() {
    const input = document.querySelector('#calc__input');

    localStorage.removeItem('a');
    localStorage.removeItem('b');
    localStorage.removeItem('o');
    localStorage.setItem('a', input.value);
    localStorage.setItem('o', '*');
    input.value = '';
}
function divideFunction() {
    const input = document.querySelector('#calc__input');

    localStorage.removeItem('a');
    localStorage.removeItem('b');
    localStorage.removeItem('o');
    localStorage.setItem('a', input.value);
    localStorage.setItem('o', '/');
    input.value = '';
}

function result() {
    const input = document.querySelector('#calc__input');
    const op = localStorage.getItem('o');
    const a = localStorage.getItem('a');

    localStorage.setItem('b', input.value);
    input.value = '';

    const b = localStorage.getItem('b');

    if (op === '+') {
        input.value = (Number(a) + Number(b));
    }
    else if (op === '-') {
        input.value = (Number(a) - Number(b));
    }
    else if (op === '*') {
        input.value = (Number(a) * Number(b));
    }
    else if (op === '/') {
        input.value = (Number(a) / Number(b));
    }
}

function resetFunction() {
    const input = document.querySelector('#calc__input');
    input.value = '';

    localStorage.removeItem('o');
    localStorage.removeItem('a');
    localStorage.removeItem('b');
}

function backspaceFunction() {
    const input = document.querySelector('#calc__input').value;

    document.querySelector('#calc__input').value = input.substring(0,input.length -1);
}

// Event Listeners
equals.addEventListener('click', result);
add.addEventListener('click', addFunction);
substract.addEventListener('click', substractFunction);
multiply.addEventListener('click', multiplyFunction);
divide.addEventListener('click', divideFunction);

numBtn.forEach(function thick(i) {

    const numBtnValue = i.innerText

    i.addEventListener('click', function type() {
        const input = document.querySelector('#calc__input');

        input.value += numBtnValue;
    });
});

reset.addEventListener('click', resetFunction);

backspace.addEventListener('click', backspaceFunction);

window.addEventListener('keydown',function(e) {
    const btnPress = document.querySelector(`button[data-key="${e.keyCode}"]`);

    if(!btnPress) return;
    btnPress.click();
});
window.addEventListener('keydown',function(e) {
    const btnPress = document.querySelector(`input[data-key="${e.keyCode}"]`);

    if(!btnPress) return;
    btnPress.click();
});

window.addEventListener('keydown',function(e) {
    const btnPress = document.querySelector(`button[data-keyalt="${e.keyCode}"]`);

    if(!btnPress) return;
    btnPress.click();
});
window.addEventListener('keydown',function(e) {
    const btnPress = document.querySelector(`input[data-keyalt="${e.keyCode}"]`);

    if(!btnPress) return;
    btnPress.click();
});