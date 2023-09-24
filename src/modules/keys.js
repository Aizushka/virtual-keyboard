const keysValues = [
  {
    keyClass: 'key symbol tilda',
    value: '`',
    ru: {
      plain: 'ё', caps: 'Ё', shift: 'Ё', capsShift: 'ё',
    },
    en: {
      plain: '`', caps: '`', shift: '~', capsShift: '~',
    },
  },
  {
    keyClass: 'key symbol',
    value: 1,
    ru: {
      plain: '1', caps: '1', shift: '!', capsShift: '!',
    },
    en: {
      plain: '1', caps: '1', shift: '!', capsShift: '!',
    },
  },
  {
    keyClass: 'key symbol',
    value: 2,
    ru: {
      plain: '2', caps: '2', shift: '"', capsShift: '"',
    },
    en: {
      plain: '2', caps: '2', shift: '@', capsShift: '@',
    },
  },
  {
    keyClass: 'key symbol',
    value: 3,
    ru: {
      plain: '3', caps: '3', shift: '№', capsShift: '№',
    },
    en: { plain: '3', caps: '3', shift: '#', capsShift: '#',
    },
  },
  {
    keyClass: 'key symbol',
    value: 4,
    ru: {
      plain: '4', caps: '4', shift: ';', capsShift: ';',
    },
    en: {
      plain: '4', caps: '4', shift: '$', capsShift: '$',
    },
  },
  {
    keyClass: 'key symbol',
    value: 5,
    ru: {
      plain: '5', caps: '5', shift: '%', capsShift: '%',
    },
    en: {
      plain: '5', caps: '5', shift: '%', capsShift: '%',
    },
  },
  {
    keyClass: 'key symbol',
    value: 6,
    ru: {
      plain: '6', caps: '6', shift: ':', capsShift: ':',
    },
    en: {
      plain: '6', caps: '6', shift: '^', capsShift: '^',
    },
  },
  {
    keyClass: 'key symbol',
    value: 7,
    ru: {
      plain: '7', caps: '7', shift: '?', capsShift: '?',
    },
    en: {
      plain: '7', caps: '7', shift: '&', capsShift: '&',
    },
  },
  {
    keyClass: 'key symbol',
    value: 8,
    ru: {
      plain: '8', caps: '8', shift: '*', capsShift: '*',
    },
    en: {
      plain: '8', caps: '8', shift: '*', capsShift: '*',
    },
  },
  {
    keyClass: 'key symbol',
    value: 9,
    ru: {
      plain: '9', caps: '9', shift: '(', capsShift: '(',
    },
    en: {
      plain: '9', caps: '9', shift: '(', capsShift: '(',
    },
  },
  {
    keyClass: 'key symbol',
    value: 0,
    ru: {
      plain: '0', caps: '0', shift: ')', capsShift: ')',
    },
    en: {
      plain: '0', caps: '0', shift: ')', capsShift: ')',
    },
  },
  {
    keyClass: 'key symbol',
    value: '-',
    ru: {
      plain: '-', caps: '-', shift: '_', capsShift: '_',
    },
    en: {
      plain: '-', caps: '-', shift: '_', capsShift: '_',
    },
  },
  {
    keyClass: 'key symbol',
    value: '=',
    ru: {
      plain: '=', caps: '=', shift: '+', capsShift: '+',
    },
    en: {
      plain: '=', caps: '=', shift: '+', capsShift: '+',
    },
  },
  {
    keyClass: 'key func backspace',
    value: 'Backspace',
    ru: {
      plain: 'Backspace', caps: 'Backspace', shift: 'Backspace', capsShift: 'Backspace',
    },
    en: {
      plain: 'Backspace', caps: 'Backspace', shift: 'Backspace', capsShift: 'Backspace',
    },
  },
  {
    keyClass: 'key func tab',
    value: 'Tab',
    ru: {
      plain: 'Tab', caps: 'Tab', shift: 'Tab', capsShift: 'Tab',
    },
    en: {
      plain: 'Tab', caps: 'Tab', shift: 'Tab', capsShift: 'Tab',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'q',
    ru: {
      plain: 'й', caps: 'Й', shift: 'Й', capsShift: 'й',
    },
    en: {
      plain: 'q', caps: 'Q', shift: 'Q', capsShift: 'q',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'w',
    ru: {
      plain: 'ц', caps: 'Ц', shift: 'Ц', capsShift: 'ц',
    },
    en: {
      plain: 'w', caps: 'W', shift: 'W', capsShift: 'w',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'e',
    ru: {
      plain: 'у', caps: 'У', shift: 'У', capsShift: 'у',
    },
    en: {
      plain: 'e', caps: 'E', shift: 'E', capsShift: 'e',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'r',
    ru: {
      plain: 'к', caps: 'К', shift: 'К', capsShift: 'к',
    },
    en: {
      plain: 'r', caps: 'R', shift: 'R', capsShift: 'r',
    },
  },
  {
    keyClass: 'key symbol',
    value: 't',
    ru: {
      plain: 'е', caps: 'Е', shift: 'Е', capsShift: 'е',
    },
    en: {
      plain: 't', caps: 'T', shift: 'T', capsShift: 't',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'y',
    ru: {
      plain: 'н', caps: 'Н', shift: 'Н', capsShift: 'н',
    },
    en: {
      plain: 'y', caps: 'Y', shift: 'Y', capsShift: 'y',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'u',
    ru: {
      plain: 'г', caps: 'Г', shift: 'Г', capsShift: 'г',
    },
    en: {
      plain: 'u', caps: 'U', shift: 'U', capsShift: 'u',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'i',
    ru: {
      plain: 'ш', caps: 'Ш', shift: 'Ш', capsShift: 'ш',
    },
    en: {
      plain: 'i', caps: 'I', shift: 'I', capsShift: 'i',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'o',
    ru: {
      plain: 'щ', caps: 'Щ', shift: 'Щ', capsShift: 'щ',
    },
    en: {
      plain: 'o', caps: 'O', shift: 'O', capsShift: 'o',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'p',
    ru: {
      plain: 'з', caps: 'З', shift: 'З', capsShift: 'з',
    },
    en: {
      plain: 'p', caps: 'P', shift: 'P', capsShift: 'p',
    },
  },
  {
    keyClass: 'key symbol',
    value: '[',
    ru: {
      plain: 'х', caps: 'Х', shift: 'Х', capsShift: 'х',
    },
    en: {
      plain: '[', caps: '[', shift: '{', capsShift: '{',
    },
  },
  {
    keyClass: 'key symbol',
    value: ']',
    ru: {
      plain: 'ъ', caps: 'Ъ', shift: 'Ъ', capsShift: 'ъ',
    },
    en: {
      plain: ']', caps: ']', shift: '}', capsShift: '}',
    },
  },
  {
    keyClass: 'key symbol',
    value: '\\',
    ru: {
      plain: '\\', caps: '\\', shift: '/', capsShift: '/',
    },
    en: {
      plain: '\\', caps: '\\', shift: '|', capsShift: '|',
    },
  },
  {
    keyClass: 'key func del',
    value: 'Del',
    ru: {
      plain: 'Del', caps: 'Del', shift: 'Del', capsShift: 'Del',
    },
    en: {
      plain: 'Del', caps: 'Del', shift: 'Del', capsShift: 'Del',
    },
  },
  {
    keyClass: 'key func capsLock',
    value: 'CapsLock',
    ru: {
      plain: 'Caps Lock', caps: 'Caps Lock', shift: 'Caps Lock', capsShift: 'Caps Lock',
    },
    en: {
      plain: 'Caps Lock', caps: 'Caps Lock', shift: 'Caps Lock', capsShift: 'Caps Lock',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'a',
    ru: {
      plain: 'ф', caps: 'Ф', shift: 'Ф', capsShift: 'ф',
    },
    en: {
      plain: 'a', caps: 'A', shift: 'A', capsShift: 'a',
    },
  },
  {
    keyClass: 'key symbol',
    value: 's',
    ru: {
      plain: 'ы', caps: 'Ы', shift: 'Ы', capsShift: 'ы',
    },
    en: {
      plain: 's', caps: 'S', shift: 'S', capsShift: 's',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'd',
    ru: {
      plain: 'в', caps: 'В', shift: 'В', capsShift: 'в',
    },
    en: {
      plain: 'd', caps: 'D', shift: 'D', capsShift: 'd',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'f',
    ru: {
      plain: 'а', caps: 'А', shift: 'А', capsShift: 'а',
    },
    en: {
      plain: 'f', caps: 'F', shift: 'F', capsShift: 'f',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'g',
    ru: {
      plain: 'п', caps: 'П', shift: 'П', capsShift: 'п',
    },
    en: {
      plain: 'g', caps: 'G', shift: 'G', capsShift: 'g',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'h',
    ru: {
      plain: 'р', caps: 'Р', shift: 'Р', capsShift: 'р',
    },
    en: {
      plain: 'h', caps: 'H', shift: 'H', capsShift: 'h',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'j',
    ru: {
      plain: 'о', caps: 'О', shift: 'О', capsShift: 'о',
    },
    en: {
      plain: 'j', caps: 'J', shift: 'J', capsShift: 'j',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'k',
    ru: {
      plain: 'л', caps: 'Л', shift: 'Л', capsShift: 'л',
    },
    en: {
      plain: 'k', caps: 'K', shift: 'K', capsShift: 'k',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'l',
    ru: {
      plain: 'д', caps: 'Д', shift: 'Д', capsShift: 'д',
    },
    en: {
      plain: 'l', caps: 'L', shift: 'L', capsShift: 'l',
    },
  },
  {
    keyClass: 'key symbol',
    value: ';',
    ru: {
      plain: 'ж', caps: 'Ж', shift: 'Ж', capsShift: 'ж',
    },
    en: {
      plain: ';', caps: ';', shift: ':', capsShift: ':',
    },
  },
  {
    keyClass: 'key symbol',
    value: '\'',
    ru: {
      plain: 'э', caps: 'Э', shift: 'Э', capsShift: 'э',
    },
    en: {
      plain: '\'', caps: '\'', shift: '"', capsShift: '"',
    },
  },
  {
    keyClass: 'key func enter',
    value: 'Enter',
    ru: {
      plain: 'Enter', caps: 'Enter', shift: 'Enter', capsShift: 'Enter',
    },
    en: {
      plain: 'Enter', caps: 'Enter', shift: 'Enter', capsShift: 'Enter',
    },
  },
  {
    keyClass: 'key func shift',
    value: 'Shift',
    ru: {
      plain: 'Shift', caps: 'Shift', shift: 'Shift', capsShift: 'Shift',
    },
    en: {
      plain: 'Shift', caps: 'Shift', shift: 'Shift', capsShift: 'Shift',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'z',
    ru: {
      plain: 'я', caps: 'Я', shift: 'Я', capsShift: 'я',
    },
    en: {
      plain: 'z', caps: 'Z', shift: 'Z', capsShift: 'z',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'x',
    ru: {
      plain: 'ч', caps: 'Ч', shift: 'Ч', capsShift: 'ч',
    },
    en: {
      plain: 'x', caps: 'X', shift: 'X', capsShift: 'x',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'c',
    ru: {
      plain: 'с', caps: 'С', shift: 'С', capsShift: 'с',
    },
    en: {
      plain: 'c', caps: 'C', shift: 'C', capsShift: 'c',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'v',
    ru: {
      plain: 'м', caps: 'М', shift: 'М', capsShift: 'м',
    },
    en: {
      plain: 'v', caps: 'V', shift: 'V', capsShift: 'v',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'b',
    ru: {
      plain: 'и', caps: 'И', shift: 'И', capsShift: 'и',
    },
    en: {
      plain: 'b', caps: 'B', shift: 'B', capsShift: 'b',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'n',
    ru: {
      plain: 'т', caps: 'Т', shift: 'Т', capsShift: 'т',
    },
    en: {
      plain: 'n', caps: 'N', shift: 'N', capsShift: 'n',
    },
  },
  {
    keyClass: 'key symbol',
    value: 'm',
    ru: {
      plain: 'ь', caps: 'Ь', shift: 'Ь', capsShift: 'ь',
    },
    en: {
      plain: 'm', caps: 'M', shift: 'M', capsShift: 'm',
    },
  },
  {
    keyClass: 'key symbol',
    value: ',',
    ru: {
      plain: 'б', caps: 'Б', shift: 'Б', capsShift: 'б',
    },
    en: {
      plain: ',', caps: ',', shift: '<', capsShift: '<',
    },
  },
  {
    keyClass: 'key symbol',
    value: '.',
    ru: {
      plain: 'ю', caps: 'Ю', shift: 'Ю', capsShift: 'ю',
    },
    en: {
      plain: '.', caps: '.', shift: '>', capsShift: '>',
    },
  },
  {
    keyClass: 'key symbol',
    value: '/',
    ru: {
      plain: '.', caps: '.', shift: ',', capsShift: ',',
    },
    en: {
      plain: '/', caps: '/', shift: '?', capsShift: '?',
    },
  },
  {
    keyClass: 'key func arrows arrow-up',
    value: 'Arrow',
    ru: {
      plain: 'up', caps: 'up', shift: 'up', capsShift: 'up',
    },
    en: {
      plain: 'up', caps: 'up', shift: 'up', capsShift: 'up',
    },
  },
  {
    keyClass: 'key func shift',
    value: 'Shift',
    ru: {
      plain: 'Shift', caps: 'Shift', shift: 'Shift', capsShift: 'Shift',
    },
    en: {
      plain: 'Shift', caps: 'Shift', shift: 'Shift', capsShift: 'Shift',
    },
  },
  {
    keyClass: 'key symbol no-key',
    value: 'no',
    ru: {
      plain: '', caps: '', shift: '', capsShift: '',
    },
    en: {
      plain: '', caps: '', shift: '', capsShift: '',
    },
  },
  {
    keyClass: 'key symbol lang',
    value: 'lang',
    ru: {
      plain: 'En/Ru', caps: 'En/Ru', shift: 'En/Ru', capsShift: 'En/Ru',
    },
    en: {
      plain: 'En/Ru', caps: 'En/Ru', shift: 'En/Ru', capsShift: 'En/Ru',
    },
  },
  {
    keyClass: 'key func space',
    value: 'space',
    ru: {
      plain: ' ', caps: ' ', shift: ' ', capsShift: ' ',
    },
    en: {
      plain: ' ', caps: ' ', shift: ' ', capsShift: ' ',
    },
  },
  {
    keyClass: 'key func arrows arrow-left',
    value: 'Arrow',
    ru: {
      plain: 'left', caps: 'left', shift: 'left', capsShift: 'left',
    },
    en: {
      plain: 'left', caps: 'left', shift: 'left', capsShift: 'left',
    },
  },
  {
    keyClass: 'key func arrows arrow-down',
    value: 'Arrow',
    ru: {
      plain: 'down', caps: 'down', shift: 'down', capsShift: 'down',
    },
    en: {
      plain: 'down', caps: 'down', shift: 'down', capsShift: 'down',
    },
  },
  {
    keyClass: 'key func arrows arrow-right',
    value: 'Arrow',
    ru: {
      plain: 'right', caps: 'right', shift: 'right', capsShift: 'right',
    },
    en: {
      plain: 'right', caps: 'right', shift: 'right', capsShift: 'right',
    },
  },
  {
    keyClass: 'key symbol no-key',
    value: 'no',
    ru: {
      plain: '', caps: '', shift: '', capsShift: '',
    },
    en: {
      plain: '', caps: '', shift: '', capsShift: '',
    },
  },
];

export default keysValues;
