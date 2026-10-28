const xInput = document.getElementById('x');
const yInput = document.getElementById('y');
const result = document.getElementById('result');
const calcBtn = document.getElementById('calcBtn');

function calculateZ() {
    const x = parseFloat(xInput.value);
    const y = parseFloat(yInput.value);

    if (x === 0 || y === 0) {
        result.innerText = "Множитель в знаменателе не может быть равен нулю";
        return;
    }

    const z = 1 / (x * y);
    result.innerText = `Z = ${z}`;
}

calcBtn.addEventListener('click', calculateZ);