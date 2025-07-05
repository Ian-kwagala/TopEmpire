    // Contact Form Logic
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    const contactLoader = document.getElementById('contactLoader');
    const contactBtnText = document.getElementById('contactBtnText');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        contactLoader.classList.remove('hidden');
        contactBtnText.classList.add('opacity-50');
        setTimeout(() => {
            contactLoader.classList.add('hidden');
            contactBtnText.classList.remove('opacity-50');
            contactSuccess.classList.remove('hidden');
            setTimeout(() => {
                contactSuccess.classList.add('hidden');
                contactForm.reset();
            }, 2000);
        }, 1200);
    });
