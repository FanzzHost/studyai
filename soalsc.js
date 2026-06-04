// ===== API KEY =====
const apiKey = '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';

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

// ===== STATE SOAL =====
let soalList = [];
let jawaban = {};
let flagged = {};
let currentIdx = 0;
let timer = null;
let startTime = null;

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

// ===== TOAST =====
function showToast(message) {
    const toast = document.getElementById('toast');
    const msg = document.getElementById('toast-message');
    if (!toast || !msg) return;
    msg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
}

// ===== FUNGSI SOAL =====
function populateKelas() {
    const sel = document.getElementById('soal-kelas');
    if (!sel) return;

    kelasData.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k.nama;
        opt.textContent = k.nama;
        sel.appendChild(opt);
    });

    sel.addEventListener('change', () => {
        const mapelSel = document.getElementById('soal-mapel');
        if (!mapelSel) return;
        mapelSel.innerHTML = '<option value="">Pilih Mapel</option>';
        const kelas = sel.value;
        if (kelas && mapelData[kelas]) {
            mapelData[kelas].forEach(m => {
                const opt = document.createElement('option');
                opt.value = m.nama;
                opt.textContent = m.nama;
                mapelSel.appendChild(opt);
            });
        }
    });
}

async function generateSoal() {
    const kelas = document.getElementById('soal-kelas')?.value;
    const mapel = document.getElementById('soal-mapel')?.value;
    const topik = document.getElementById('soal-topik')?.value.trim();
    const jumlah = document.getElementById('soal-jumlah')?.value;
    const kesulitan = document.getElementById('soal-kesulitan')?.value;
    const tipe = document.getElementById('soal-tipe')?.value;

    if (!kelas || !mapel) { showToast('Pilih kelas dan mapel dulu'); return; }

    soalList = [];
    jawaban = {};
    flagged = {};
    currentIdx = 0;
    stopTimer();

    const formSection = document.getElementById('form-section');
    const generateLoading = document.getElementById('generate-loading');
    const quizSection = document.getElementById('quiz-section');
    const hasilSection = document.getElementById('hasil-section');
    const reviewSection = document.getElementById('review-section');

    if (formSection) formSection.style.display = 'none';
    if (generateLoading) generateLoading.style.display = 'flex';
    if (quizSection) quizSection.style.display = 'none';
    if (hasilSection) hasilSection.style.display = 'none';
    if (reviewSection) reviewSection.style.display = 'none';

    const kelasBadge = document.getElementById('quiz-kelas-badge');
    const mapelBadge = document.getElementById('quiz-mapel-badge');
    const kesulitanBadge = document.getElementById('quiz-kesulitan-badge');

    if (kelasBadge) kelasBadge.textContent = kelas;
    if (mapelBadge) mapelBadge.textContent = mapel;
    if (kesulitanBadge) kesulitanBadge.textContent = kesulitan.charAt(0).toUpperCase() + kesulitan.slice(1);

    try {
        let prompt = `Buatkan ${jumlah} soal ${tipe === 'pilihan_ganda' ? 'pilihan ganda' : tipe === 'essay' ? 'essay' : 'campuran pilihan ganda dan essay'} dalam Bahasa Indonesia untuk:
- Kelas: ${kelas}
- Mata Pelajaran: ${mapel}
- Topik: ${topik || 'Umum'}
- Tingkat Kesulitan: ${kesulitan}

Format JSON (hanya return JSON, tanpa markdown code block):
{
  "soal": [
    {
      "nomor": 1,
      "pertanyaan": "...",
      "tipe": "pilihan_ganda",
      "pilihan": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "jawaban_benar": "A",
      "penjelasan": "..."
    }
  ]
}

Untuk essay:
{
  "nomor": 1,
  "pertanyaan": "...",
  "tipe": "essay",
  "jawaban_benar": "...",
  "penjelasan": "..."
}

Pastikan soal sesuai untuk siswa ${kelas}.`;

        const response = await callGroqAPI(prompt);
        let jsonStr = response.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        const data = JSON.parse(jsonStr);
        soalList = data.soal || [];

        if (generateLoading) generateLoading.style.display = 'none';
        if (quizSection) quizSection.style.display = 'block';

        const totalNum = document.getElementById('total-num');
        if (totalNum) totalNum.textContent = soalList.length;

        startTimer();
        renderNavDots();
        renderSoal(0);
        showToast('Soal berhasil digenerate!');
    } catch (err) {
        if (generateLoading) generateLoading.style.display = 'none';
        if (formSection) formSection.style.display = 'block';
        showToast('Gagal: ' + err.message);
    }
}

function renderNavDots() {
    const dots = document.getElementById('nav-dots');
    if (!dots) return;
    dots.innerHTML = soalList.map((s, i) => {
        let cls = 'nav-dot';
        if (i === currentIdx) cls += ' active';
        if (jawaban[s.nomor] !== undefined) cls += ' answered';
        if (flagged[s.nomor]) cls += ' flagged';
        return `<div class="${cls}" onclick="goToSoal(${i})">${i + 1}</div>`;
    }).join('');
}

function renderSoal(idx) {
    currentIdx = idx;
    const s = soalList[idx];
    if (!s) return;

    const pct = ((idx + 1) / soalList.length) * 100;
    const progressFill = document.getElementById('progress-fill');
    const currentNum = document.getElementById('current-num');

    if (progressFill) progressFill.style.width = pct + '%';
    if (currentNum) currentNum.textContent = idx + 1;

    renderNavDots();

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnFinish = document.getElementById('btn-finish');

    if (btnPrev) btnPrev.disabled = idx === 0;
    const isLast = idx === soalList.length - 1;
    if (btnNext) btnNext.style.display = isLast ? 'none' : 'inline-flex';
    if (btnFinish) btnFinish.style.display = isLast ? 'inline-flex' : 'none';

    const btnFlag = document.getElementById('btn-flag');
    if (btnFlag) {
        if (flagged[s.nomor]) {
            btnFlag.classList.add('active');
            btnFlag.innerHTML = '<i class="fas fa-flag"></i> Tandai';
        } else {
            btnFlag.classList.remove('active');
            btnFlag.innerHTML = '<i class="far fa-flag"></i> Tandai';
        }
    }

    const quizNumber = document.getElementById('quiz-number');
    const quizType = document.getElementById('quiz-type');
    const quizQuestion = document.getElementById('quiz-question');

    if (quizNumber) quizNumber.textContent = s.nomor;
    if (quizType) quizType.textContent = s.tipe === 'essay' ? 'Essay' : 'Pilihan Ganda';
    if (quizQuestion) quizQuestion.innerHTML = s.pertanyaan.replace(/\n/g, '<br>');

    const optionsDiv = document.getElementById('quiz-options');
    const essayDiv = document.getElementById('quiz-essay');
    const textarea = document.getElementById('essay-answer');

    if (s.tipe === 'essay') {
        if (optionsDiv) optionsDiv.style.display = 'none';
        if (essayDiv) essayDiv.style.display = 'block';
        if (textarea) {
            textarea.value = jawaban[s.nomor] || '';
            textarea.oninput = () => { jawaban[s.nomor] = textarea.value; renderNavDots(); };
        }
    } else {
        if (essayDiv) essayDiv.style.display = 'none';
        if (optionsDiv) optionsDiv.style.display = 'block';
        const saved = jawaban[s.nomor];
        optionsDiv.innerHTML = s.pilihan.map(p => {
            const val = p.charAt(0);
            const text = p.substring(3);
            const selected = saved === val ? 'selected' : '';
            return `<div class="option-box ${selected}" onclick="pilihJawaban(${s.nomor}, '${val}')">
                <div class="option-letter">${val}</div>
                <div class="option-text">${text}</div>
            </div>`;
        }).join('');
    }

    const card = document.getElementById('quiz-card');
    if (card) {
        card.style.animation = 'none';
        card.offsetHeight;
        card.style.animation = 'slideIn 0.35s ease';
    }
}

function pilihJawaban(nomor, val) {
    jawaban[nomor] = val;
    renderSoal(currentIdx);
    renderNavDots();
}

function goToSoal(idx) {
    if (idx >= 0 && idx < soalList.length) renderSoal(idx);
}

function nextSoal() {
    if (currentIdx < soalList.length - 1) renderSoal(currentIdx + 1);
}

function prevSoal() {
    if (currentIdx > 0) renderSoal(currentIdx - 1);
}

function toggleFlag() {
    const s = soalList[currentIdx];
    if (!s) return;
    flagged[s.nomor] = !flagged[s.nomor];
    renderNavDots();
    renderSoal(currentIdx);
    if (flagged[s.nomor]) showToast('Soal ditandai');
}

function startTimer() {
    stopTimer();
    startTime = Date.now();
    const el = document.getElementById('timer');
    timer = setInterval(() => {
        const sec = Math.floor((Date.now() - startTime) / 1000);
        const m = Math.floor(sec / 60).toString().padStart(2, '0');
        const s = (sec % 60).toString().padStart(2, '0');
        if (el) el.textContent = `${m}:${s}`;
    }, 1000);
}

function stopTimer() {
    if (timer) { clearInterval(timer); timer = null; }
}

function getWaktu() {
    if (!startTime) return '00:00';
    const sec = Math.floor((Date.now() - startTime) / 1000);
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function finishSoal() {
    if (soalList.length === 0) return;
    stopTimer();

    let benar = 0, salah = 0;
    soalList.forEach(s => {
        const j = jawaban[s.nomor];
        if (s.tipe === 'pilihan_ganda') {
            if (j === s.jawaban_benar) benar++; else salah++;
        } else {
            if (j && j.trim().length > 10) benar++; else salah++;
        }
    });

    const total = soalList.length;
    const pct = Math.round((benar / total) * 100);

    const quizSection = document.getElementById('quiz-section');
    const hasilSection = document.getElementById('hasil-section');

    if (quizSection) quizSection.style.display = 'none';
    if (hasilSection) {
        hasilSection.style.display = 'block';
        hasilSection.scrollIntoView({ behavior: 'smooth' });
    }

    const hasilScore = document.getElementById('hasil-score');
    const hasilPercent = document.getElementById('hasil-percent');
    const statBenar = document.getElementById('stat-benar');
    const statSalah = document.getElementById('stat-salah');
    const statWaktu = document.getElementById('stat-waktu');
    const hasilMessage = document.getElementById('hasil-message');

    if (hasilScore) hasilScore.textContent = `${benar}/${total}`;
    if (hasilPercent) hasilPercent.textContent = `${pct}%`;
    if (statBenar) statBenar.textContent = benar;
    if (statSalah) statSalah.textContent = salah;
    if (statWaktu) statWaktu.textContent = getWaktu();

    let msg = '';
    if (pct >= 90) msg = '🌟 Luar biasa! Kamu sangat menguasai materi ini!';
    else if (pct >= 70) msg = '👍 Bagus! Tingkatkan lagi belajarmu!';
    else if (pct >= 50) msg = '💪 Cukup baik, terus berlatih ya!';
    else msg = '📚 Jangan menyerah! Pelajari lagi materinya.';
    if (hasilMessage) hasilMessage.textContent = msg;
}

function showReview() {
    const hasilSection = document.getElementById('hasil-section');
    const reviewSection = document.getElementById('review-section');

    if (hasilSection) hasilSection.style.display = 'none';
    if (reviewSection) reviewSection.style.display = 'block';

    const list = document.getElementById('review-list');
    if (!list) return;

    list.innerHTML = soalList.map((s, i) => {
        const j = jawaban[s.nomor];
        let correct = false;
        if (s.tipe === 'pilihan_ganda') correct = j === s.jawaban_benar;
        else correct = j && j.trim().length > 10;

        const cls = correct ? 'correct' : 'wrong';
        const status = correct ? 'Benar' : 'Salah';

        let ans = '';
        if (s.tipe === 'pilihan_ganda') {
            const pilih = s.pilihan.find(p => p.startsWith(j + '.')) || 'Tidak dijawab';
            const benar = s.pilihan.find(p => p.startsWith(s.jawaban_benar + '.'));
            ans = `<div class="review-ans"><strong>Jawabanmu:</strong> ${pilih}<br><strong>Benar:</strong> ${benar}</div>`;
        } else {
            ans = `<div class="review-ans"><strong>Jawabanmu:</strong> ${j || 'Tidak dijawab'}<br><strong>Referensi:</strong> ${s.jawaban_benar}</div>`;
        }

        return `<div class="review-item">
            <div class="review-item-header">
                <div class="review-num ${cls}">${i + 1}</div>
                <div class="review-status ${cls}">${status}</div>
            </div>
            <div class="review-q">${s.pertanyaan}</div>
            ${ans}
            <div class="review-exp"><strong>Penjelasan:</strong> ${s.penjelasan}</div>
        </div>`;
    }).join('');

    if (reviewSection) reviewSection.scrollIntoView({ behavior: 'smooth' });
}

function hideReview() {
    const reviewSection = document.getElementById('review-section');
    const hasilSection = document.getElementById('hasil-section');

    if (reviewSection) reviewSection.style.display = 'none';
    if (hasilSection) hasilSection.style.display = 'block';
}

function resetQuiz() {
    stopTimer();
    soalList = [];
    jawaban = {};
    flagged = {};
    currentIdx = 0;

    const formSection = document.getElementById('form-section');
    const quizSection = document.getElementById('quiz-section');
    const hasilSection = document.getElementById('hasil-section');
    const reviewSection = document.getElementById('review-section');
    const timerEl = document.getElementById('timer');

    if (formSection) formSection.style.display = 'block';
    if (quizSection) quizSection.style.display = 'none';
    if (hasilSection) hasilSection.style.display = 'none';
    if (reviewSection) reviewSection.style.display = 'none';
    if (timerEl) timerEl.textContent = '00:00';

    const soalKelas = document.getElementById('soal-kelas');
    const soalMapel = document.getElementById('soal-mapel');
    const soalTopik = document.getElementById('soal-topik');

    if (soalKelas) soalKelas.value = '';
    if (soalMapel) soalMapel.innerHTML = '<option value="">Pilih Mapel</option>';
    if (soalTopik) soalTopik.value = '';

    if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    populateKelas();
});
