const url = "https://api.adviceslip.com/advice";

const $adviceId = document.querySelector("#id");
const $advice = document.querySelector("#quote");
const $dice = document.querySelector("#dice");

async function fetchData() {
    try {
        $advice.textContent = "let me think..."
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.slip)
        return data.slip;
    } catch(error) {
        console.log("Error:" + error);
    }
}

async function displayAdvice(data) {
    $adviceId.textContent = `advice #${data.id}`;
    $advice.textContent = data.advice;
}

async function fetchDataAndDisplayAdvice() {
    const data = await fetchData(url)
    console.log(data);
    displayAdvice(data);
}

$dice.addEventListener('click', fetchDataAndDisplayAdvice);