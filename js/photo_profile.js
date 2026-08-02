const profilePhotos = [
    "profile_1.jpeg",
    "profile_2.jpeg",
    "profile_3.jpeg",
    "profile_4.jpeg",
    "profile_5.jpeg"
];


document.addEventListener("DOMContentLoaded", () => {
    const profileNumber = 1; // ubah 1-5

    // Cek apakah file berada langsung di folder pages
    const isRootPage = location.pathname.endsWith("/pages/home.html") ||
                       location.pathname.endsWith("/pages/home_student.html");

    const assetPath = isRootPage
        ? `../assets/img/profile_${profileNumber}.jpeg`
        : `../../assets/img/profile_${profileNumber}.jpeg`;

    document.querySelectorAll(".user-profile").forEach(img => {
        img.src = assetPath;
    });
});