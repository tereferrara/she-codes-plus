import "./styles.css";

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let currentDay = days[date.getDay()];
  let currentHours = date.getHours();
  let currentMinutes = date.getMinutes();
  let formattedDate = `${currentDay} ${currentHours} :${currentMinutes}`;
  let dateNow = document.querySelector(".current-date");
  dateNow.innerHTML = formattedDate;
}

formatDate(new Date());

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = searchInput.value;
  let citySearched = document.querySelectorAll(".citySearched");
  let searchedCity = document.querySelector(".card-title");
  citySearched[0].innerHTML = city;
  citySearched[1].innerHTML = city;
  searchedCity.innerHTML = city;
  let apiKey = "09d4e7600a7b696d5e69d0366d8b8483";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let wind = Math.round(response.data.wind.speed);
    let humidity = Math.round(response.data.main.humidity);
    let searchedTemp = document.querySelector("#tempchange");
    searchedTemp.innerHTML = temperature + "°C";
    let searchedWind = document.querySelector("#wind");
    searchedWind.innerHTML = wind + "km/h";
    let searchedHumid = document.querySelector("#humidity");
    searchedHumid.innerHTML = humidity + "%";
  }

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
