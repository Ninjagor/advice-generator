const advice = document.getElementById('advice'); 
const adviceNum = document.getElementById('adviceNum');

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => {
        return response.json();
        })
        .then((response) => {
        advice.textContent = response.slip.advice;
        adviceNum.textContent = response.slip.id;
        });
}

getAdvice()