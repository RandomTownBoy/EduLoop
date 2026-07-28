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


// Product Detail
const product1 = document.getElementById("product-1");

if(product1){
    product1.onclick = () => {
        window.location.href = "marketplace/detail_product.html";
    };
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
document.getElementById("nav-profile").addEventListener("click", function(e){

    e.preventDefault();

    if(localStorage.getItem("userVerified") === "true"){

        window.location.href = "profile/profile.html";

    }else{

        window.location.href = "verify/verify.html";

    }

});


// Navbar Sell
document.getElementById("nav-sell").onclick = () => {
    window.location.href = "shop/add_product.html";
};