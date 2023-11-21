const leftWeightInput = document.getElementById('leftWeight');
const rightWeightInput = document.getElementById('rightWeight');
const weightListInput = document.getElementById('weightList');
const resultBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDisplay = document.getElementById('result');

resultBtn.addEventListener('click', () => {
    const strArr = [`[${leftWeightInput.value}, ${rightWeightInput.value}]`, `[${weightListInput.value}]`];
    const result = balanceScale(strArr);
    resultDisplay.innerHTML = `<strong>${result}</strong>`;
});

resetBtn.addEventListener("click", () => {
    leftWeightInput.value = '';
    rightWeightInput.value = '';
    weightListInput.value = '';
    resultDisplay.innerHTML = `<strong>Weight options displayed here!</strong>`;
})

const getCombinations = array => {
    array.sort((a, b) => a - b);
    const combos = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i != j) combos.push([array[i], array[j]])
        }
    }
    return combos;
}

const balanceScale = (strArr) => {
    const leftWeight = JSON.parse(strArr[0])[0];
    const rightWeight = JSON.parse(strArr[0])[1];
    const weightList = JSON.parse(strArr[1]);

    if (leftWeight === rightWeight) return "Equals";

    const weightDiff = rightWeight - leftWeight;
    for (let i = 0; i < weightList.length; i++) {
        if (weightList[i] === Math.abs(weightDiff) && weightDiff > 0) return `left: ${weightList[i]} | right: 0`;
        if (weightList[i] === Math.abs(weightDiff) && weightDiff < 0) return `left: 0 | right: ${weightList[i]}`;
    }

    const weightCombos = getCombinations(weightList);
    console.log(weightCombos)
    for (let j = 0; j < weightCombos.length; j++) {
        const leftWeightTemp = leftWeight + weightCombos[j][0];
        const rightWeightTemp = rightWeight + weightCombos[j][1];
        if (leftWeightTemp === rightWeightTemp) return `left: ${weightCombos[j][0]} | right: ${weightCombos[j][1]}`;
        if (weightDiff > 0 && leftWeight + weightCombos[j][0] + weightCombos[j][1] === rightWeight) return `left: ${weightCombos[j]} | right: 0`;
        if (weightDiff < 0 && rightWeight + weightCombos[j][0] + weightCombos[j][1] === leftWeight) return `left: 0 | right: ${weightCombos[j]}`;
    }
    return 'Not Possible.';
}

