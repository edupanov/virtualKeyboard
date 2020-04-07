document.addEventListener('DOMContentLoaded', () => {
    const keyboard = {
        Tilde: {enKey: '`', ruKey: 'ё', enKeyShift: '~', ruKeyShift: 'Ё'},
        Digit1: {enKey: '1', ruKey: '1', enKeyShift: '!', ruKeyShift: '!'},
        Digit2: {enKey: '2', ruKey: '2', enKeyShift: '@', ruKeyShift: '"'},
        Digit3: {enKey: '3', ruKey: '3', enKeyShift: '#', ruKeyShift: '№'},
        Digit4: {enKey: '4', ruKey: '4', enKeyShift: '$', ruKeyShift: ';'},
        Digit5: {enKey: '5', ruKey: '5', enKeyShift: '%', ruKeyShift: '%'},
        Digit6: {enKey: '6', ruKey: '6', enKeyShift: '^', ruKeyShift: ':'},
        Digit7: {enKey: '7', ruKey: '7', enKeyShift: '&', ruKeyShift: '?'},
        Digit8: {enKey: '8', ruKey: '8', enKeyShift: '*', ruKeyShift: '*'},
        Digit9: {enKey: '9', ruKey: '9', enKeyShift: '(', ruKeyShift: '('},
        Digit0: {enKey: '0', ruKey: '0', enKeyShift: ')', ruKeyShift: ')'},
        Minus: {enKey: '-', ruKey: '-', enKeyShift: '_', ruKeyShift: '_'},
        Equally: {enKey: '=', ruKey: '=', enKeyShift: '+', ruKeyShift: '+'},
        Backspace: {value: '&lArr;'},
        Tab: {value: 'Tab'},
        KeyQ: {enKey: 'q', ruKey: 'й', enKeyShift: 'Q', ruKeyShift: 'Й'},
        KeyW: {enKey: 'w', ruKey: 'ц', enKeyShift: 'W', ruKeyShift: 'Ц'},
        KeyE: {enKey: 'e', ruKey: 'у', enKeyShift: 'E', ruKeyShift: 'У'},
        KeyR: {enKey: 'r', ruKey: 'к', enKeyShift: 'R', ruKeyShift: 'К'},
        KeyT: {enKey: 't', ruKey: 'е', enKeyShift: 'T', ruKeyShift: 'Е'},
        KeyY: {enKey: 'y', ruKey: 'н', enKeyShift: 'Y', ruKeyShift: 'Н'},
        KeyU: {enKey: 'u', ruKey: 'г', enKeyShift: 'U', ruKeyShift: 'Г'},
        KeyI: {enKey: 'i', ruKey: 'ш', enKeyShift: 'I', ruKeyShift: 'Ш'},
        KeyO: {enKey: 'o', ruKey: 'щ', enKeyShift: 'O', ruKeyShift: 'Щ'},
        KeyP: {enKey: 'p', ruKey: 'з', enKeyShift: 'P', ruKeyShift: 'З'},
        BracketLeft: {enKey: '[', ruKey: 'х', enKeyShift: '{', ruKeyShift: 'Х'},
        BracketRight: {enKey: ']', ruKey: 'ъ', enKeyShift: '}', ruKeyShift: 'Ъ'},
        Backslash: {enKey: '\\', ruKey: '\\', enKeyShift: '|', ruKeyShift: '/'},
        Delete: {value: 'del'},
        CapsLock: {value: 'CapsLock'},
        KeyA: {enKey: 'a', ruKey: 'ф', enKeyShift: 'A', ruKeyShift: 'Ф'},
        KeyS: {enKey: 's', ruKey: 'ы', enKeyShift: 'S', ruKeyShift: 'Ы'},
        KeyD: {enKey: 'd', ruKey: 'в', enKeyShift: 'D', ruKeyShift: 'В'},
        KeyF: {enKey: 'f', ruKey: 'а', enKeyShift: 'F', ruKeyShift: 'А'},
        KeyG: {enKey: 'g', ruKey: 'п', enKeyShift: 'G', ruKeyShift: 'П'},
        KeyH: {enKey: 'h', ruKey: 'р', enKeyShift: 'H', ruKeyShift: 'Р'},
        KeyJ: {enKey: 'j', ruKey: 'о', enKeyShift: 'J', ruKeyShift: 'О'},
        KeyK: {enKey: 'k', ruKey: 'л', enKeyShift: 'K', ruKeyShift: 'Л'},
        KeyL: {enKey: 'l', ruKey: 'д', enKeyShift: 'L', ruKeyShift: 'Д'},
        Semicolon: {enKey: ';', ruKey: 'ж', enKeyShift: ':', ruKeyShift: 'Ж'},
        Quote: {enKey: "'", ruKey: 'э', enKeyShift: '"', ruKeyShift: 'Э'},
        Enter: {value: '&crarr;'},
        ShiftLeft: {value: 'Shift'},
        KeyZ: {enKey: 'z', ruKey: 'я', enKeyShift: 'Z', ruKeyShift: 'Я'},
        KeyX: {enKey: 'x', ruKey: 'ч', enKeyShift: 'X', ruKeyShift: 'Ч'},
        KeyC: {enKey: 'c', ruKey: 'с', enKeyShift: 'C', ruKeyShift: 'С'},
        KeyV: {enKey: 'v', ruKey: 'м', enKeyShift: 'V', ruKeyShift: 'М'},
        KeyB: {enKey: 'b', ruKey: 'и', enKeyShift: 'B', ruKeyShift: 'И'},
        KeyN: {enKey: 'n', ruKey: 'т', enKeyShift: 'N', ruKeyShift: 'Т'},
        KeyM: {enKey: 'm', ruKey: 'ь', enKeyShift: 'M', ruKeyShift: 'Ь'},
        Comma: {enKey: ',', ruKey: 'б', enKeyShift: '<', ruKeyShift: 'Б'},
        Period: {enKey: '.', ruKey: 'ю', enKeyShift: '>', ruKeyShift: 'Ю'},
        Slash: {enKey: '/', ruKey: '.', enKeyShift: '?', ruKeyShift: ','},
        ArrowUp: {value: '&uarr;'},
        ShiftRight: {value: 'Shift'},
        ControlLeft: {value: 'Ctrl'},
        AltLeft: {value: 'Alt'},
        Space: {value: 'Space'},
        AltRight: {value: 'Alt'},
        ArrowLeft: {value: '&larr;'},
        ArrowDown: {value: '&darr;'},
        ArrowRight: {value: '&rarr;'},
        ControlRight: {value: 'Ctrl'}
    };

// save language
    let lang;
    if (localStorage.getItem('language') == null || localStorage.getItem('language') === undefined) {
        lang = 'en';
    } else {
        lang = localStorage.getItem('language');
    }
    localStorage.setItem('language', lang);

// add html markup

    function initText() {
        document.body.innerHTML = '<textarea class="area"></textarea><div class="keyboard"></div><p>Смена' +
            ' языка клавиатуры производится сочентанием клавиш Shift + Alt</p><p>Сделано в ОС Windows</p>';
    }

    window.onload = initText();

// add keyboard

    function initKeyboard(lang, shift) {
        let keyBlock = '';
        for (let keyCode in keyboard) {
            if (keyCode === 'Backspace') {
                keyBlock += '<div class="key funcKey backSpace" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'CapsLock') {
                keyBlock += '<div class="key funcKey caps" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'Delete') {
                keyBlock += '<div class="key funcKey del" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'Enter') {
                keyBlock += '<div class="key funcKey enter" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'ShiftLeft') {
                keyBlock += '<div class="key funcKey shift shiftLeft" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'ShiftRight') {
                keyBlock += '<div class="key funcKey shift shiftRight" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'Space') {
                keyBlock += '<div class="key funcKey space" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'Tab') {
                keyBlock += '<div class="key funcKey tab" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'ControlLeft' || keyCode === 'MetaLeft' || keyCode === 'AltLeft' || keyCode === 'AltRight' || keyCode === 'ControlRight') {
                keyBlock += '<div class="key funcKey" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else if (keyCode === 'ArrowUp' || keyCode === 'ArrowLeft' || keyCode === 'ArrowDown' || keyCode === 'ArrowRight') {
                keyBlock += '<div class="key" id="' + keyCode + '">' + keyboard[keyCode]['value'] + '</div>';
            } else {
                if (lang === 'en' && shift === 0) {
                    keyBlock += '<div class="key" id="' + keyCode + '">' + keyboard[keyCode]['enKey'] + '</div>';
                } else if (lang === 'en' && shift === 1) {
                    keyBlock += '<div class="key" id="' + keyCode + '">' + keyboard[keyCode]['enKeyShift'] + '</div>';
                } else if (lang === 'ru' && shift === 0) {
                    keyBlock += '<div class="key" id="' + keyCode + '">' + keyboard[keyCode]['ruKey'] + '</div>';
                } else if (lang === 'ru' && shift === 1) {
                    keyBlock += '<div class="key" id="' + keyCode + '">' + keyboard[keyCode]['ruKeyShift'] + '</div>';
                }
            }
        }
        document.querySelector('.keyboard').innerHTML = keyBlock;
    }

// Special keys

    let shift = 0;

    document.addEventListener('keydown', (event) => {
        if (event.shiftKey) {
            shift = 1;
            initKeyboard(lang, shift);
        }
    });
    document.addEventListener('keyup', (event) => {
        if (event.key === 'Shift') {
            shift = 0;
            initKeyboard(lang, shift);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'CapsLock' && shift === 0) {
            shift = 1;
            initKeyboard(lang, shift);
        } else if (event.code === 'CapsLock' && shift === 1) {
            shift = 0;
            initKeyboard(lang, shift);
        }
    });

    function del() {
        let i = document.querySelector('.area').innerHTML;
        text = i.split('').slice(1).join('');
        document.querySelector('.area').innerHTML = text;
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Delete') {
            del()
        }
    });

    function backSpace() {
        let i = document.querySelector('.area').innerHTML;
        text = i.split('').slice(0, -1).join('');
        document.querySelector('.area').innerHTML = text;
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Backspace') {
            backSpace()
        }
    });

    function space() {
        text += ' ';
        document.querySelector('.area').innerHTML = text;
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            space()
        }
    });

    function enter() {
        text += '\n';
        document.querySelector('.area').innerHTML = text;
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            enter()
        }
    });

    function tab() {
        text += '   ';
        document.querySelector('.area').innerHTML = text;
    }

    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        if (event.code === 'Tab') {
            tab()
        }
    });

    window.onload = initKeyboard(lang, shift);

// add text to page

    let text = '';
    document.addEventListener('keydown', (event) => {
        if (lang === 'en' && keyboard[event.code]['enKey'] !== undefined && shift === 0) {
            text += keyboard[event.code]['enKey'];
        } else if (lang === 'ru' && keyboard[event.code]['ruKey'] !== undefined && shift === 0) {
            text += keyboard[event.code]['ruKey'];
        } else if (lang === 'en' && keyboard[event.code]['enKey'] !== undefined && shift === 1) {
            text += keyboard[event.code]['enKeyShift'];
        } else if (lang === 'ru' && keyboard[event.code]['ruKey'] !== undefined && shift === 1) {
            text += keyboard[event.code]['ruKeyShift'];
        }
        document.querySelector('.area').innerHTML = text;
        document.getElementById(event.code).classList.add("active");
    });

    document.addEventListener('keyup', (event) => {
        document.getElementById(event.code).classList.remove("active");
    });

//change language

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Alt' && event.shiftKey) {
            if (lang === 'en') {
                lang = 'ru';
                console.log(lang);
            } else {
                lang = 'en';
                console.log(lang);
            }
            initKeyboard(lang, shift);
            localStorage.setItem('language', lang);
        }
    });


//mouse click

    let keyTable = document.querySelector('.keyboard');
    keyTable.addEventListener('mousedown', () => {
        let target = event.target;
        if (target.className === 'key') {
            text += target.innerText;
            document.querySelector('.area').innerHTML = text;
        } else if (target.classList.contains('space')) {
            space()
        } else if (target.classList.contains('enter')) {
            enter()
        } else if (target.classList.contains('backSpace')) {
            backSpace()
        } else if (target.classList.contains('del')) {
            del()
        } else if (target.classList.contains('shift') || target.classList.contains('caps')) {
            if (shift === 0) {
                shift = 1;
                initKeyboard(lang, shift);
            } else {
                shift = 0;
                initKeyboard(lang, shift);
            }
        } else if (target.classList.contains('backSpace')) {
            backSpace()
        } else if (target.classList.contains('tab')) {
            tab()
        }
    });
});
