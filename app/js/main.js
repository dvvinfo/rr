const sidebarFixed = document.querySelector(".sidebar-fixed");
const header = document.querySelector(".header-fixed ");
const avatarWrapper = document.querySelector(".avatar-wrapper");
const profile = document.querySelector("#profile ");
const sidebar = document.querySelector(".hidden");
const btnClose = document.querySelector(".btn-close");
const searchIcon = document.querySelector("#search-icon ");
const searchForm = document.querySelector(".search-form");
const burger = document.querySelector(".burger");
const rightBlock = document.querySelector(".right-block");
const categoryHidden = document.querySelector(".category-hidden");
const categoryBtnClose = document.querySelector(".category-btn-close");
const categoryOpen = document.querySelector("#category-open");
const navMobile = document.querySelector(".nav-mobile");
const navBtnClose = document.querySelector(".nav-mobile__btn-close");
const btnCloseRightBlock = document.querySelector(".btn-close-right-block");
const hiddenBlock = document.querySelector(".hidden-block");
const postsBtnClose = document.querySelector(".posts-btn-close");
const profileHidden = document.querySelector(".profile-hidden");
const burgerPersonBtn = document.querySelector(".burger-person ");
const btnCloseProfile = document.querySelector(".btn-close-profile");

if (sidebarFixed) {
  window.addEventListener("scroll", scroll);
}
if (header) {
  window.addEventListener("scroll", scrollHeader);
}

function scroll() {
  if (window.scrollY > 100) {
    sidebarFixed.classList.add("fixed");
  } else {
    sidebarFixed.classList.remove("fixed");
  }
}
function scrollHeader() {
  if (window.scrollY > 100) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
if (avatarWrapper) {
  avatarWrapper.addEventListener("click", () => {
    navMobile.classList.toggle("nav-mobile-show");
    if (sidebar) {
      sidebar.classList.toggle("sidebar-show");
    }
  });
}

if (burgerPersonBtn) {
  burgerPersonBtn.addEventListener("click", () => {
    profileHidden.classList.add("profile-show");
  });
}
if (btnCloseProfile) {
  btnCloseProfile.addEventListener("click", () => {
    profileHidden.classList.remove("profile-show");
  });
}

if (postsBtnClose) {
  postsBtnClose.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show");
  });
}
if (navBtnClose) {
  navBtnClose.addEventListener("click", () => {
    navMobile.classList.remove("nav-mobile-show");
  });
}

if (searchIcon) {
  searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle("icon-color");
    searchForm.classList.toggle("search-show");
  });
}

if (burger) {
  burger.addEventListener("click", () => {
    if (rightBlock) {
      rightBlock.classList.add("right-block-show");
    }

    if (hiddenBlock) {
      hiddenBlock.classList.add("right-block-show");
    }
  });
}
if (btnCloseRightBlock) {
  btnCloseRightBlock.addEventListener("click", () => {
    if (rightBlock) {
      rightBlock.classList.remove("right-block-show");
    }

    if (hiddenBlock) {
      hiddenBlock.classList.remove("right-block-show");
    }
  });
}

if (categoryOpen) {
  categoryOpen.addEventListener("click", () => {
    categoryHidden.classList.add("category-open");
  });
}

if (categoryBtnClose) {
  categoryBtnClose.addEventListener("click", () => {
    categoryHidden.classList.remove("category-open");
  });
}

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".nav-mobile") &&
    !e.target.closest(".avatar-wrapper")
  ) {
    if (navMobile) {
      navMobile.classList.remove("nav-mobile-show");
    }
  }
});
document.addEventListener("click", (e) => {
  if (!e.target.closest(".hidden-block") && !e.target.closest(".burger")) {
    if (hiddenBlock) {
      hiddenBlock.classList.remove("right-block-show");
    }
  }
});

document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".category-hidden") &&
    !e.target.closest(".category__block")
  ) {
    if (categoryHidden) {
      categoryHidden.classList.remove("category-open");
    }
  }
});
document.addEventListener("click", (e) => {
  if (
    !e.target.closest(".profile-hidden") &&
    !e.target.closest(".burger-person")
  ) {
    if (categoryHidden) {
      profileHidden.classList.remove("profile-show");
    }
  }
});
