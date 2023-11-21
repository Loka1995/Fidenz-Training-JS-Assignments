const inputNum = document.getElementById('inputNum');
const resultBtn = document.getElementById('resultBtn');
const resetBtn = document.getElementById('resetBtn');
const displayResult = document.getElementById('result');

resultBtn.addEventListener("click", () => {
    const number = Number(inputNum.value);
    const result = firstFactorial(number);
    displayResult.innerHTML = `<strong>Factorial of ${number} is ${result}</strong>`;
});

resetBtn.addEventListener("click", () => {
    inputNum.value = '';
    displayResult.innerHTML = `<strong>Result is displayed here!!!</strong>`;
})

const firstFactorial = num => {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return num * firstFactorial(num - 1);
}