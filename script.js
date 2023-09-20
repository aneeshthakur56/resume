function adjustLayout() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
        document.querySelector('.container').classList.add('mobile-layout');
    } else {
        document.querySelector('.container').classList.remove('mobile-layout');
    }
}
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);
document.addEventListener("DOMContentLoaded", function () {
    const owner = document.getElementById("owner");
    const contactInfo = document.getElementById("con");
    contactInfo.style.display = "none";
    owner.addEventListener("click", function () {
        if (contactInfo.style.display === "none") {
            contactInfo.style.display = "block";
        } else {
            contactInfo.style.display = "none";
        }
    });
});