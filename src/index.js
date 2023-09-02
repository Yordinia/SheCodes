// Geo Location

let id = "country_city";
let idcould = "cloud";
let [humidity, wind] = document.querySelector(".humidity").children;
//humidity.innerHTML = 'something else'
console.log(humidity, wind);

// #1 Date
const date = document.querySelector(".date");
const now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let day = now.getDay();
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let str = days[day] + " " + hour + ":" + minute;
date.innerHTML = str;

// #2 Event Feature
const form = document.querySelector("form");
form.addEventListener("submit", submit);
function submit(e) {
  e.preventDefault();
  const country_city = document.getElementById("country_city");
  const input = this.firstElementChild.value.trim();
  form.reset();
  if (input) country_city.innerHTML = input.toUpperCase();
}

// feature #3
const celsius = document.getElementById("celsius-link");
const fahrenheit = document.getElementById("fahrenheit-link");

function convert_temperature(unit) {
  const temperature = document.getElementById("temperature");
  let value = temperature.innerText;
  let current_unit = temperature.getAttribute("unit");

  if (unit === current_unit) return;
  if (unit === "celsius") {
    value = Math.round((value - 32) * (5 / 9));
    temperature.setAttribute("unit", "celsius");
  } else if (unit === "fahrenheit") {
    value = Math.round(value * (9 / 5)) + 32;
    temperature.setAttribute("unit", "fahrenheit");
  }
  temperature.innerHTML = value;
}

document.addEventListener("click", (e) => {
  if (e.target === celsius) convert_temperature("celsius");
  else if (e.target === fahrenheit) convert_temperature("fahrenheit");
});

let search = document.querySelector(".help i");
let help = document.querySelector(".help div");
function show() {
  help.style.visibility = "visible";
  setTimeout(() => {
    help.style.visibility = "hidden";
  }, 1000);
}

search.addEventListener("mouseenter", show);
search.addEventListener("click", () => {
  let x = document.querySelector("input[type=text]");
  x.focus();
  x.setAttribute("placeholder", "");
});
