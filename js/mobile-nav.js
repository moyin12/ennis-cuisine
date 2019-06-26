let myBody = document.getElementById("body");
let mySidenav = document.getElementById("mySidenav");
let openBtn = document.getElementsByClassName("openbtn");
let closeBtn = document.getElementsByClassName("closebtn");


openBtn[0].addEventListener('click', openNav);
closeBtn[0].addEventListener('click', closeNav);

function openNav(event) {
  mySidenav.style.width = "250px";
  myBody.style.marginRight = "250px";
  
}
  
function closeNav(event) {
  mySidenav.style.width = "0";
  myBody.style.marginRight = "0";
  
}
