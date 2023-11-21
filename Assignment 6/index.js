const inputRows = document.getElementById('rows');
const checkBtn = document.getElementById('checkBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDisplay = document.getElementById('result');

checkBtn.addEventListener("click", () => {
    const input = inputRows.value.split('\n');
    resultDisplay.innerHTML = `<strong>The maximum size of the square submatrix for the given input = ${MaximalSquare(input)}</strong>`;
})

resetBtn.addEventListener("click", () => {
    inputRows.value = '';
    resultDisplay.innerHTML = `<strong>Square submatrix's area displayed here!!!</strong>`;
})

function MaximalSquare(strArr) {
    if (!strArr || strArr.length === 0 || strArr[0].length === 0) {
        return 0;
    }

    const rows = strArr.length;
    const cols = strArr[0].length;
    const dp = new Array(rows).fill(0).map(() => new Array(cols).fill(0));
    console.log(dp)
    let maxSide = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (strArr[i][j] === "1") {
                dp[i][j] = Math.min(
                    (i > 0 ? dp[i - 1][j] : 0),
                    (j > 0 ? dp[i][j - 1] : 0),
                    (i > 0 && j > 0 ? dp[i - 1][j - 1] : 0)
                ) + 1;

                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }
    console.log(dp);
    return maxSide ** 2;
}