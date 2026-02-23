function toggleNavMenu() {
  document.getElementById('navMenu').classList.toggle('open');
}

document.addEventListener('click', function(e) {
  var menu = document.getElementById('navMenu');
  var btn = document.querySelector('.hamburger-btn');
  if (menu && btn && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
  }
});
