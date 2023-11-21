const stringInput = document.getElementById('stringInput');
const modifyBtn = document.getElementById('modifyBtn');
const resetBtn = document.getElementById('resetBtn');
const modifiedString = document.getElementById('modifiedString');

modifyBtn.addEventListener('click', () => {
    modifiedString.innerHTML = `<strong>${modifyString(stringInput.value)}</strong>`;
})

resetBtn.addEventListener("click", () => {
    stringInput.value = '';
    modifiedString.innerHTML = `<strong>Modified String here!</strong>`;
})

const modifyString = inputStr => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const inputStrArr = inputStr.split('');
    const alphabetArr = alphabet.split('');
    const modString = inputStrArr.map(letter => {
        if (alphabetArr.indexOf(letter) < 25) {
            letter = alphabetArr[alphabetArr.indexOf(letter) + 1];
            if (letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') letter = letter.toUpperCase();
        } else {
            letter = alphabetArr[0];
            letter = letter.toUpperCase();
        }
        return letter;
    });
    return modString.join('');
}

