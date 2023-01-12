const sidebarFixed = document.querySelector(".sidebar-fixed");
const header = document.querySelector(".header-fixed ");

if (sidebarFixed  ) {
  window.addEventListener("scroll", scroll);
}
if (header ) {
    window.addEventListener('scroll', scrollHeader)
}

function scroll() {
  if (window.scrollY > 100) {
    sidebarFixed.classList.add("fixed");
    console.log("kkk");
  } else {
    sidebarFixed.classList.remove("fixed");
  }
}
function scrollHeader() {
    if (window.scrollY > 100) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
}
