// link
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});
// Link end

const navbarToggler = document.querySelector(".navbar-toggler");
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="24px" height="24px"><path fill="#F44336" d="M21.5 4.5H26.501V43.5H21.5z" transform="rotate(45.001 24 24)"/><path fill="#F44336" d="M21.5 4.5H26.5V43.501H21.5z" transform="rotate(135.008 24 24)"/></svg>`;

navbarToggler.addEventListener("click", function () {
  if (this.innerHTML.includes("bi-list")) {
    this.innerHTML = closeIcon; // Show close icon
  } else {
    this.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 2h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/>
                </svg>
            `; // Show hamburger icon
  }
});
