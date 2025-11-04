document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleksi Elemen Input
    const inputCardTitle = document.querySelector('#card-title-text'); // BARU
    const inputRecipient = document.querySelector('#recipient-name');
    const inputMessage = document.querySelector('#birthday-message');
    const inputColor = document.querySelector('#card-color');
    const inputTextColor = document.querySelector('#text-color'); // BARU
    const inputSender = document.querySelector('#sender-name');

    // 2. Seleksi Elemen Pratinjau
    const previewArea = document.querySelector('#preview-area'); 
    const previewCardTitle = document.querySelector('#preview-card-title'); // BARU
    const previewRecipient = document.querySelector('#preview-recipient');
    const previewMessage = document.querySelector('#preview-message');
    const previewSender = document.querySelector('#preview-sender');

    // Nilai Default
    const defaultCardTitle = "Selamat Ulang Tahun!";
    const defaultRecipient = "Untuk: Seseorang yang Spesial";
    const defaultMessage = "Pesan utama ulang tahun akan muncul di sini. Isi dengan ucapan terbaik Anda!";
    const defaultSender = "Dari: Pengirim Rahasia";


    // 3. Fungsi Handler untuk Memperbarui Pratinjau
    const updatePreview = () => {
        
        // --- LOGIKA 1: Judul Kartu BARU ---
        if (inputCardTitle.value.trim() === '') {
            previewCardTitle.textContent = defaultCardTitle;
        } else {
            previewCardTitle.textContent = inputCardTitle.value;
        }

        // --- LOGIKA 2: Nama Penerima ---
        if (inputRecipient.value.trim() === '') {
            previewRecipient.textContent = defaultRecipient;
        } else {
            previewRecipient.textContent = "Untuk: " + inputRecipient.value;
        }

        // --- LOGIKA 3: Pesan Ulang Tahun ---
        if (inputMessage.value.trim() === '') {
            previewMessage.textContent = defaultMessage;
        } else {
            previewMessage.textContent = inputMessage.value;
        }

        // --- LOGIKA 4: Warna Latar Kartu (Menggunakan .style) ---
        previewArea.style.backgroundColor = inputColor.value;
        
        // --- LOGIKA 5: Warna Teks di dalam Kartu BARU (KUNCI) ---
        const textColorValue = inputTextColor.value;
        previewCardTitle.style.color = textColorValue;
        previewRecipient.style.color = textColorValue;
        previewMessage.style.color = textColorValue;
        previewSender.style.color = textColorValue;

        // --- LOGIKA Tambahan: Nama Pengirim ---
        if (inputSender.value.trim() === '') {
            previewSender.textContent = defaultSender;
        } else {
            previewSender.textContent = "Dari: " + inputSender.value;
        }
    };


    // 4. Pasang Event Listener 'input' ke Semua Elemen
    inputCardTitle.addEventListener('input', updatePreview); // EVENT BARU
    inputRecipient.addEventListener('input', updatePreview);
    inputMessage.addEventListener('input', updatePreview);
    inputColor.addEventListener('input', updatePreview);
    inputTextColor.addEventListener('input', updatePreview); // EVENT BARU
    inputSender.addEventListener('input', updatePreview);

    // Jalankan sekali saat halaman dimuat
    updatePreview(); 
});