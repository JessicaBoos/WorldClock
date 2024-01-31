//Los Angeles
function refreshTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment()
    .tz("America/Los_Angeles")
    .format("h:mm:ss [<small>] A [</small>]");

  losAngelesDateElement.innerHTML = moment()
    .tz("America/Los_Angeles")
    .format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime;

  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment()
    .tz("Europe/London")
    .format("h:mm:ss [<small>] A [</small>]");
  londonDateElement.innerHTML = moment()
    .tz("Europe/London")
    .format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime;

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment()
    .tz("Australia/Sydney")
    .format("h:mm:ss [<small>] A [</small>]");
  sydneyDateElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime;
}

setInterval(refreshTime, 10);

function updateCity(event) {
  let cityTZ = event.target.value;

  let cityName = cityTZ.replace("_", " ").split("/")[1];
  if (cityTZ === "moment.tz.guess()") {
    cityName = "Local Time";
  }

  let cityTime = moment().tz(cityTZ);
  let sampleCitiesElement = document.querySelector("#sample-cities");

  citiesSelectElement = ` 
  <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format(" A")}</small></div>
        </div>`;
  sampleCitiesElement.innerHTML = citiesSelectElement;
}

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
