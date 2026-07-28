const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");
const logo = document.querySelector(".logo-float");

let width = 0;

const interval = setInterval(() => {
    if (width >= 100) {
        clearInterval(interval);

        progressPercent.textContent = "Selesai!";

        setTimeout(() => {
            window.location.href = "pages/onboarding.html";
        }, 800);

        return;
    }

    width += Math.floor(Math.random() * 15) + 5;
    if (width > 100) width = 100;

    progressBar.style.width = `${width}%`;
    progressPercent.textContent = `${width}%`;
}, 400);

document.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 45;

    logo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

localStorage.setItem("userVerified", "false");