// Subtle scroll behavior for the TopAppBar
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
    } else {
        header.classList.add('shadow-sm');
        header.classList.remove('shadow-md');
    }

    lastScrollTop = scrollTop;
});


// Add active states to navigation clicks
const navItems = document.querySelectorAll('nav a');

navItems.forEach(item => {

    item.addEventListener('click', () => {

        navItems.forEach(i => {

            i.classList.remove(
                'text-primary',
                'after:content-[\'\']',
                'after:w-1',
                'after:h-1',
                'after:bg-primary',
                'after:rounded-full',
                'after:mt-1'
            );

            i.classList.add('text-on-surface-variant');

            const icon = i.querySelector('.material-symbols-outlined');

            if (icon) {
                icon.style.fontVariationSettings = "'FILL' 0";
            }

        });


        item.classList.add(
            'text-primary',
            'after:content-[\'\']',
            'after:w-1',
            'after:h-1',
            'after:bg-primary',
            'after:rounded-full',
            'after:mt-1'
        );

        item.classList.remove('text-on-surface-variant');

        const icon = item.querySelector('.material-symbols-outlined');

        if(icon){
            icon.style.fontVariationSettings = "'FILL' 1";
        }

    });

});


// Promo Button
const promoBtn = document.getElementById("btn-promo");

if(promoBtn){
    promoBtn.onclick = () => {
        alert("Promo Mahasiswa Baru");
    };
}

// ===============================
// Render Produk dari product.js
// ===============================

const productGrid = document.getElementById("product-grid");

if (productGrid && typeof PRODUCTS !== "undefined") {

    productGrid.innerHTML = PRODUCTS.map(product => `

        <div
            onclick="window.location.href='marketplace/detail_product.html?id=${product.id}'"
            class="flex flex-col bg-surface-container-lowest rounded-xl shadow-[0_12px_24px_rgba(0,102,133,0.05)] overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">

            <div class="relative h-40 overflow-hidden">

                <img
                    class="w-full h-full object-cover"
                    src="${product.image.replace("../../", "../")}"
                    alt="${product.name}">

                <div class="absolute top-2 left-2 bg-primary-container text-on-primary-container font-label-sm text-[10px] px-2 py-0.5 rounded-full flex items-center gap-xs">

                    <span
                        class="material-symbols-outlined text-[12px]"
                        style="font-variation-settings:'FILL' 1;">
                        auto_awesome
                    </span>

                    ${product.condition}

                </div>

            </div>

            <div class="p-sm flex flex-col gap-xs">

                <span
                    class="bg-primary-fixed text-primary font-label-sm text-[10px] px-2 py-0.5 rounded-full w-fit flex items-center gap-xs">

                    <span
                        class="material-symbols-outlined text-[10px]"
                        style="font-variation-settings:'FILL' 1;">
                        verified
                    </span>

                    Verified Student

                </span>

                <h4 class="font-label-md text-label-md text-on-surface line-clamp-2 mt-xs">
                    ${product.name}
                </h4>

                <p class="font-headline-md text-[18px] text-primary">
                    ${product.priceText}
                </p>

                <div class="flex items-center gap-xs text-on-surface-variant mt-xs">

                    <span class="material-symbols-outlined text-[14px]">
                        location_on
                    </span>

                    <span class="font-label-sm text-[11px]">
                        ${product.campus}
                    </span>

                </div>

            </div>

        </div>

    `).join("");

}


// Search Bar → Search Result
const searchInput = document.getElementById("search-input");

if(searchInput){

    searchInput.addEventListener("keydown", function(e){

        if(e.key === "Enter"){

            const keyword = searchInput.value.trim();

            if(keyword !== ""){

                window.location.href = 
                "search_result.html?keyword=" + encodeURIComponent(keyword);

            }

        }

    });

}


// Navbar Search
document.getElementById("nav-search").onclick = () => {
    window.location.href = "marketplace/search.html";
};


// Navbar Chat
document.getElementById("nav-chat").onclick = () => {
    window.location.href = "chat/chat.html";
};


// Navbar Profile
document.getElementById("nav-profile").onclick = () => {
    window.location.href = "profile/profile.html";
};


// Navbar Sell
document.getElementById("nav-sell").onclick = () => {
    window.location.href = "shop/add_product.html";
};