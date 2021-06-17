// Global Variables
const mouse = document.querySelector(".cursor");
const countDownDate = new Date("Aug 14, 2021 19:00:00").getTime();

// Functions
function cursor(e) {
  mouse.style.top = e.pageY + "px";
  mouse.style.left = e.pageX + "px";
}
function contrastCursor(e) {
  const item = e.target;
  if (
    item.id === "hero-btn" ||
    item.classList.contains("card-icon") ||
    item.id === "register"
  ) {
    mouse.classList.add("cursor-contrast");
  } else {
    mouse.classList.remove("cursor-contrast");
  }
}

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

// Event Listeners
window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", contrastCursor);
