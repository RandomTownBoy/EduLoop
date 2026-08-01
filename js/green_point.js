function updateGreenPointUI() {

    const currentPoint = GREEN_POINT.point;

    // Update saldo
    document.getElementById("green-point").textContent =
        currentPoint;

    // Cari hadiah berikutnya
    const nextGift = GIFTS.find(gift => gift.point > currentPoint);

    if (nextGift) {

        const percentage =
            Math.min((currentPoint / nextGift.point) * 100, 100);

        document.getElementById("progress-text").textContent =
            `${currentPoint}/${nextGift.point}`;

        document.getElementById("progress-bar").style.width =
            `${percentage}%`;

        document.getElementById("next-gift-info").textContent =
            `${nextGift.point - currentPoint} poin lagi untuk ${nextGift.name}`;

    } else {

        document.getElementById("progress-text").textContent =
            "MAX";

        document.getElementById("progress-bar").style.width =
            "100%";

        document.getElementById("next-gift-info").textContent =
            "Selamat! Semua hadiah sudah bisa ditukar.";

    }

}

// =====================
// Weekly Gift
// =====================

const weeklyGift = GIFTS[0];

if (weeklyGift) {

    document.getElementById("weekly-gift-image").src =
        weeklyGift.image;

    document.getElementById("weekly-gift-image").alt =
        weeklyGift.name;

    document.getElementById("weekly-gift-name").textContent =
        weeklyGift.name;

    document.getElementById("weekly-gift-point").textContent =
        `${weeklyGift.point} Poin`;

    document.getElementById("weekly-gift-description").textContent =
        weeklyGift.description;

}


// =====================
// Green Point Summary
// =====================

const pointElement = document.getElementById("green-point");
const locationElement = document.getElementById("redeem-location");
const transactionInfo = document.getElementById("transaction-info");

if (window.GREEN_POINT) {

    if (pointElement) {
        pointElement.textContent = GREEN_POINT.point;
    }
    updateGreenPointUI();
    if (locationElement) {
        locationElement.textContent = GREEN_POINT.redeemLocation;
    }

    if (transactionInfo) {
        transactionInfo.textContent =
            `Dapatkan ${GREEN_POINT.pointPerTransaction} Green Points setiap transaksi berhasil.`;
    }

}



// =====================
// Gift Catalog
// =====================

const giftGrid = document.getElementById("gift-grid");

function renderGift() {

    if (!giftGrid) return;

    giftGrid.innerHTML = "";

    GIFTS.forEach(gift => {

        giftGrid.innerHTML += `

        <div class="bg-white p-4 rounded-2xl border border-surface-variant shadow-sm flex flex-col">

            <div class="aspect-square rounded-xl overflow-hidden mb-3">

                <img
                    src="${gift.image}"
                    alt="${gift.name}"
                    class="w-full h-full object-cover">

            </div>

            <h3 class="text-sm font-bold line-clamp-1">
                ${gift.name}
            </h3>

            <p class="text-xs text-on-surface-variant mb-2">
                ${gift.category}
            </p>

            <div class="flex items-center gap-1 text-green-600 mb-3">

                <span class="material-symbols-outlined text-sm">
                    eco
                </span>

                <span class="font-bold">
                    ${gift.point} Poin
                </span>

            </div>

            <button
                onclick="redeemGift(${gift.id})"
                class="mt-auto bg-primary text-white py-2 rounded-xl font-bold text-sm active:scale-95 transition-transform"
            >
                Tukar
            </button>

        </div>

        `;

    });

}

renderGift();


// =====================
// Redeem Gift
// =====================

let selectedGift = null;

function redeemGift(id) {

    selectedGift = GIFTS.find(g => g.id === id);

    if (!selectedGift) return;

    document.getElementById("redeem-message").textContent =
        `Tukar ${selectedGift.name} seharga ${selectedGift.point} Green Point?`;

    document.getElementById("redeem-modal").classList.remove("hidden");
    document.getElementById("redeem-modal").classList.add("flex");

}

function closeRedeemModal() {

    document.getElementById("redeem-modal").classList.add("hidden");
    document.getElementById("redeem-modal").classList.remove("flex");

}

document
    .getElementById("confirm-redeem")
    .addEventListener("click", function () {

        // poin tidak cukup
        if (GREEN_POINT.point < selectedGift.point) {

            closeRedeemModal();

            document
                .getElementById("failed-modal")
                .classList.remove("hidden");

            document
                .getElementById("failed-modal")
                .classList.add("flex");

            return;
        }

        // kurangi saldo sementara
        GREEN_POINT.point -= selectedGift.point;

        // update angka di kartu
        document.getElementById("green-point").textContent =
            GREEN_POINT.point;

        closeRedeemModal();

        document
            .getElementById("success-modal")
            .classList.remove("hidden");

        document
            .getElementById("success-modal")
            .classList.add("flex");

    });

function closeSuccessModal() {

    document.getElementById("success-modal").classList.add("hidden");
    document.getElementById("success-modal").classList.remove("flex");

}


// =====================
// Weekly Gift Button
// =====================

document
    .getElementById("weekly-gift-button")
    .addEventListener("click", function () {

        redeemGift(weeklyGift.id);

    });

function closeFailedModal() {

    document
        .getElementById("failed-modal")
        .classList.add("hidden");

    document
        .getElementById("failed-modal")
        .classList.remove("flex");

}

// =====================
// Bottom Navigation
// =====================

document
    .getElementById("nav-home")
    .addEventListener("click", function (e) {
        e.preventDefault();

        const isVerified = localStorage.getItem("userVerified") === "true";

        if (isVerified) {
            window.location.href = "../home_student.html";
        } else {
            window.location.href = "../home.html";
        }
    });

document
    .getElementById("nav-search")
    .addEventListener("click", function (e) {
        e.preventDefault();

        window.location.href = "../marketplace/search.html";
    });

document
    .getElementById("nav-sell")
    .addEventListener("click", function (e) {
        e.preventDefault();

        window.location.href = "../shop/add_product.html";
    });

document
    .getElementById("nav-chat")
    .addEventListener("click", function (e) {
        e.preventDefault();

        window.location.href = "../chat/chat.html";
    });

document
    .getElementById("nav-profile")
    .addEventListener("click", function (e) {
        e.preventDefault();

        // sudah di profile
    });
