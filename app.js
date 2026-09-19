document.addEventListener('DOMContentLoaded', () => {
    // 1. Logika Splash Screen
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            setTimeout(() => splash.remove(), 500);
        }
    }, 1500); // Tampil selama 1.5 detik
});

// 2. Fungsi Toast Notification (Notifikasi)
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 3. Logika Bottom Navigation
function switchNav(activeId) {
    const navs = ['home', 'search', 'library'];
    
    navs.forEach(nav => {
        const el = document.getElementById('nav-' + nav);
        if (nav === activeId) {
            // Class aktif: Hijau Neon
            el.className = 'nav-item group relative flex flex-col items-center justify-center cursor-pointer select-none py-1.5 px-3 rounded-2xl bg-[#00FF41]/10 text-[#00FF41] font-bold transition-all duration-300 shadow-[0_0_10px_rgba(0,255,65,0.2)] scale-105 border border-[#00FF41]/40';
        } else {
            // Class pasif: Transparan abu-abu
            el.className = 'nav-item group relative flex flex-col items-center justify-center cursor-pointer select-none py-1.5 px-3 rounded-2xl text-white/40 hover:text-[#00FF41]/70 transition-all duration-300 border border-transparent';
        }
    });
}

// 4. Animasi Equalizer (Bar Musik Hijau Neon)
// Gunakan variabel ini di dalam fungsi render API lagu kamu agar icon play berubah jadi bar animasi saat lagu diputar.
const equalizerHTML = `
    <div class="flex items-end justify-center gap-[2px] w-4 h-4 pb-0.5 mx-auto">
        <span class="w-[2px] bg-[#00FF41] rounded-full animate-eq-1 shadow-[0_0_5px_#00FF41]"></span>
        <span class="w-[2px] bg-[#00FF41] rounded-full animate-eq-2 shadow-[0_0_5px_#00FF41]"></span>
        <span class="w-[2px] bg-[#00FF41] rounded-full animate-eq-3 shadow-[0_0_5px_#00FF41]"></span>
    </div>
`;

// 5. Integrasi API (TEMPATKAN KODE API KAMU DI SINI)
// Ini adalah mock/contoh fungsi jika lagu diklik
function playMusic(title, artist) {
    showToast(`Memutar: ${title} - xaerisoftMussic`);
    
    // Ganti default artist metadata sistem dengan xaerisoft
    let currentTitle = title || 'Lagu';
    let currentArtist = artist || 'xaerisoftMussic';
    
    // ==========================================
    // PASTE KODE API FETCH / AUDIO PLAYER KAMU
    // (Misalnya: fetch('api.domain.com/play')...)
    // ==========================================
}

// 6. Logika PWA (Offline / Install Mode)
window.addEventListener('appinstalled', (evt) => {
    showToast('xaerisoftMussic berhasil diinstall!');
});

function pwaWarning() {
    return '<p class="text-white/60 text-xs leading-relaxed">Fitur Mode Offline khusus untuk aplikasi PWA. Silakan install xaerisoftMussic ke layar utama terlebih dahulu.</p>';
}

function installPWA() {
    showToast('Menginstall xaerisoftMussic...');
    // Logika instalasi PWA kamu di sini
}

// 7. Logika Share (Untuk album.js / artist.js)
function shareTrack(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title + ' - xaerisoftMussic',
            text: 'Dengarkan lagu keren ini di xaerisoftMussic!',
            url: url
        }).catch(console.error);
    } else {
        showToast('Fitur share tidak didukung di browser ini.');
    }
}
