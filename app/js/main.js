const sidebarFixed = document.querySelector(".sidebar-fixed");
const header = document.querySelector(".header-fixed ");
const avatarWrapper = document.querySelector('.avatar-wrapper')
const iconsBlockOne = document.querySelector('#icons-block-one') 
const iconsBlockTwo = document.querySelector('#icons-block-two ') 
const avatarIcon = document.querySelector(".avatar-icon")
const profile = document.querySelector("#profile ") 
const sidebar = document.querySelector(".w-2") 
const btnClose = document.querySelector(".btn-close")
const searchIcon = document.querySelector('#search-icon ')
const searchForm = document.querySelector('.search-form')

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
if (avatarWrapper) {
  avatarWrapper.addEventListener('click', () => {
    iconsBlockOne.classList.toggle('translate-show')
    iconsBlockTwo.classList.toggle('translate-show')
    avatarIcon.classList.toggle('transform-arrow')
  })
}
if (profile) {
  profile.addEventListener('click', () => {
    profile.classList.add('icon-color')
    sidebar.classList.add('sidebar-show')
  })
}

if (btnClose) {
  btnClose.addEventListener('click', () => {
    profile.classList.remove('icon-color')
    sidebar.classList.remove('sidebar-show')
  })
}

if (searchIcon) {
  searchIcon.addEventListener('click', () => {
    searchIcon.classList.toggle('icon-color')
    searchForm.classList.toggle('search-show')
  })
}