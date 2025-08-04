// Project Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const shouldShow = filter === 'all' || category === filter;
            card.style.display = shouldShow ? 'block' : 'none';
            card.style.animation = shouldShow ? 'fadeInUp 0.6s ease forwards' : 'none';
        });
    });
});

// Smooth Scroll for Navigation
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Fade-in Animation on Scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('section').forEach(section => observer.observe(section));

// Hero Stats Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const plus = stat.textContent.includes('+') ? '+' : '';

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + plus;
        }, 40);
    });
}

window.addEventListener('load', () => setTimeout(animateStats, 1000));

// Project Card Hover Effect
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing Effect for Hero Subtitle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    element.style.borderRight = '2px solid #fca311';

    (function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i++);
            setTimeout(type, speed);
        } else {
            element.style.borderRight = 'none';
        }
    })();
}

window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        setTimeout(() => typeWriter(subtitle, 'Full-Stack Developer', 150), 500);
    }
});

// Particle Background for Hero
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const particlesCount = 20;
    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(${Math.random() > 0.5 ? '252, 163, 17' : '94, 96, 206'}, 0.4);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite alternate;
        `;
        hero.appendChild(particle);
    }
}

const floatKeyframes = document.createElement('style');
floatKeyframes.textContent = `
    @keyframes float {
        0% { transform: translateY(0); opacity: 0.4; }
        100% { transform: translateY(-20px); opacity: 0.8; }
    }
`;
document.head.appendChild(floatKeyframes);

window.addEventListener('load', createParticles);

// Mobile Menu Toggle
function createMobileMenu() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    if (!nav || !navLinks) return;

    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.classList.add('mobile-menu-btn');
    nav.appendChild(mobileMenuBtn);

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('mobile-active');
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .mobile-menu-btn {
                display: block;
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0.5rem;
            }
            .nav-links {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: #0b0c2a;
                flex-direction: column;
                padding: 1rem 0;
                transform: translateY(-100%);
                opacity: 0;
                visibility: hidden;
                transition: all 0.3s ease;
                display: flex !important;
            }
            .nav-links.mobile-active {
                transform: translateY(0);
                opacity: 1;
                visibility: visible;
            }
            .nav-links li {
                margin: 0.5rem 0;
            }
        }
    `;
    document.head.appendChild(style);
}

createMobileMenu();
