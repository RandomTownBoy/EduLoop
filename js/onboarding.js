const btnNext = document.getElementById("btn-next");
const btnSkip = document.getElementById("btn-skip");

const image = document.getElementById("onboarding-image");
const title = document.getElementById("onboarding-title");
const description = document.getElementById("onboarding-description");

const dots = [
    document.getElementById("dot-0"),
    document.getElementById("dot-1"),
    document.getElementById("dot-2")
];

const slides = [
{
title:"Dapatkan Barang Preloved Berkualitas",

description:"Beli buku, gadget, dan peralatan kos dari teman sekampus dengan harga terjangkau.",

image:"https://lh3.googleusercontent.com/aida-public/AB6AXuBux9gMkQqLncalYfaWojurXtvo73jg7u7HNDSh-6FvNlbfDXbESCr3LuwnfkXNlvkne1JWG7hGkysOmmoZ1v0um6T2-iyK-jaVw3JF8f3QMGKw4a0fyvY5qFT8uQUQFUHINTpdE_hWbLbeisrzfYeXVvQXA9Rp-M5mh5mzWJURcWzFrgF3GN84hZu0ZzbzakTlP87412EcQzCcVTfG6cTe5akb0zMqZ2eiBrDicXgaorUeM64R4JQfRvlxEk5y-2A6OKSZsKWAbA"
},

{
title:"Jual Barangmu dengan Mudah",

description:"Unggah buku, gadget, dan perlengkapan kuliahmu hanya dalam beberapa langkah.",

image:"https://storyset.com/illustration/online-shopping/amico"},

{
title:"Bangun Komunitas Kampus",

description:"Temukan teman sekampus dan lakukan transaksi dengan aman serta hemat.",

image:"https://cdn-icons-png.flaticon.com/512/4140/4140051.png"}

];

let current = 0;

function renderSlide(){

image.classList.add("opacity-0","translate-x-5");
title.classList.add("opacity-0");
description.classList.add("opacity-0");

setTimeout(()=>{

image.src=slides[current].image;
title.textContent=slides[current].title;
description.textContent=slides[current].description;

image.classList.remove("opacity-0","translate-x-5");
title.classList.remove("opacity-0");
description.classList.remove("opacity-0");

dots.forEach((dot,index)=>{

dot.classList.remove("bg-primary","scale-150");

dot.classList.add("bg-outline-variant");

if(index===current){

dot.classList.remove("bg-outline-variant");

dot.classList.add("bg-primary","scale-150");

}

});

btnNext.textContent=current===2?"Mulai":"Next";
btnNext.classList.add("scale-95");

setTimeout(() => {
    btnNext.classList.remove("scale-95");
}, 150);
},250);

}

btnNext.onclick = () => {

    if (current < slides.length - 1) {

        current++;
        renderSlide();

    } else {

        window.location.href = "pages/home.html";

    }

};

btnSkip.onclick = () => {

    window.location.href = "pages/home.html";

};

window.onload=renderSlide;

