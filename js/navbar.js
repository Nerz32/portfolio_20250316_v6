
// Navbar : Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Navbar : Active link on
function setActive(element) {
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}