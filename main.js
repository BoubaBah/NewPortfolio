document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.card').forEach((card) => {
    observer.observe(card);
});

document.addEventListener('DOMContentLoaded', function() {
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-width') || '90%';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.progress-fill').forEach((progress) => {
        progress.style.width = '0';
        progressObserver.observe(progress);
    });

    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
    
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Fermer le menu quand un lien est cliqué
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navList.classList.remove('active');
        });
    });
});

// Create light beams
function createLightBeams() {
    const background = document.querySelector('.animated-background');
    const numberOfBeams = 20;

    for (let i = 0; i < numberOfBeams; i++) {
        const beam = document.createElement('div');
        beam.className = 'light-beam';
        
        // Random properties for each beam
        const duration = 3 + Math.random() * 4; // Random duration between 3-7s
        const delay = Math.random() * 5; // Random delay between 0-5s
        const left = Math.random() * 100; // Random position
        const height = 100 + Math.random() * 200; // Random height between 100-300px
        
        beam.style.cssText = `
            left: ${left}%;
            height: ${height}px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
        `;
        
        background.appendChild(beam);
    }
}

// Call the function when the page loads
createLightBeams();