document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('is-active');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const typewriterElement = document.getElementById('typewriter-title');
    const wordsToType = ["Debby", "Debby Rojwa Nurshabrina"];

    let currentWordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
        if (!typewriterElement) return;

        const currentWord = wordsToType[currentWordIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 75;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000;
            typewriterElement.classList.add('typing');
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
            typeSpeed = 500;
            typewriterElement.classList.remove('typing');
        } else {
            typewriterElement.classList.remove('typing');
        }

        setTimeout(type, typeSpeed);
    }

    if (typewriterElement) {
        typewriterElement.textContent = '';
        setTimeout(type, 1000);
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .fade-in-up, .text-reveal').forEach(el => {
        revealObserver.observe(el);
    });

    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const container = entry.target;
            const children = container.querySelectorAll('.stagger-item');

            if (entry.isIntersecting) {
                children.forEach((child, index) => {
                    setTimeout(() => {
                        if (container.classList.contains('in-view')) {
                            child.classList.add('visible');
                        }
                    }, index * 100);
                });
                container.classList.add('in-view');
            } else {
                children.forEach(child => child.classList.remove('visible'));
                container.classList.remove('in-view');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stagger-container').forEach(el => {
        staggerObserver.observe(el);
    });

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const bar = entry.target;
            const value = bar.getAttribute('data-width');

            if (entry.isIntersecting) {
                bar.style.width = value;
            } else {
                bar.style.width = '0';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.progress').forEach(el => {
        const width = el.style.width || '0';
        if (width !== '0') el.setAttribute('data-width', width);
        el.style.width = '0';
        progressObserver.observe(el);
    });

    const faders = document.querySelectorAll('.fader');

    faders.forEach(fader => {
        const images = fader.querySelectorAll('.fader-img');

        if (images.length > 1) {
            let currentIndex = 0;

            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 2000);
        } else if (images.length === 1) {
            images[0].classList.add('active');
        }
    });

    const orgCards = document.querySelectorAll('.org-card-wrapper');
    const orgGrid = document.querySelector('.org-grid');

    if (orgCards.length > 0 && orgGrid) {
        orgCards.forEach(card => {
            const overlay = card.querySelector('.org-detail-overlay');

            card.addEventListener('mouseenter', () => {
                if (!overlay) return;

                overlay.classList.remove('pop-left', 'pop-right', 'pop-center');
                card.classList.remove('shift-left');
                overlay.style.left = '';
                overlay.style.width = '';
                overlay.style.top = '';
                overlay.style.bottom = '';
                overlay.style.transform = '';

                if (window.innerWidth <= 768) {
                    overlay.style.left = '0';
                    overlay.style.width = '100%';
                    overlay.style.top = '0';
                    overlay.style.bottom = '0';
                    return;
                }

                const gridRect = orgGrid.getBoundingClientRect();
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + (cardRect.width / 2);
                const relativeX = cardCenter - gridRect.left;
                const gridWidth = gridRect.width;
                const positionPercent = (relativeX / gridWidth) * 100;

                if (positionPercent < 33) {
                    overlay.classList.add('pop-right');
                } else if (positionPercent > 66) {
                    overlay.classList.add('pop-left');
                } else {
                    overlay.classList.add('pop-center');
                }
            });

            card.addEventListener('mouseleave', () => {
                if (overlay) {
                }
            });
        });
    }

});
