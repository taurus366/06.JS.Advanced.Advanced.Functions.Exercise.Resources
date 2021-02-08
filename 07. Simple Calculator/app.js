function calculator() {
    let firstElement
    let secondElement
    let resultElement

    function init(num1, num2, result) {
        firstElement = document.querySelector(num1);
        secondElement = document.querySelector(num2);
        resultElement = document.querySelector(result);
    }
        function add() {
           resultElement.value = parseInt(firstElement.value) + parseInt(secondElement.value);
        }

        function subtract() {
          resultElement.value = parseInt(firstElement.value) - parseInt(secondElement.value);
        }

    return {add, subtract, init}


    // return {
    //     init: (selector1 , selector2 , resultSelector) => {
    //          firstElement = document.querySelector(selector1);
    //          secondElement = document.querySelector(selector2);
    //          resultElement = document.querySelector(resultSelector);
    //     },
    //     add: () => {
    //     //    console.log(firstElement.value)
    //         resultElement.value = Number(firstElement.value) + Number(secondElement.value);
    //     },
    //     subtract: () => {
    //         resultElement.value = Number(firstElement.value) - Number(secondElement.value);
    //     }
    // }
}
// const [num1, num2, result] = document.querySelectorAll('input');
// let calculate = calculator();
// calculate.init(num1,num2,result);
let calculate = calculator();
calculate.init("#num1",'#num2','#result')
//let add = obj.add();



