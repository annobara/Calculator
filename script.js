const calc = document.querySelector('.calc');
const output = document.querySelector('.calc__output');
const result = document.querySelector('.calc__result');

calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc__btn')) return;

    const value = event.target.innerText;

    switch (value) {
        case 'AC':
            output.innerText = '';
            break;

        case 'C':
            output.innerText = output.innerText.slice(0, -1);
            break;

        case '=':
            try {
                output.innerText = eval(output.innerText);
            } catch (error) {
                const originalColor = output.style.color;
                output.style.color = '#d73434bf';

                setTimeout(() => {
                    output.style.color = originalColor;
                }, 500);
            }
            break;

        case 'copy':
            navigator.clipboard.writeText(output.innerText);
            break;

        default:
            output.innerText += value;
            break;
    }
});

document.addEventListener('keydown', function (event) {
    const allowedSymbols = /^[0-9+\-*/]*$/;
    const key = event.key;

    if (allowedSymbols.test(key) || key == 'Shift') {
        output.innerText += key !== 'Shift' ? key : '';
    } else {
        const originalBackgroundColor = result.style.backgroundColor;
        result.style.backgroundColor = '#d7343463';

        setTimeout(() => {
            result.style.backgroundColor = originalBackgroundColor;
        }, 500);
    }
});
