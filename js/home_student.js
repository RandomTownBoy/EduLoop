// =========================
// Search Bar
// =========================

const searchInput = document.querySelector("input");

if (searchInput) {

    const searchBar = searchInput.parentElement;

    searchInput.addEventListener("focus", () => {
        searchBar.style.transform = "scale(1.02)";
    });

    searchInput.addEventListener("blur", () => {
        searchBar.style.transform = "scale(1)";
    });

    searchInput.addEventListener("keydown", function (e) {

        if (e.key === "Enter") {

            const keyword = searchInput.value.trim();

            if (keyword !== "") {

                window.location.href =
                    "marketplace/search_result.html?keyword=" +
                    encodeURIComponent(keyword);

            }

        }

    });

}


// =========================
// Banner Effect
// =========================

window.addEventListener("scroll", () => {

    const banners = document.querySelectorAll("section > .gradient-primary");

    banners.forEach(banner => {

        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.05;

        const icon = banner.querySelector(".material-symbols-outlined");

        if (icon) {
            icon.style.transform = `rotate(${12 + rate}deg)`;
        }

    });

});


// =========================
// Open Product
// =========================

function openProduct(id) {

    window.location.href =
        `marketplace/detail_product.html?id=${id}`;

}


// =========================
// Bottom Navigation
// =========================

document.getElementById("nav-search").onclick = () => {

    window.location.href = "marketplace/search.html";

};

document.getElementById("nav-chat").onclick = () => {

    window.location.href = "chat/chat.html";

};

document.getElementById("nav-profile").onclick = (e) => {

    e.preventDefault();

    if (localStorage.getItem("userVerified") === "true") {

        window.location.href = "profile/profile.html";

    } else {

        window.location.href = "verify/verify.html";

    }

};

document.getElementById("nav-sell").onclick = () => {

    window.location.href = "shop/add_product.html";

};

document.getElementById("btn-cart").onclick = () => {

    window.location.href = "transaction/cart.html";

};


// =========================
// Category
// =========================

document.getElementById("category-book").onclick = () => {

    location.href =
        "marketplace/category_product.html?category=Buku";

};

document.getElementById("category-elektronik").onclick = () => {

    location.href =
        "marketplace/category_product.html?category=Elektronik";

};

document.getElementById("category-fashion").onclick = () => {

    location.href =
        "marketplace/category_product.html?category=Fashion";

};

document.getElementById("category-kos").onclick = () => {

    location.href =
        "marketplace/category_product.html?category=Kos";

};

document.getElementById("all-category").onclick = (e) => {

    e.preventDefault();

    location.href = "marketplace/category_product.html";

};

// =========================
// Recommendation Products
// =========================

const recommendationGrid = document.getElementById("recommendation-grid");

if (recommendationGrid && window.PRODUCTS) {

    recommendationGrid.innerHTML = "";

    window.PRODUCTS.slice(0, 6).forEach(product => {

        recommendationGrid.innerHTML += `
        <div
            onclick="openProduct(${product.id})"
            class="bg-white rounded-lg shadow-sm group cursor-pointer">

            <div class="relative h-44 rounded-t-lg overflow-hidden">

                <img
                    src="${product.image.replace("../../", "../")}"
                    alt="${product.name}"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform">

            </div>

            <div class="p-3">

                <div class="flex items-center gap-1 mb-1">

                    <span class="bg-pastel-blue/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
                        ${product.condition}
                    </span>

                    <span class="material-symbols-outlined text-primary text-[12px] fill-icon">
                        verified
                    </span>

                </div>

                <h4 class="font-label-md text-label-md truncate mb-1">
                    ${product.name}
                </h4>

                <p class="font-label-md text-label-md text-primary mb-1">
                    ${product.priceText}
                </p>

                <p class="font-label-sm text-label-sm text-on-surface-variant">
                    ${product.faculty}
                </p>

            </div>

        </div>
        `;

    });

}

// =========================
// Campus Products
// =========================

const campusProductList = document.getElementById("campus-product-list");

if (campusProductList && typeof PRODUCTS !== "undefined") {

    campusProductList.innerHTML = "";

    PRODUCTS.slice(0, 3).forEach(product => {

        campusProductList.innerHTML += `
            <div
                onclick="openProduct(${product.id})"
                class="min-w-[160px] bg-white rounded-lg shadow-sm group cursor-pointer">

                <div class="relative rounded-t-lg overflow-hidden h-40">

                    <img
                        src="${product.image.replace("../../", "../")}"
                        alt="${product.name}"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform">

                    <div class="absolute top-2 right-2 bg-white/80 backdrop-blur-md p-1.5 rounded-full">
                        <span class="material-symbols-outlined text-xs text-on-surface-variant">
                            favorite
                        </span>
                    </div>

                </div>

                <div class="p-3">

                    <div class="flex items-center gap-1 mb-1">

                        <span class="bg-pastel-blue/20 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">
                            ${product.condition}
                        </span>

                        <span class="material-symbols-outlined text-primary text-[12px] fill-icon">
                            verified
                        </span>

                    </div>

                    <h4 class="font-label-md text-label-md truncate mb-1">
                        ${product.name}
                    </h4>

                    <p class="font-label-md text-label-md text-primary mb-1">
                        ${product.priceText}
                    </p>

                    <p class="font-label-sm text-label-sm text-on-surface-variant">
                        ${product.faculty}
                    </p>

                </div>

            </div>
        `;
    });

}