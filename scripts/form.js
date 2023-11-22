const form = document.querySelector(".contact-form");

const number = '79528917638';

function sendToWhatsapp(text, phone) {
    text = encodeURIComponent(text);
    const url = `https://web.whatsapp.com/send?phone=${phone}&text=${text}&source=&data=`;
    window.open(url);
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const text = e.currentTarget.querySelector("input").value;
    sendToWhatsapp(text, number);
})