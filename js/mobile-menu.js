(() => {
  const refs = {
    openMobileMenuBtn: document.querySelector("[data-mobile-open-menu]"),
    closeMobileMenuBtn: document.querySelector("[data-mobile-close-menu]"),
    mobileMenu: document.querySelector("[data-mobile-menu]"),
    body: document.querySelector("body"),
  };

  refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle("is-hidden");
  }
})();
