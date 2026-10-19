function openGift() {

    const birthday = document.getElementById("birthday");

    birthday.classList.remove("hidden");

    birthday.scrollIntoView({
        behavior: "smooth"
    });
}


function showMessage() {

    const message = document.getElementById("finalMessage");

    message.classList.add("show");

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* Floating blue hearts */

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    const symbols = ["💙", "✨", "✦", "•"];

    particle.innerText =
        symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    particle.style.fontSize =
        (10 + Math.random() * 15) + "px";

    document.getElementById("particles").appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 9000);
}


setInterval(createParticle, 500);