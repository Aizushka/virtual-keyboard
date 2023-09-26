// eslint-disable-next-line import/extensions
import keysValues from './modules/keys.js';

let keysObjects = [];

const root = document.querySelector('html');
const checkbox = document.querySelector('.switch__input');
const inputContainer = document.querySelector('.inputField');
const input = document.querySelector('textarea');
const board = document.querySelector('.board');
const sign = document.querySelector('.sign');
const link = document.querySelector('.sign_link');

// Color theme

function setColorTheme() {
  const allKeys = document.querySelectorAll('.key');

  if (checkbox.checked === false) {
    root.classList.remove('dark');
    inputContainer.classList.remove('dark');
    input.classList.remove('dark');
    board.classList.remove('dark');
    allKeys.forEach((key) => {
      key.classList.remove('dark');
    });
    sign.classList.remove('dark');
    link.classList.remove('dark');
  } else {
    root.classList.add('dark');
    inputContainer.classList.add('dark');
    input.classList.add('dark');
    board.classList.add('dark');
    allKeys.forEach((key) => {
      key.classList.add('dark');
    });
    sign.classList.add('dark');
    link.classList.add('dark');
  }
}

if (localStorage.getItem('isDarkTheme') === null) {
  localStorage.setItem('isDarkTheme', 'false');
  setColorTheme();
} else {
  checkbox.checked = JSON.parse(localStorage.getItem('isDarkTheme'));
  setColorTheme();
}

checkbox.addEventListener('click', () => {
  localStorage.setItem('isDarkTheme', `${checkbox.checked}`);
  setColorTheme();
});

// Keyboard

class Keyboard {
  constructor() {
    this.top = board.getBoundingClientRect().top;
    this.left = board.getBoundingClientRect().left;
    this.start = 0;
    this.end = 0;
    if (!localStorage.getItem('lang')) {
      this.lang = 'en';
      localStorage.setItem('lang', 'en');
    } else {
      this.lang = localStorage.getItem('lang');
    }

    if (localStorage.getItem('isShift') === null) {
      localStorage.setItem('isShift', 'false');
      this.isShift = false;
    } else {
      this.isShift = JSON.parse(localStorage.getItem('isShift'));
    }

    if (localStorage.getItem('isCaps') === null) {
      localStorage.setItem('isCaps', 'false');
      this.isCaps = false;
    } else {
      this.isCaps = JSON.parse(localStorage.getItem('isCaps'));
    }
  }

  calculateBoardCoordinates() {
    this.top = board.getBoundingClientRect().top;
    this.left = board.getBoundingClientRect().left;
  }

  toggleLang() {
    if (this.lang === 'ru') {
      this.lang = 'en';
    } else {
      this.lang = 'ru';
    }
    localStorage.setItem('lang', this.lang);
  }

  toggleCaps() {
    if (this.isCaps === true) {
      this.isCaps = false;
    } else {
      this.isCaps = true;
    }
    localStorage.setItem('isCaps', this.isCaps);
  }

  toggleShift() {
    if (this.isShift === true) {
      this.isShift = false;
    } else {
      this.isShift = true;
    }
    localStorage.setItem('isShift', this.isShift);
  }

  disableShift() {
    if (this.isShift) {
      this.isShift = false;
    }
  }

  updateCaretPosition(n, forward = true) {
    if (forward) {
      if (this.start + n <= input.value.length) {
        this.start += n;
        this.end += n;
      }
    } else if (!forward) {
      if (this.start - n >= 0) {
        this.start -= n;
        this.end -= n;
      }
    }
    input.selectionStart = this.start;
    input.selectionEnd = this.end;
  }
}

const keyboard = new Keyboard();

class Keys {
  constructor(keyClass, value, left = 0, right = 0, top = 0, bottom = 0) {
    this.keyClass = keyClass;
    this.value = value;

    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
  }

  drawKey() {
    const newElement = document.createElement('div');
    newElement.classList = `${this.keyClass}`;
    newElement.innerHTML = this.value;
    board.append(newElement);

    const keyRect = board.lastChild.getBoundingClientRect();

    this.top = keyRect.top - keyboard.top;
    this.left = keyRect.left - keyboard.left;
    this.bottom = keyRect.bottom - keyboard.top;
    this.right = keyRect.right - keyboard.left;

    keysObjects.push(this);
  }
} // class Keys end

function drawAllKeys() {
  board.innerHTML = '';
  keysObjects = [];
  keysValues.forEach((el) => {
    let writing = 'plain';
    if (keyboard.isCaps && !keyboard.isShift) writing = 'caps';
    else if (keyboard.isShift && !keyboard.isCaps) writing = 'shift';
    else if (keyboard.isShift && keyboard.isCaps) writing = 'capsShift';

    const newKey = new Keys(el.keyClass, el[keyboard.lang][writing]);
    newKey.drawKey();
  });
  setColorTheme();
  if (keyboard.isCaps) {
    document.querySelector('.capsLock').classList.add('enable');
  }
  if (keyboard.isShift) {
    document.querySelectorAll('.shift').forEach((shift) => shift.classList.add('enable'));
  } else if (!keyboard.isShift) {
    document.querySelectorAll('.shift').forEach((shift) => shift.classList.remove('enable'));
  }
}
drawAllKeys();

function printSymbol(item) {
  let subStr;
  let prev;
  let penult;
  let next;

  switch (item.value) {
    case 'En/Ru':
      keyboard.toggleLang();
      keyboard.disableShift();
      drawAllKeys();
      break;
    case 'Shift':
      keyboard.toggleShift();
      drawAllKeys();
      break;
    case 'Caps Lock':
      keyboard.toggleCaps();
      drawAllKeys();
      break;
    case 'Tab':
      input.value = `${input.value.slice(0, input.selectionStart)}    ${input.value.slice(input.selectionEnd)}`;
      keyboard.updateCaretPosition(4, true);
      keyboard.disableShift();
      drawAllKeys();
      break;
    case 'Del':
      input.value = `${input.value.slice(0, input.selectionEnd)}${input.value.slice(input.selectionEnd + 1)}`;
      keyboard.updateCaretPosition(0, true);
      keyboard.disableShift();
      drawAllKeys();
      break;
    case 'Backspace':
      input.value = `${input.value.slice(0, input.selectionStart - 1)}${input.value.slice(input.selectionEnd)}`;
      keyboard.updateCaretPosition(1, false);
      keyboard.disableShift();
      drawAllKeys();
      break;
    case 'Enter':
      input.value = `${input.value.slice(0, input.selectionStart)}\n${input.value.slice(input.selectionEnd)}`;
      keyboard.updateCaretPosition(1, true);
      keyboard.disableShift();
      drawAllKeys();
      break;
    case 'up':
      subStr = input.value.substring(0, input.selectionStart);
      prev = subStr.substring(subStr.lastIndexOf('\n'), input.selectionStart);
      penult = subStr.substring(subStr.lastIndexOf('\n', input.selectionStart - prev.length - 1) + 1);
      if (prev.length > penult.length - prev.length) {
        keyboard.updateCaretPosition(prev.length, false);
      } else {
        keyboard.updateCaretPosition(penult.length - prev.length + 1, false);
      }
      keyboard.disableShift();
      drawAllKeys();
      break;
    case 'down':
      subStr = input.value.substring(input.value.lastIndexOf('\n', keyboard.start), input.value.indexOf('\n', keyboard.start));
      next = input.value.indexOf('\n', keyboard.start + 1) !== -1 ? input.value.indexOf('\n', keyboard.start + 1) : input.value.length;
      if (keyboard.start < input.value.indexOf('\n')) {
        keyboard.updateCaretPosition(subStr.length + 1);
      } else if (input.value[keyboard.start] !== '\n' && keyboard.start > input.value.indexOf('\n')) {
        keyboard.updateCaretPosition(subStr.length);
      } else {
        keyboard.start = next;
        keyboard.end = next;
      }
      input.selectionStart = keyboard.start;
      input.selectionEnd = keyboard.end;
      keyboard.disableShift();
      drawAllKeys();
      break;
    case 'left':
      keyboard.updateCaretPosition(1, false);
      keyboard.disableShift();
      drawAllKeys();
      break;
    case 'right':
      keyboard.updateCaretPosition(1, true);
      keyboard.disableShift();
      drawAllKeys();
      break;
    default:
      input.value = `${input.value.slice(0, input.selectionStart)}${item.value}${input.value.slice(input.selectionEnd)}`;
      keyboard.updateCaretPosition(1, true);
      keyboard.disableShift();
      drawAllKeys();
      break;
  }
  input.focus();
}

window.addEventListener('resize', () => {
  keyboard.calculateBoardCoordinates();
  drawAllKeys();
});

board.addEventListener('click', (event) => {
  const X = event.clientX - keyboard.left; // X coordinate relative to the .board
  const Y = event.clientY - keyboard.top; // Y coordinate relative to the .board
  const thisKey = keysObjects.find((k) => k.left < X && k.right > X && k.bottom > Y && k.top < Y);
  if (thisKey) {
    printSymbol(thisKey);
  }
});

input.addEventListener('click', () => {
  keyboard.start = input.selectionStart;
  keyboard.end = input.selectionEnd;
});
