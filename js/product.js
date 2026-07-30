const PRODUCTS = [
    {
        id: 1,
        name: "Laptop Dell",
        category: "Elektronik",
        price: 8000000,
        priceText: "Rp8.000.000",
        image: "../../assets/img/laptop.jpeg",
        seller: "Aditya Wijaya",
        campus: "Universitas Bengkulu",
        faculty: "Teknik",
        meetPoint: "Perpustakaan Universitas Bengkulu",
        condition: "Bekas",
        description:
            "Laptop Dell siap digunakan untuk kebutuhan kuliah, desain ringan, pemrograman, maupun pekerjaan kantor. Seluruh fungsi berjalan normal dengan minus pemakaian yang wajar pada bodi. Charger original disertakan."
    },

    {
        id: 2,
        name: "Honda Scoopy 2022",
        category: "Kendaraan",
        price: 16000000,
        priceText: "Rp16.000.000",
        image: "../../assets/img/scoopy.jpeg",
        seller: "Rizky Saputra",
        campus: "Universitas Bengkulu",
        faculty: "Umum",
        meetPoint: "Gerbang Utama UNIB",
        condition: "Bekas",
        description:
            "Honda Scoopy tahun 2022 dalam kondisi sangat terawat. Mesin halus, surat-surat lengkap, pajak aktif, dan siap digunakan tanpa perbaikan. Tidak ada minus, harga masih bisa dinegosiasikan."
    },

    {
        id: 3,
        name: "Pantofel Kulit Buaya",
        category: "Fashion",
        price: 250000,
        priceText: "Rp250.000",
        image: "../../assets/img/pantofel.jpeg",
        seller: "Bima Pratama",
        campus: "Universitas Bengkulu",
        faculty: "Hukum",
        meetPoint: "Fakultas Hukum",
        condition: "Bekas",
        description:
            "Sepatu pantofel berbahan kulit buaya asli. Cocok digunakan untuk seminar, sidang, maupun acara formal. Kondisi sangat baik dan masih nyaman dipakai. Nego tipis."
    },

    {
        id: 4,
        name: "Dompet Bostanten",
        category: "Fashion",
        price: 120000,
        priceText: "Rp120.000",
        image: "../../assets/img/dompet.jpeg",
        seller: "Dimas Putra",
        campus: "Universitas Bengkulu",
        faculty: "FEB",
        meetPoint: "Gedung PKM",
        condition: "Bekas",
        description:
            "Dompet Bostanten warna cokelat dengan kondisi mulus tanpa kerusakan. Seluruh slot kartu dan resleting masih berfungsi dengan baik. Harga masih bisa dinegosiasikan."
    },

    {
        id: 5,
        name: "Helm Cakil Retro",
        category: "Otomotif",
        price: 250000,
        priceText: "Rp250.000",
        image: "../../assets/img/helm.jpeg",
        seller: "Yoga Prasetyo",
        campus: "Universitas Bengkulu",
        faculty: "Teknik",
        meetPoint: "Parkiran Fakultas Teknik",
        condition: "Bekas",
        description:
            "Helm Cakil Retro warna abu dengan desain klasik. Kondisi siap pakai, busa masih nyaman dan visor jernih. Cocok untuk penggunaan harian. Harga nego."
    },

    {
        id: 6,
        name: "Buku Matematika Ekonomi",
        category: "Buku",
        price: 45000,
        priceText: "Rp45.000",
        image: "../../assets/img/buku1.jpeg",
        seller: "Nabila Putri",
        campus: "Universitas Bengkulu",
        faculty: "Ekonomi Pembangunan",
        meetPoint: "Perpustakaan Pusat",
        condition: "Bekas",
        description:
            "Buku Matematika Ekonomi untuk mahasiswa Ekonomi Pembangunan semester awal. Kondisi sangat baik, bersih dan siap digunakan. Harga masih bisa nego tipis."
    },

    {
        id: 7,
        name: "Akuntansi IFRS Edisi 2",
        category: "Buku",
        price: 50000,
        priceText: "Rp50.000",
        image: "../../assets/img/buku_akuntansi.jpeg",
        seller: "Salsa Rahma",
        campus: "Universitas Bengkulu",
        faculty: "Akuntansi",
        meetPoint: "FEB UNIB",
        condition: "Bekas",
        description:
            "Buku Akuntansi IFRS Edisi 2 dengan kondisi sangat baik tanpa halaman rusak maupun coretan berlebih. Cocok digunakan sebagai referensi mata kuliah akuntansi."
    },

    {
        id: 8,
        name: "Buku Statistika Bisnis",
        category: "Buku",
        price: 35000,
        priceText: "Rp35.000",
        image: "../../assets/img/buku_statistika_bisnis.jpeg",
        seller: "Dewi Anggraini",
        campus: "Universitas Bengkulu",
        faculty: "Manajemen",
        meetPoint: "Gedung Kuliah Bersama",
        condition: "Bekas",
        description:
            "Buku Statistika Bisnis dengan kondisi no minus. Sangat cocok digunakan sebagai referensi mata kuliah statistika maupun penelitian."
    },

    {
        id: 9,
        name: "Sepatu Futsal Catalyst",
        category: "Olahraga",
        price: 300000,
        priceText: "Rp300.000",
        image: "../../assets/img/sepatu_futsal.jpeg",
        seller: "Fajar Ramadhan",
        campus: "Universitas Bengkulu",
        faculty: "FKIP",
        meetPoint: "GOR UNIB",
        condition: "Bekas",
        description:
            "Sepatu futsal Catalyst ukuran 42. Kondisi siap pakai tanpa kerusakan, sol masih tebal dan nyaman digunakan untuk bermain."
    },

    {
        id: 10,
        name: "Nike Zoom Original",
        category: "Fashion",
        price: 500000,
        priceText: "Rp500.000",
        image: "../../assets/img/sepatu_nike_zoom.jpeg",
        seller: "Arif Nugroho",
        campus: "Universitas Bengkulu",
        faculty: "Pertanian",
        meetPoint: "Student Center",
        condition: "Bekas",
        description:
            "Nike Zoom original dengan kondisi siap pakai. Terdapat lecet ringan akibat pemakaian normal, namun sol dan kenyamanan masih sangat baik."
    },

    {
        id: 11,
        name: "Skincare Pria",
        category: "Kecantikan",
        price: 150000,
        priceText: "Rp150.000",
        image: "../../assets/img/skincare_cwok.jpeg",
        seller: "Kevin Fernando",
        campus: "Universitas Bengkulu",
        faculty: "Umum",
        meetPoint: "Perpustakaan Pusat",
        condition: "Baru",
        description:
            "Paket skincare pria dijual karena salah membeli varian. Produk belum pernah digunakan dan masih dalam kondisi sangat baik."
    },

    {
        id: 12,
        name: "Sweater Tebal",
        category: "Fashion",
        price: 150000,
        priceText: "Rp150.000",
        image: "../../assets/img/sweater.jpeg",
        seller: "Luthfi Akbar",
        campus: "Universitas Bengkulu",
        faculty: "FISIP",
        meetPoint: "Gedung PKM",
        condition: "Baru",
        description:
            "Sweater tebal dengan bahan nyaman digunakan di ruangan ber-AC maupun saat musim hujan. Dijual karena salah membeli ukuran."
    },

    {
        id: 13,
        name: "Tas Gunung Eiger",
        category: "Outdoor",
        price: 400000,
        priceText: "Rp400.000",
        image: "../../assets/img/tas_gunung_eiger.jpeg",
        seller: "Rama Saputra",
        campus: "Universitas Bengkulu",
        faculty: "Kehutanan",
        meetPoint: "Gerbang Fakultas Pertanian",
        condition: "Bekas",
        description:
            "Tas gunung Eiger original dengan kondisi sangat mulus tanpa kerusakan. Cocok digunakan untuk hiking, travelling maupun kegiatan lapangan."
    },

    {
        id: 14,
        name: "Speaker Portable",
        category: "Elektronik",
        price: 265000,
        priceText: "Rp265.000",
        image: "../../assets/img/speaker.jpeg",
        seller: "Aditya Wijaya",
        campus: "Universitas Bengkulu",
        faculty: "Umum",
        meetPoint: "Student Center",
        condition: "Bekas",
        description:
            "Speaker portable dengan kualitas suara jernih dan bass yang baik. Cocok digunakan untuk karaoke, belajar kelompok maupun hiburan. Kondisi siap pakai tanpa kendala."
    },
    {
        id: 15,
        name: "Kemeja Levis",
        category: "Fashion",
        price: 200000,
        priceText: "Rp200.000",
        image: "../../assets/img/kemeja.jpeg",
        seller: "Alex Rivera",
        campus: "Universitas Indonesia",
        faculty: "Teknik Informatika",
        meetPoint: "Kampus UI",
        condition: "Bekas",
        stock: 1,
        views: "856",
        description:
            "Kemeja dan jaket Levis dengan kondisi sangat baik. Cocok digunakan untuk kegiatan kampus maupun gaya casual sehari-hari."
    },


    {
        id: 16,
        name: "JIM JOKER Original",
        category: "Fashion",
        price: 1200000,
        priceText: "Rp1.200.000",
        image: "../../assets/img/sepatu_jim_joker.jpeg",
        seller: "Alex Rivera",
        campus: "Universitas Indonesia",
        faculty: "Teknik Informatika",
        meetPoint: "Kampus UI",
        condition: "Bekas",
        stock: 1,
        views: "1.4k",
        description:
            "Sepatu JIM JOKER original dengan kondisi premium. Nyaman digunakan dan masih sangat layak pakai."
    },


    {
        id: 17,
        name: "Jaket Levis Vintage",
        category: "Fashion",
        price: 200000,
        priceText: "Rp200.000",
        image: "../../assets/img/jaket_levis.jpeg",
        seller: "Alex Rivera",
        campus: "Universitas Indonesia",
        faculty: "Teknik Informatika",
        meetPoint: "Kampus UI",
        condition: "Bekas",
        stock: 1,
        views: "632",
        description:
            "Jaket Levis vintage berbahan denim kuat dengan kondisi terawat."
    },
];

window.PRODUCTS = PRODUCTS;