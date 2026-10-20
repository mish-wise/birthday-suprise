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

const birthdayDate = new Date("2026-12-30T00:00:00+03:00").getTime();

const birthdayTimer = setInterval(function () {
    const now = Date.now();
    const distance = birthdayDate - now;
    const lock = document.getElementById("birthday-lock");
    const countdown = document.getElementById("countdown");

    if (distance <= 0) {
        lock.style.display = "none";
        clearInterval(birthdayTimer);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.textContent =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
