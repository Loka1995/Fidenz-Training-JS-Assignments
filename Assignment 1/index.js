const number1El = document.getElementById('number1');
const number2El = document.getElementById('number2');
const checkBtn = document.getElementById('check');
const resetBtn = document.getElementById('resetBtn');
const result = document.getElementById('result');

checkBtn.addEventListener("click", () => {
    const number1 = Number(number1El.value);
    const number2 = Number(number2El.value);

    try {
        switch (checkNums(number1, number2)) {
            case 1:
                result.innerHTML = `<strong>${number2} is greater than ${number1}!</strong>`;
                break;
            case 0:
                result.innerHTML = `<strong>${number2} equals ${number2}!</strong>`;
                break;
            case -1:
                result.innerHTML = `<strong>${number1} is greater than ${number2}!</strong>`;
                break;
        }
    } catch (error) {
        console.log(error);
        result.innerHTML = `<strong>${error}!!!</strong>`;
    }
})

resetBtn.addEventListener("click", () => {
    number1El.value = '';
    number2El.value = '';
    result.innerHTML = `<strong>Result will be displayed here!!!</strong>`;
})

const checkNums = (num1, num2) => {
    if (num1 < num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else if (num1 > num2) {
        return -1;
    } else if (isNaN(num1) || isNaN(num2)) {
        throw "Make sure you enter numbers";
    } else {
        throw "something has gone wrong";
    }
}
