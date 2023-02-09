const acc = document.getElementsByClassName("accordion-item");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const mobileBtn = document.querySelector(".mobile-button");
const navList = document.querySelector(".nav-list");

mobileBtn.addEventListener("click", () => {
    navList.classList.toggle("open");
});
