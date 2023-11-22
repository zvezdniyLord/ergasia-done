const headerForm = document.querySelector(".header__form");
const closeForm = document.querySelector(".header__form-close");
const btnHeaderBanner = document.querySelector('.btn__header-banner');

const closeModal = elementClose => elementClose.classList.remove("open");
const openModal = elementOpen => elementOpen.classList.add("open")

btnHeaderBanner.addEventListener("click", () => openModal(headerForm));
closeForm.addEventListener("click", () => closeModal(headerForm));
