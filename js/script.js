// Toggle Kelas Active

const navbarNav = document.querySelector(".navbar-nav");
// ketika ham-menu di click
document.querySelector("#ham-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Meng- Klik Di luar SideBar Akan menutup/menghilangkan SideBar/Nav
const hamMenu = document.querySelector("#ham-menu");

document.addEventListener("click", function (e) {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
