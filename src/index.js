module.exports = function toReadable(number) {
    const digitSimpleName = (n) => {
        switch (n) {
            case '0':
                return '';
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
        }
    }
    const digitTensDoubleName = (n) => {
        switch (n) {
            case '0':
                return 'ten';
            case '1':
                return 'eleven';
            case '2':
                return 'twelve';
            case '3':
                return 'thirteen';
            case '4':
                return 'fourteen';
            case '5':
                return 'fifteen';
            case '6':
                return 'sixteen';
            case '7':
                return 'seventeen';
            case '8':
                return 'eighteen';
            case '9':
                return 'nineteen';
        }
    }
    const digitDoubleName = (n) => {
        switch (n) {
            case '2':
                return 'twenty';
            case '3':
                return 'thirty';
            case '4':
                return 'forty';
            case '5':
                return 'fifty';
            case '6':
                return 'sixty';
            case '7':
                return 'seventy';
            case '8':
                return 'eighty';
            case '9':
                return 'ninety';
        }
    }

    const doubleDigitText = (n) => {
        if (n[1] === '0') return digitSimpleName(n[0]);
        if (n[1] === '1') {
            return digitTensDoubleName(n[0]);
        } else {
            return digitDoubleName(n[1]) + (n[0] === '0' ? '' : (' ' + digitSimpleName(n[0])));
        }
    }

    const reversedNumber = number.toString().split('').reverse().join('');
    let str = '';
    switch (reversedNumber.length) {
        case 1: {
            if (reversedNumber === '0')
                str = 'zero';
            else
                str = digitSimpleName(reversedNumber);
            break;
        }
        case 2: {
            str = doubleDigitText(reversedNumber);
            break;
        }
        case 3: {
            str = digitSimpleName(reversedNumber[2]) + ' hundred ' + doubleDigitText(reversedNumber.substring(0, 2));
            break;
        }
    }
    return str.trim();
}




