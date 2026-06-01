const links = document.querySelectorAll(".error-link");
const popup = document.getElementById("popup");

links.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        popup.style.display = "flex";
    });
});

function closePopup(){
    popup.style.display = "none";
}

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "0.8s";
});