document.addEventListener('DOMContentLoaded', () => {
    // Debug: cek apakah DOM sudah siap
    console.log('DOM siap, mulai pasang event listener tab');

    // Ambil semua tombol tab dan konten tab
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length === 0) {
        console.warn('Tidak ditemukan tombol tab (.tab-btn)');
    }
    if (tabPanes.length === 0) {
        console.warn('Tidak ditemukan konten tab (.tab-pane)');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Tab diklik:', button.getAttribute('data-tab'));

            // Hapus kelas active dari semua tombol dan pane
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Tambah kelas active ke tombol yang diklik
            button.classList.add('active');

            // Tampilkan pane yang sesuai
            const tabId = button.getAttribute('data-tab');
            const targetPane = document.getElementById(tabId);
            if (targetPane) {
                targetPane.classList.add('active');
            } else {
                console.error(`Elemen dengan id="${tabId}" tidak ditemukan`);
            }
        });
    });

    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    } else {
        console.warn('Elemen hamburger atau nav-links tidak ditemukan');
    }

    // Debug: cek tombol pertama aktif dan pane aktif
    const activeBtn = document.querySelector('.tab-btn.active');
    const activePane = document.querySelector('.tab-pane.active');
    console.log('Tombol aktif saat ini:', activeBtn ? activeBtn.getAttribute('data-tab') : 'tidak ada');
    console.log('Pane aktif saat ini:', activePane ? activePane.id : 'tidak ada');

    // ... kode lain Anda tetap di sini, misal smooth scroll, hamburger, slider, dll
});