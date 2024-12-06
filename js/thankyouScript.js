/* 
  Project 4
  Name: Wei Wang
  Date: December 4, 2024
  Description: SCRIPT FOR THANKYOU PAGE
*/

function load() {
  let homeSec = document.querySelector("#homeSec");

  let countdown = 5;

  const timer = setInterval(() => {
    countdown--;
    if (countdown === 0) {
      document.querySelector("#reminder").style.display = "none";
    }
    homeSec.textContent = countdown;

    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "index.html";
    }
  }, 1000);


}





document.addEventListener("DOMContentLoaded", load);


