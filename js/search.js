 // Simple interactions for filter chips
    document.querySelectorAll('.flex-shrink-0.px-md').forEach(chip => {
      chip.addEventListener('click', function() {
        // Reset all
        document.querySelectorAll('.flex-shrink-0.px-md').forEach(c => {
          c.classList.remove('bg-primary', 'text-on-primary');
          c.classList.add('bg-surface-container-high', 'text-on-surface-variant');
        });
        // Set active
        this.classList.remove('bg-surface-container-high', 'text-on-surface-variant');
        this.classList.add('bg-primary', 'text-on-primary');
      });
    });

    // Handle scroll for glassmorphism header
    window.addEventListener('scroll', () => {
      const header = document.querySelector('header');
      if (window.scrollY > 20) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    });

    // =====================
// Search
// =====================
const searchInput = document.getElementById("search-input");
const productGrid = document.getElementById("product-grid");

const facultyButtons = document.querySelectorAll("[id^='faculty-']");
const categoryButtons = document.querySelectorAll("[id^='category-']");

const sortButton = document.getElementById("sort-button");

// =====================
// Search
// =====================
searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();

    const cards = productGrid.children;

    [...cards].forEach(card => {
        const text = card.innerText.toLowerCase();

        if (text.includes(keyword)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
});


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

// =====================
// Faculty Filter
// =====================
facultyButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        facultyButtons.forEach(item => {
            item.classList.remove("bg-primary","text-on-primary");
            item.classList.add("bg-surface-container-high","text-on-surface-variant");
        });

        btn.classList.remove("bg-surface-container-high","text-on-surface-variant");
        btn.classList.add("bg-primary","text-on-primary");

    });
});

document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
        const id = card.dataset.id || "";
        window.location.href =
            `/pages/marketplace/detail_product.html?id=${id}`;
    });
});

// =====================
// Category Filter
// =====================
categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        categoryButtons.forEach(item=>{
            item.classList.remove("border-primary-container","text-primary");
        });

        btn.classList.add("border-primary-container","text-primary");

    });
});

// =====================
// Sort
// =====================
sortButton.addEventListener("click", () => {
    alert("Fitur urutkan akan ditambahkan.");
});

// =====================
// Bottom Navigation
// =====================
document.getElementById("nav-home").addEventListener("click", function (e) {
    e.preventDefault();

    const isVerified = localStorage.getItem("userVerified") === "true";

    if (isVerified) {
        window.location.href = "../home_student.html";
    } else {
        window.location.href = "../home.html";
    }
});

document.getElementById("nav-search").onclick = () => {
    location.href = "./search.html";
};

document.getElementById("nav-sell").onclick = () => {
    location.href = "../shop/add_product.html";
};

document.getElementById("nav-chat").onclick = () => {
    location.href = "../chat/chat.html";
};

document.getElementById("nav-profile").addEventListener("click", function(e){
    e.preventDefault();

    const verified = localStorage.getItem("userVerified");

    if (verified === "true") {
        window.location.href = "../profile/profile.html";
    } else {
        window.location.href = "../verify/verify.html";
    }
});