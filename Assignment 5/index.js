const diceNSides = document.getElementById('dicesNSides');
const countBtn = document.getElementById('countBtn');
const resetBtn = document.getElementById('resetBtn');
const output = document.getElementById('output')

countBtn.addEventListener('click', () => {
    const array = diceNSides.value.split('\n');
    output.innerHTML = '';
    array.forEach(element => {
        output.innerHTML += `<strong>${element} => ${sumOfDiceRolls(element)}</strong><br>`;
    });
});

resetBtn.addEventListener("click", () => {
    diceNSides.value = '';
    output.innerHTML = `<strong>Output goes here!!!</strong>`;
})

const sumOfDiceRolls = (str) => {
    const numberOfDices = Number(str.split('d')[0]);
    const numberOfSidesOfDice = Number(str.split('d')[1]);

    if ((numberOfDices < 1 || numberOfDices > 100) && (numberOfSidesOfDice < 2 || numberOfSidesOfDice) > 100) return "N must be [1, 100] and M must be [2, 100]"
    if (numberOfDices < 1 || numberOfDices > 100) return "N must be [1, 100]";
    if (numberOfSidesOfDice < 2 || numberOfSidesOfDice > 100) return "M must be [2, 100]";

    const diceValues = [];
    for (let i = 0; i < numberOfDices; i++) {
        let randomDiceVal = Math.floor(Math.random() * numberOfSidesOfDice) + 1;
        diceValues.push(randomDiceVal);
    }
    const sumOfDiceRolls = diceValues.reduce((total, num) => total + num);
    return `${sumOfDiceRolls}: ${diceValues.join()}`;
}
