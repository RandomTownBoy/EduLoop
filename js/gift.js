const GREEN_POINT = {
    point: 20,
    pointPerTransaction: 2,
    redeemLocation: "Kopmart UNIB"
};

const GIFTS = [
    {
        id: 1,
        name: "Beng Beng",
        point: 15,
        image: "../../assets/img/gift_beng_beng.jpeg",
        category: "Snack",
        description: "Snack gratis hasil penukaran poin."
    },
    {
        id: 2,
        name: "Ganci Foto",
        point: 10,
        image: "../../assets/img/gift_ganci_foto.jpeg",
        category: "Merchandise",
        description: "Gantungan kunci custom foto."
    },
    {
        id: 3,
        name: "Ganci Kucing",
        point: 10,
        image: "../../assets/img/gift_ganci_kucing.jpeg",
        category: "Merchandise",
        description: "Gantungan kunci karakter kucing."
    },
    {
        id: 4,
        name: "Ganci Pink",
        point: 10,
        image: "../../assets/img/gift_ganci_pink.jpeg",
        category: "Merchandise",
        description: "Gantungan kunci edisi pink."
    },
    {
        id: 5,
        name: "Quote Card",
        point: 10,
        image: "../../assets/img/gift_ganci_quotes.jpeg",
        category: "Merchandise",
        description: "Quote card eksklusif."
    },
    {
        id: 6,
        name: "Slai Olai",
        point: 10,
        image: "../../assets/img/gift_slai_olai.jpeg",
        category: "Snack",
        description: "Snack gratis hasil penukaran poin."
    },
    {
        id: 7,
        name: "Superstar",
        point: 15,
        image: "../../assets/img/gift_superstar.jpeg",
        category: "Snack",
        description: "Snack eksklusif untuk Superstar."
    }
];

window.GREEN_POINT = GREEN_POINT;
window.GIFTS = GIFTS;

document.getElementById("green-point").textContent = GREEN_POINT.point;

const nextGift = GIFTS.find(g => g.point > GREEN_POINT.point);

if (nextGift) {
    document.getElementById("progress-text").textContent =
        `${GREEN_POINT.point}/${nextGift.point}`;

    document.getElementById("progress-bar").style.width =
        `${(GREEN_POINT.point / nextGift.point) * 100}%`;

    document.getElementById("next-gift-info").textContent =
        `${nextGift.point - GREEN_POINT.point} poin lagi untuk ${nextGift.name}`;
} else {
    document.getElementById("progress-text").textContent = "Maksimal";

    document.getElementById("progress-bar").style.width = "100%";

    document.getElementById("next-gift-info").textContent =
        "Semua hadiah sudah bisa ditukar.";
}

document.getElementById("transaction-info").textContent =
    `Setiap transaksi berhasil akan memperoleh ${GREEN_POINT.pointPerTransaction} Green Point. Penukaran hadiah dilakukan di ${GREEN_POINT.redeemLocation}.`;