// Theme toggle functionality
const toggleBtn = document.getElementById('themeToggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Check for saved theme preference or use the OS preference
if (localStorage.getItem('theme') === 'light' || 
    (!localStorage.getItem('theme') && !prefersDarkScheme.matches)) {
    document.body.classList.add('light-theme');
    toggleBtn.textContent = '🌙';
} else {
    toggleBtn.textContent = '☀️';
}

// Toggle theme when button is clicked
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    // Update button icon and save preference
    if (document.body.classList.contains('light-theme')) {
        toggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        toggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});
// © The PAV Group
// &
// Pawan Yadav @ github.com/PAI-Of
// PAI-Of means Powered Intelligence Official