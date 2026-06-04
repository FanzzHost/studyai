// ===== DATA KELAS & MAPEL =====
const kelasData = [
    { id: 1, nama: "Kelas 1 SD", icon: "fa-child" },
    { id: 2, nama: "Kelas 2 SD", icon: "fa-child-reaching" },
    { id: 3, nama: "Kelas 3 SD", icon: "fa-shapes" },
    { id: 4, nama: "Kelas 4 SD", icon: "fa-pencil-alt" },
    { id: 5, nama: "Kelas 5 SD", icon: "fa-book" },
    { id: 6, nama: "Kelas 6 SD", icon: "fa-graduation-cap" },
    { id: 7, nama: "Kelas 7 SMP", icon: "fa-school" },
    { id: 8, nama: "Kelas 8 SMP", icon: "fa-school" },
    { id: 9, nama: "Kelas 9 SMP", icon: "fa-school" },
    { id: 10, nama: "Kelas 10 SMA", icon: "fa-university" },
    { id: 11, nama: "Kelas 11 SMA", icon: "fa-university" },
    { id: 12, nama: "Kelas 12 SMA", icon: "fa-university" }
];

const mapelData = {
    "Kelas 1 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Berhitung, penjumlahan, pengurangan" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Membaca, menulis, berbicara" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Mengenal alam dan lingkungan" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Mengenal lingkungan sosial" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Pendidikan karakter dan agama" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Menggambar, bernyanyi, menari" }
    ],
    "Kelas 2 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Perkalian, pembagian, satuan" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Membaca pemahaman, menulis cerita" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Makhluk hidup dan benda" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Keluarga dan lingkungan" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Akhlak dan ibadah" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni rupa dan musik" }
    ],
    "Kelas 3 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Pecahan, satuan panjang, waktu" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks deskripsi, puisi, dongeng" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Ciri-ciri makhluk hidup" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Lingkungan dan kegiatan ekonomi" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Sejarah dan ajaran agama" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni tari dan teater" }
    ],
    "Kelas 4 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Bangun datar, keliling, luas" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks narasi, berita, cerita" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Energi, gaya, dan gerak" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Peta, kenampakan alam" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Kitab suci dan sejarah" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni musik dan kriya" }
    ],
    "Kelas 5 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Bangun ruang, volume, debit" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks eksplanasi, diskusi, pidato" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Sistem tubuh manusia" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Sejarah perjuangan bangsa" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Fiqih dan tasawuf" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni pertunjukan" }
    ],
    "Kelas 6 SD": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Operasi bilangan, statistik" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks laporan, editorial" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Adaptasi, ekosistem, tata surya" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Globalisasi dan kerja sama" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Muamalah dan kehidupan" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni rupa 3 dimensi" }
    ],
    "Kelas 7 SMP": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Bilangan, aljabar, geometri" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks observasi, prosedur" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Klasifikasi makhluk hidup" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Interaksi sosial dan lembaga" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Grammar, vocabulary, speaking" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Al-Quran dan Hadits" },
        { nama: "PJOK", icon: "fa-running", deskripsi: "Olahraga dan kesehatan" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni musik dan tari" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Dasar pemrograman dan logika" }
    ],
    "Kelas 8 SMP": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Teorema Pythagoras, lingkaran" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks eksplanasi, diskusi" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Sistem gerak, zat aditif" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Kehidupan sosial budaya" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Narrative text, report" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Aqidah dan akhlak" },
        { nama: "PJOK", icon: "fa-running", deskripsi: "Bola basket, voli, atletik" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni rupa dan teater" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Pemrograman dan algoritma" }
    ],
    "Kelas 9 SMP": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Transformasi, statistika, peluang" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks laporan, ulasan" },
        { nama: "IPA", icon: "fa-flask", deskripsi: "Listrik, magnet, bioteknologi" },
        { nama: "IPS", icon: "fa-globe-asia", deskripsi: "Perubahan sosial budaya" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Analytical exposition" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Sejarah dan peradaban Islam" },
        { nama: "PJOK", icon: "fa-running", deskripsi: "Sepak bola, renang" },
        { nama: "Seni Budaya", icon: "fa-palette", deskripsi: "Seni pertunjukan modern" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Database dan jaringan" }
    ],
    "Kelas 10 SMA": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Eksponen, logaritma, trigonometri" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks editorial, kritik" },
        { nama: "Fisika", icon: "fa-atom", deskripsi: "Besaran, vektor, gerak" },
        { nama: "Kimia", icon: "fa-flask", deskripsi: "Atom, stoikiometri, ikatan" },
        { nama: "Biologi", icon: "fa-dna", deskripsi: "Sel, jaringan, metabolisme" },
        { nama: "Sejarah", icon: "fa-landmark", deskripsi: "Zaman praaksara, Hindu-Buddha" },
        { nama: "Geografi", icon: "fa-globe", deskripsi: "Litosfer, atmosfer, hidrosfer" },
        { nama: "Ekonomi", icon: "fa-chart-line", deskripsi: "Konsep ilmu ekonomi" },
        { nama: "Sosiologi", icon: "fa-users", deskripsi: "Sosialisasi dan interaksi" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Narrative, analytical" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Al-Quran dan tafsir" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Pemrograman dan data" }
    ],
    "Kelas 11 SMA": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Turunan, integral, matriks" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks biografi, ceramah" },
        { nama: "Fisika", icon: "fa-atom", deskripsi: "Termodinamika, gelombang" },
        { nama: "Kimia", icon: "fa-flask", deskripsi: "Termokimia, laju reaksi" },
        { nama: "Biologi", icon: "fa-dna", deskripsi: "Sistem peredaran darah" },
        { nama: "Sejarah", icon: "fa-landmark", deskripsi: "Kolonialisme dan imperialisme" },
        { nama: "Geografi", icon: "fa-globe", deskripsi: "Biosfer, antroposfer" },
        { nama: "Ekonomi", icon: "fa-chart-line", deskripsi: "Pendapatan nasional" },
        { nama: "Sosiologi", icon: "fa-users", deskripsi: "Stratifikasi dan mobilitas" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Hortatory exposition" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Fiqih dan muamalah" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "AI dan machine learning dasar" }
    ],
    "Kelas 12 SMA": [
        { nama: "Matematika", icon: "fa-calculator", deskripsi: "Program linear, limit, integral" },
        { nama: "Bahasa Indonesia", icon: "fa-language", deskripsi: "Teks proposal, karya ilmiah" },
        { nama: "Fisika", icon: "fa-atom", deskripsi: "Listrik, magnet, fisika modern" },
        { nama: "Kimia", icon: "fa-flask", deskripsi: "Kesetimbangan, elektrokimia" },
        { nama: "Biologi", icon: "fa-dna", deskripsi: "Genetika, evolusi, bioteknologi" },
        { nama: "Sejarah", icon: "fa-landmark", deskripsi: "Perang dunia, perjuangan" },
        { nama: "Geografi", icon: "fa-globe", deskripsi: "Wilayah dan perencanaan" },
        { nama: "Ekonomi", icon: "fa-chart-line", deskripsi: "Pembangunan dan keuangan" },
        { nama: "Sosiologi", icon: "fa-users", deskripsi: "Perubahan sosial global" },
        { nama: "Bahasa Inggris", icon: "fa-flag-usa", deskripsi: "Review text, spoof" },
        { nama: "Pendidikan Agama", icon: "fa-praying-hands", deskripsi: "Dakwah dan peradaban" },
        { nama: "Informatika Dasar", icon: "fa-laptop-code", deskripsi: "Cyber security dan IoT" }
    ]
};

// ===== API KEY =====
const apiKey = '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';

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');

    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    if (toggle && links) {
        toggle.addEventListener('click', () => links.classList.toggle('active'));
        links.querySelectorAll('.nav-link').forEach(l => {
            l.addEventListener('click', () => links.classList.remove('active'));
        });
    }
}

// ===== API CALL =====
async function callGroqAPI(prompt) {
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            max_tokens: 4000
        })
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error?.message || err.message || 'Gagal memanggil API Groq');
    }

    const data = await res.json();
    return data.choices[0].message.content;
}

// ===== FORMAT MATERI =====
function formatMateri(text) {
    let html = text
        .replace(/^###\s+(.*$)/gim, '<h5>$1</h5>')
        .replace(/^##\s+(.*$)/gim, '<h4>$1</h4>')
        .replace(/^#\s+(.*$)/gim, '<h4>$1</h4>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/^>\s+(.*$)/gim, '<blockquote>$1</blockquote>')
        .replace(/^-\s+(.*$)/gim, '<li>$1</li>')
        .replace(/^\d+\.\s+(.*$)/gim, '<li>$1</li>');

    html = html.replace(/(<li>.*?<\/li>)/gs, '<ul>$1</ul>');
    html = html.replace(/<\/ul>\s*<ul>/g, '');

    return html.split('\n\n').map(p => {
        p = p.trim();
        if (!p || p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<blockquote')) return p;
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('');
}

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-message');
    if (!toast || !msg) return;
    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}
