// Set the date that is being counted down to
const countDownDate = new Date("Aug 14, 2021 19:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(() => {
  //Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and countdown date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "hr " + minutes + "min " + seconds + "sec ";

  // If the countdown is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Conference Is Live";
  }
}, 1000);
