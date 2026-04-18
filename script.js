// 1. Dark/Light Mode Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check if user has a saved preference in their browser
const currentTheme = localStorage.getItem('portfolio_theme');

// If saved theme is light, apply it immediately on load
if (currentTheme === 'light') {
    body.classList.add('light-mode');
    themeIcon.textContent = '🌙'; // Change icon to Moon
}

// Listen for clicks on the toggle button
themeToggleBtn.addEventListener('click', () => {
    // Toggle the .light-mode class on the body
    body.classList.toggle('light-mode');

    // Update the icon and save preference
    if (body.classList.contains('light-mode')) {
        themeIcon.textContent = '🌙'; // Now in light mode, show moon to switch back
        localStorage.setItem('portfolio_theme', 'light');
    } else {
        themeIcon.textContent = '☀️'; // Now in dark mode, show sun to switch to light
        localStorage.setItem('portfolio_theme', 'dark');
    }
});

// 2. Scroll Animation Observer
// This watches elements and adds the 'visible' class when they enter the viewport
const observerOptions = {
    threshold: 0.15, // Triggers when 15% of the element is visible
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before the element hits the bottom
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add visible class to trigger CSS transition
            entry.target.classList.add('visible');

            // Optional: Stop observing once it's visible so it doesn't animate out and in again
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Grab all elements we want to animate and observe them
const animatedElements = document.querySelectorAll('.slide-up, .stagger-up');
animatedElements.forEach((el) => scrollObserver.observe(el));
// 3. Mobile Hamburger Menu Logic
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu li a');

// Open/Close menu when clicking the hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu automatically when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});
