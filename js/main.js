
// Scroll-triggered fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Form handler (demo)
function handleSubmit(e) {
    // e.preventDefault();      // for demo
    const btn = e.target.querySelector('button[type="submit"]');
    // btn.textContent = 'Message Sent ✓';
    btn.textContent = 'Sending...';
    btn.style.background = 'rgba(56,209,239,0.2)';
    btn.style.color = 'var(--cyan)';
    btn.style.border = '1px solid var(--cyan)';
    setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.style.color = '';
        btn.style.border = '';
        e.target.reset();
    }, 5000);
}

// ===============================================================
// Add Security functions
// ===============================================================

// Disable right click on web
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

//Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
document.addEventListener("keydown", function (e) {
    const modifier = e.ctrlKey || e.metaKey; // Ctrl on Windows/Linux, Command on macOS

    if (!modifier) return;

    const key = e.key.toLowerCase();

    if (key === "s" || key === "u") {
        e.preventDefault();
    }
});