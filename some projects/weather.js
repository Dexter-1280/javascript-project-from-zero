const searchBox=document.querySelector(".search-box");
const enterButton=document.querySelector(".enterbutton");
const cityName=document.querySelector(".cityName");
const description = document.querySelector(".description");
const apiKey="";
enterButton.addEventListener("submit",event=>{
event.preventDefault(); 
const city=cityInput.value;
if(city==""){
displayError("Please enter the city");
return;
}

});

async function getweatherData(city) {
    
}
function displayWeatherInfo(data){


}
function getweatherEmoji(weatherId){

}
const description = document.querySelector(".description");

function displayError(message) {
    description.innerHTML = "";

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    description.appendChild(errorDisplay);
}