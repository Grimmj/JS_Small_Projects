let field = document.getElementById("text-field");

let buttons = document.querySelectorAll('button');

for (let button of buttons) {
    if (button.textContent != 'C')
        button.addEventListener("click", () => {
            console.log(button.textContent)
            field.value += button.textContent;
        })
    else
        button.addEventListener("click", () => {
            console.log('CLEAR')
            field.value = '';
        })
}