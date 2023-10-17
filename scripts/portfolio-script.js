
// Select all the navigation links
const navLinks = document.querySelectorAll('.nav-links a');

// Add a click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

// Smooth scrolling function
function smoothScroll(e) {
    e.preventDefault();
    console.log('clicked')
    const targetId = this.getAttribute('href').substring(1);
    console.log(targetId)
    const targetElement = document.getElementById(targetId);
    const yOffset = -60; // Adjust the offset as needed to account for your fixed navbar
    
    window.scroll({
        top: targetElement.getBoundingClientRect().top + window.scrollY + yOffset,
        behavior: 'smooth',
    });
}


const cursorRing = document.querySelector('.cursor-ring');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY + window.scrollY;
    
    cursorRing.style.left = x + 'px';
    cursorRing.style.top = y + 'px';
});