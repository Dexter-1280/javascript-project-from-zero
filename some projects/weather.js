const searchBox = document.querySelector(".search-box");
const enterButton = document.querySelector(".enterbutton");
const cityInput = document.querySelector(".cityInput");
const cityName = document.querySelector(".cityName");
const description = document.querySelector(".description");

const apiKey = "";

enterButton.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        displayError("Please enter the city");
        return;
    }

    getWeatherData(city);
});

async function getWeatherData(city) {

}

function displayWeatherInfo(data) {

}

function getWeatherEmoji(weatherId) {

}

function displayError(message) {
    description.innerHTML = "";

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    description.appendChild(errorDisplay);
}