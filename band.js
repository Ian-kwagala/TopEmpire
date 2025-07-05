// Book Modal Logic
const bookBtn = document.getElementById('bookBandBtn');
const bookModalBg = document.getElementById('bookModalBg');
const closeBookModal = document.getElementById('closeBookModal');
const bookForm = document.getElementById('bookForm');
const bookSuccess = document.getElementById('bookSuccess');
const bookLoader = document.getElementById('bookLoader');
const bookBtnText = document.getElementById('bookBtnText');

bookBtn.addEventListener('click', () => {
    bookModalBg.classList.remove('hidden');
    bookSuccess.classList.add('hidden');
    bookForm.reset();
    bookLoader.classList.add('hidden');
    bookBtnText.classList.remove('opacity-50');
});
closeBookModal.addEventListener('click', () => {
    bookModalBg.classList.add('hidden');
});
bookModalBg.addEventListener('click', (e) => {
    if (e.target === bookModalBg || e.target.id === "modalBlurOverlay") bookModalBg.classList.add('hidden');
});
bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Show loader
    bookLoader.classList.remove('hidden');
    bookBtnText.classList.add('opacity-50');
    // Simulate booking logic (could send to backend here)
    setTimeout(() => {
        bookLoader.classList.add('hidden');
        bookBtnText.classList.remove('opacity-50');
        bookSuccess.classList.remove('hidden');
        setTimeout(() => {
            bookModalBg.classList.add('hidden');
        }, 1800);
    }, 1200);
});
