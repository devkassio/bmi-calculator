const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const resultEl = document.getElementById("result");
const weightConditionEl = document.getElementById("weight-condition");
const btnEl = document.getElementById("btn");

function calculateBMI() {
    const height = heightEl.value / 100;
    const weight = weightEl.value;

    const bmi = (weight / (height * height)).toFixed(1);

    resultEl.value = bmi;

    if (bmi < 18.5) {
        weightConditionEl.innerText = "Under Weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightConditionEl.innerText = "Normal Weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        weightConditionEl.innerText = "Over Weight";
    } else {
        weightConditionEl.innerText = "Obesity";
    }
}

btnEl.addEventListener("click", calculateBMI);
