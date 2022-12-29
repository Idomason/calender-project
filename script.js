// Initial Selections
const currentMonth = document.querySelector('.date h1');
const currentFullDate = document.querySelector('.date p');
const calenderDays = document.querySelector('.days');

// Get all current values of date
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const today = date.getDate();

const day = new Date().getDay();
const firstDay = new Date(year, month, 1).getDay() - 1;
const lastDay = new Date(year, month + 1, 0).getDate();

// Create arrays of months
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Dynamically manipulate the date using javaScript code
// Current Month
currentMonth.textContent = months[month];

//Get the current full date
currentFullDate.textContent = new Date().toDateString();

// Get all the days of a month and populate it in the calender
let days = '';

// Calculate empty days
for (let i = firstDay; i > 0; i--) {
  days += `<div class='day empty'></div>`;
}

// Calculate number of days
for (let i = 1; i <= lastDay; i++) {
  if (i === today) {
    days += `<div class='day today'>${i}</div>`;
  } else {
    days += `<div class='day'>${i}</div>`;
  }
}

calenderDays.innerHTML = days;
