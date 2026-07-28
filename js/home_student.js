// Micro-interaction for search bar glow
const searchInput = document.querySelector('input');
const searchBar = searchInput.parentElement;

searchInput.addEventListener('focus', () => {
    searchBar.style.transform = 'scale(1.02)';
});

searchInput.addEventListener('blur', () => {
    searchBar.style.transform = 'scale(1)';
});


// Search bar menuju search result
searchInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {

        const keyword = searchInput.value.trim();

        if (keyword !== "") {

            window.location.href =
                "marketplace/search_result.html?search=" +
                encodeURIComponent(keyword);

        }

    }

});


// Add subtle parallax effect to banners
window.addEventListener('scroll', () => {
    const banners = document.querySelectorAll('section > .gradient-primary');

    banners.forEach(banner => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.05;
        const icon = banner.querySelector('.material-symbols-outlined');

        if (icon) {
            icon.style.transform = `rotate(${12 + rate}deg)`;
        }
    });
});


// Bottom Navigation

document.getElementById("nav-search").onclick = () => {
    window.location.href = "marketplace/search.html";
};


document.getElementById("nav-chat").onclick = () => {
    window.location.href = "chat/chat.html";
};


document.getElementById("nav-profile").addEventListener("click", function (e) {

    e.preventDefault();

    if (localStorage.getItem("userVerified") === "true") {
        window.location.href = "profile/profile.html";
    } else {
        window.location.href = "verify/verify.html";
    }

});


document.getElementById("nav-sell").onclick = () => {
    window.location.href = "shop/add_product.html";
};

document.getElementById("category-book").onclick = () => {
    location.href = "marketplace/search_result.html?category=buku";
};

document.getElementById("category-elektronik").onclick = () => {
    location.href = "marketplace/search_result.html?category=elektronik";
};

document.getElementById("category-fashion").onclick = () => {
    location.href = "marketplace/search_result.html?category=fashion";
};

document.getElementById("category-kos").onclick = () => {
    location.href = "marketplace/search_result.html?category=kos";
};

document.getElementById("btn-cart").onclick = () => {
    location.href = "transaction/cart.html";
};

document.getElementById("all-category").onclick = (e)=>{

    e.preventDefault();

    location.href="marketplace/category_product.html";

};