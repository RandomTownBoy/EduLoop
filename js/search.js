// =====================
// Product Render
// =====================

const productGrid = document.getElementById("product-grid");


function renderProducts(products){

    if(!productGrid) return;

    productGrid.innerHTML = "";

    products.forEach(product => {

        productGrid.innerHTML += `
        
        <div 
        data-id="${product.id}"
        class="product-card group flex flex-col gap-xs bg-white rounded-xl overflow-hidden shadow-[0_12px_24px_-10px_rgba(0,102,133,0.08)] hover:shadow-lg transition-all duration-300">

            <div class="relative aspect-square overflow-hidden rounded-xl m-xs">

                <img
                src="${product.image}"
                alt="${product.name}"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">

            </div>


            <div class="px-md pb-md flex flex-col gap-1">

                <span class="font-label-sm text-primary">
                    ${product.category}
                </span>

                <h3 class="font-label-md line-clamp-2">
                    ${product.name}
                </h3>

                <p class="font-headline-md text-primary mt-1">
                    ${product.priceText}
                </p>

            </div>

        </div>

        `;

    });


    attachProductClick();

}



function attachProductClick(){

    document.querySelectorAll(".product-card")
    .forEach(card=>{

        card.addEventListener("click",()=>{

            const id = card.dataset.id;

            window.location.href =
            `detail_product.html?id=${id}`;

        });

    });

}



// Initial Load
renderProducts(PRODUCTS);




// =====================
// Filter Chip Animation
// =====================

document.querySelectorAll('.flex-shrink-0.px-md')
.forEach(chip => {

    chip.addEventListener('click', function(){

        document.querySelectorAll('.flex-shrink-0.px-md')
        .forEach(c=>{

            c.classList.remove(
                'bg-primary',
                'text-on-primary'
            );

            c.classList.add(
                'bg-surface-container-high',
                'text-on-surface-variant'
            );

        });


        this.classList.remove(
            'bg-surface-container-high',
            'text-on-surface-variant'
        );


        this.classList.add(
            'bg-primary',
            'text-on-primary'
        );

    });

});




// =====================
// Header Scroll Effect
// =====================

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(!header) return;


    if(window.scrollY > 20){

        header.classList.add("shadow-md");

    }else{

        header.classList.remove("shadow-md");

    }

});




// =====================
// Search
// =====================

const searchInput = document.getElementById("search-input");


if(searchInput){


    searchInput.addEventListener("input",()=>{

        const keyword =
        searchInput.value.toLowerCase();


        const filtered =
        PRODUCTS.filter(product=>{


            return (

                product.name.toLowerCase()
                .includes(keyword)

                ||

                product.category.toLowerCase()
                .includes(keyword)

                ||

                product.faculty.toLowerCase()
                .includes(keyword)

            );


        });


        renderProducts(filtered);


    });



    searchInput.addEventListener("keydown",(e)=>{


        if(e.key==="Enter"){


            const keyword =
            searchInput.value.trim();


            if(keyword !== ""){


                window.location.href =
                "search_result.html?keyword="
                + encodeURIComponent(keyword);


            }


        }


    });


}




// =====================
// Faculty Filter
// =====================

const facultyButtons =
document.querySelectorAll("[id^='faculty-']");


facultyButtons.forEach(btn=>{


    btn.addEventListener("click",()=>{


        facultyButtons.forEach(item=>{

            item.classList.remove(
                "bg-primary",
                "text-on-primary"
            );


            item.classList.add(
                "bg-surface-container-high",
                "text-on-surface-variant"
            );

        });



        btn.classList.remove(
            "bg-surface-container-high",
            "text-on-surface-variant"
        );


        btn.classList.add(
            "bg-primary",
            "text-on-primary"
        );



        const faculty =
        btn.innerText;


        if(faculty==="Semua"){

            renderProducts(PRODUCTS);

        }else{


            renderProducts(
                PRODUCTS.filter(product=>
                    product.faculty
                    .toLowerCase()
                    .includes(
                        faculty.toLowerCase()
                    )
                )
            );


        }


    });


});




// =====================
// Category Filter
// =====================

const categoryButtons =
document.querySelectorAll("[id^='category-']");


categoryButtons.forEach(btn=>{


    btn.addEventListener("click",()=>{


        categoryButtons.forEach(item=>{

            item.classList.remove(
                "border-primary-container",
                "text-primary"
            );

        });



        btn.classList.add(
            "border-primary-container",
            "text-primary"
        );



        let category="";


        if(btn.id==="category-books"){

            category="Buku";

        }


        if(btn.id==="category-electronics"){

            category="Elektronik";

        }



        if(category){


            renderProducts(
                PRODUCTS.filter(product=>
                    product.category
                    .includes(category)
                )
            );


        }


    });


});




// =====================
// Sort
// =====================

const sortButton =
document.getElementById("sort-button");


if(sortButton){

    sortButton.addEventListener("click",()=>{

        alert(
        "Fitur urutkan akan ditambahkan."
        );

    });

}




// =====================
// Bottom Navigation
// =====================


const navHome =
document.getElementById("nav-home");


if(navHome){

navHome.addEventListener("click",(e)=>{

    e.preventDefault();


    const verified =
    localStorage.getItem("userVerified")
    === "true";


    if(verified){

        window.location.href =
        "../home_student.html";

    }else{

        window.location.href =
        "../home.html";

    }

});

}




const navSearch =
document.getElementById("nav-search");


if(navSearch){

navSearch.onclick=()=>{

    location.href="./search.html";

};

}



const navSell =
document.getElementById("nav-sell");


if(navSell){

navSell.onclick=()=>{

    location.href=
    "../shop/add_product.html";

};

}



const navChat =
document.getElementById("nav-chat");


if(navChat){

navChat.onclick=()=>{

    location.href=
    "../chat/chat.html";

};

}




const navProfile =
document.getElementById("nav-profile");


if(navProfile){

navProfile.onclick=()=>{ 
    location.href = "../profile/profile.html";
};
}