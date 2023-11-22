const headerForm = document.querySelector(".header__form");
const closeForm = document.querySelector(".header__form-close");
const btnHeaderBanner = document.querySelector('.btn__header-banner');
const form = document.querySelector(".contact-form");

const closeModal = elementClose => elementClose.classList.remove("open");
const openModal = elementOpen => elementOpen.classList.add("open")

btnHeaderBanner.addEventListener("click", () => openModal(headerForm));
closeForm.addEventListener("click", () => closeModal(headerForm));

const number = '79528917638';

function sendToWhatsapp(text, phone) {
    text = encodeURIComponent(text);
    const url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}&source=&data=`;
    
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const text = e.currentTarget.querySelector("input").value;
    sendToWhatsapp(text, number);
})