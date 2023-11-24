const photos = document.querySelectorAll(".info-small");





const fn = photos => {
    photos.style.width = "1000px";
    photos.style.height = "1000px";
};

photos.forEach(photo => {
    photo.addEventListener("click", () => fn(photo));
});