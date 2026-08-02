const progressBar = document.getElementById("progress-bar");
const progressPercent = document.getElementById("progress-percent");
const logo = document.querySelector(".logo-float");

let width = 0;

const interval = setInterval(() => {

    width += Math.floor(Math.random() * 20) + 10; // lebih cepat

    if (width >= 100) {
        width = 100;

        progressBar.style.width = "100%";
        progressPercent.textContent = "100%";

        clearInterval(interval);

        setTimeout(() => {
            window.location.href = "pages/verify/verify.html";
        }, 300); // dulu 800
    } else {
        progressBar.style.width = `${width}%`;
        progressPercent.textContent = `${width}%`;
    }

}, 180); // dulu 400

document.addEventListener("mousemove", (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 45;

    logo.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

localStorage.setItem("userVerified", "false");