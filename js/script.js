
function load() {

  hideMenu();

  const hamburger = document.querySelector("#hamburger");

  hamburger.addEventListener("click", () => {
    switchMenu();
  });
}

hideMenu = () => {
  const menu = document.querySelector("#menu");
  menu.style.opacity = 0;
  menu.style.maxHeight = "0";
  menu.style.visibility = "hidden";
};

switchMenu = () => {
  const menu = document.querySelector("#menu");
  if (menu.style.opacity === "0") {
    // If the menu is hidden, show it
    menu.style.opacity = 1;
    menu.style.maxHeight = "500px";
    menu.style.visibility = "visible";
  } else {
    // If the menu is visible, hide it
    menu.style.opacity = 0;
    menu.style.maxHeight = "0";
    menu.style.visibility = "hidden";
  }
};


document.addEventListener("DOMContentLoaded", load);


