const toggle = document.querySelector('.darkmode--toggle');
const glass = document.querySelector('.home__glass');
const sidebar = document.querySelector('.home__sidebar');
const items = document.querySelectorAll('.home__sidebar--item');
toggle.addEventListener("click", function () {
  this.classList.toggle("fa-sun");
  glass.classList.toggle("dark");
  sidebar.classList.toggle("dark");
  items.forEach(e=>{
      e.classList.toggle("dark")
  });
});