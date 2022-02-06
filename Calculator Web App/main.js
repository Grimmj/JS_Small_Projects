/*
    Class instantiation
*/
class Node {
    constructor(value) {
        this.elem = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.headNode = new Node;
        this.tailNode = new Node;
        this.length = 0;
    }
    shift() {
        if (this.length === 0)
            return null;
        else {
            let spareNode = this.headNode;
            this.headNode = this.headNode.next;
            this.length--;
            return spareNode.elem;
        }
    }
    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.headNode = newNode;
            this.tailNode = newNode;
        }
        else {
            newNode.next = this.headNode;
            this.headNode = newNode;
        }
        this.length++;
    }
    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.headNode = newNode;
            this.tailNode = newNode;
        }
        else {
            this.tailNode.next = newNode;
            this.tailNode = newNode;
        }
        this.length++;
    }
    pop() {
        if (this.length === 0)
            return null;
        else {
            let i = 0;
            let stlNode = this.headNode;
            while (i < (this.length - 2)) {
                console.log(stlNode)
                stlNode = stlNode.next;
                i++;
            }
            this.tailNode = stlNode;
            stlNode = stlNode.next;
            this.length--;
            return stlNode.elem;
        }
    }
    clear() {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;
    }
}

/*
    Global variable instantiation
*/
let field = document.getElementById("text-field");
let buttons = document.querySelectorAll('button');
let expression = '';
let calcPEMDAS = new Stack;

/*
    Event listener definitions
*/
field.addEventListener("input", () => {
    // console.log(field.value)
})

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

/*
    CALCULATOR OPERATION LOGIC

    Calculators evaluate user entered expressions by following the P.E.M.D.A.S.
    order of operations. In order to ensure the proper expression evaluation
    a linked list will need to be used to store entered values as well as operator
    symbols.

    NOTE:
    ASCII values for characters '0' - '9' range from '48' - '57' respectively.

    Investigate popping from stack then pushing back in
    for example...
    6*8 - 3*4

    pop and perform 6*8 but return it into stack...

    6       3       48      36
    *       *       -
    8       4       12
    -   ->      ->      ->  
    3       48
    *       -
    4

    may need a buffer node to act as the expression separator
*/
function evaluateExpression() {
    calcPEMDAS.clear();
    let entry = field.value.toString();
    let val = '';
    let arr = [];
    console.log('entered values are', entry)
    for (let i = 0; i < entry.length + 1; i++) {
        if (((entry.charCodeAt(i) < 58) && (entry.charCodeAt(i) > 47))

            || (entry.charCodeAt(i) === 46)) {
            val += entry[i];
        }
        else {
            calcPEMDAS.unshift(val);
            val = '';
        }
    }
}
/*
    ASCII
    +   43
    -   45
    *   42
    /   47
*/