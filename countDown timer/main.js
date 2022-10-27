const months = [
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
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const times = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2022, 11, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const day = futureDate.getDate();
const weekday = futureDate.getDay();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

giveaway.textContent = `giveaway ends on ${weekdays[weekday]}, ${day} ${months[month]} ${year} ${hours}:${minutes}am`;

function getRemainingTime() {
  let futureTime = futureDate.getTime();
  let myDate = new Date().getTime();
  let diff = futureTime - myDate;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  let days = Math.floor(diff / oneDay);
  let hours = Math.floor((diff % oneDay) / oneHour);
  let minutes = Math.floor((diff % oneHour) / oneMinute);
  let seconds = Math.floor((diff % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }
  times.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if (diff < 0) {
    deadline.innerHTML = `<h4 class="expired"> sorry,the deadline has been expired</h4>`;
  }
}

let countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
