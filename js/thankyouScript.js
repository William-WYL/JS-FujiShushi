

// const timer = setInterval(() => {
//   countdown--;
//   homeSec.textContent = countdown;

//   if (countdown === 0) {
//     clearInterval(timer);
//     window.location.href = "index.html";
//   }
// }, 1000);

function load() {
  let homeSec = document.getElementById("homeSec");
  console.log(homeSec);

  let countdown = 5;

  const timer = setInterval(() => {
    countdown--;
    homeSec.textContent = countdown;

    if (countdown === 0) {
      clearInterval(timer);
      window.location.href = "index.html";
    }
  }, 1000);


}





document.addEventListener("DOMContentLoaded", load);


