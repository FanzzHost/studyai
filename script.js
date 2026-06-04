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
        .replace(/^###
        .replace(/^##
        .replace(/^#
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/^>
        .replace(/^-
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
