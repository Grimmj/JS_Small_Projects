let field = document.getElementById("text-field");
let buttons = document.querySelectorAll('button');

field.addEventListener("input", () => {
    // console.log(field.value)
})

let expression = '';

/*
    CALCULATOR OPERATION LOGIC

    Calculators evaluate user entered expressions by following the P.E.M.D.A.S.
    order of operations. In order to ensure the proper expression evaluation
    a FIFO stack will need to be used to store entered values as well as operator
    symbols.
*/

function evaluateExpression() {
    let entry = field.value.toString();
    let val = '';
    let arr = [];
    // 57 48
    console.log('entered values are', entry)
    for (let i = 0; i < entry.length; i++) {
        if ((entry.charCodeAt(i) < 58) && (entry.charCodeAt(i) > 47)) {
            val += entry[i];
        }
        else {

            val = '';
        }
    }
}

for (let button of buttons) {
    if ((button.textContent !== 'C') && (button.textContent != '='))
        button.addEventListener("click", () => {
            field.value += button.textContent;
        })
    else if (button.textContent === '=') {
        button.addEventListener("click", () => {
            evaluateExpression();
        })
    }
    else
        button.addEventListener("click", () => {
            field.value = '';
        })
}