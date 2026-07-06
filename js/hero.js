
// Typed role animation
const roles = ['Game Software Engineer', 'Web Developer', 'Backend Developer', 'Linux user'];
let roleIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.getElementById('typed-role');

function typeRole() {
    const current = roles[roleIndex];
    if (!deleting) {
        typedEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeRole, 2200);
            return;
        }
    } else {
        typedEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }
    setTimeout(typeRole, deleting ? 50 : 85);
}

setTimeout(typeRole, 1200);