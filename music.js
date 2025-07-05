// --- Song Data Extraction Helper ---
function getSongDataFromCard(card) {
    return {
        img: card.querySelector('img').src,
        title: card.querySelector('.song-card-title').textContent,
        artist: card.querySelector('.song-card-artist').textContent,
        duration: card.querySelector('.song-card-duration').textContent
    };
}

// --- Player State ---
let currentSongIndex = 0;
let currentTab = 'tab1';
let isPlaying = true;
let likedSongs = {};
let songCards = [];

function updateSongCards() {
    songCards = Array.from(document.querySelectorAll(`#${currentTab} .song-card`));
}

// --- Show Loader ---
function showPlayerLoader(show) {
    document.getElementById('playerLoader').classList.toggle('hidden', !show);
}

// --- Show/Hide Player ---
function showPlayerBar(show) {
    document.getElementById('musicPlayerBar').classList.toggle('hidden', !show);
}

// --- Update Player UI ---
function updatePlayerUI(songData) {
    document.getElementById('playerSongImg').src = songData.img;
    document.getElementById('playerSongTitle').textContent = songData.title;
    document.getElementById('playerSongArtist').textContent = songData.artist;
    // Like state
    const likeBtn = document.getElementById('playerLike');
    if (likedSongs[songData.title]) {
        likeBtn.innerHTML = '<i class="fa-solid fa-heart" style="color:#22c55e"></i>';
    } else {
        likeBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
}

// --- Play Song ---
function playSongAt(index) {
    updateSongCards();
    if (songCards.length === 0) return;
    if (index < 0) index = songCards.length - 1;
    if (index >= songCards.length) index = 0;
    currentSongIndex = index;
    const songCard = songCards[currentSongIndex];
    const songData = getSongDataFromCard(songCard);

    showPlayerBar(true);
    showPlayerLoader(true);
    setTimeout(() => {
        showPlayerLoader(false);
        updatePlayerUI(songData);
        isPlaying = true;
        document.getElementById('playerPlayPause').innerHTML = '<i class="fa-solid fa-pause"></i>';
    }, 900); // Loader duration
}

// --- Tab Switching (update songCards) ---
document.addEventListener('DOMContentLoaded', () => {
    // Tab button logic
    document.querySelectorAll('.music-tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.music-tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.getAttribute('data-tab');
            document.querySelectorAll('.music-tab-content').forEach(content => {
                content.classList.add('hidden');
            });
            document.getElementById(currentTab).classList.remove('hidden');
            updateSongCards();
        });
    });
    // Set first tab active and visible
    const firstBtn = document.querySelector('.music-tab-btn');
    if (firstBtn) firstBtn.classList.add('active');
    document.getElementById('tab1').classList.remove('hidden');
    updateSongCards();
});

// --- Play Button on Song Cards ---
document.addEventListener('click', function(e) {
    if (e.target.closest('.song-card-play-btn')) {
        const card = e.target.closest('.song-card');
        const index = songCards.indexOf(card);
        playSongAt(index);
    }
});

// --- Player Controls ---
document.getElementById('playerPlayPause').onclick = function() {
    isPlaying = !isPlaying;
    this.innerHTML = isPlaying
        ? '<i class="fa-solid fa-pause"></i>'
        : '<i class="fa-solid fa-play"></i>';
};
document.getElementById('playerPrev').onclick = function() {
    playSongAt(currentSongIndex - 1);
};
document.getElementById('playerNext').onclick = function() {
    playSongAt(currentSongIndex + 1);
};
document.getElementById('playerLike').onclick = function() {
    const songTitle = document.getElementById('playerSongTitle').textContent;
    likedSongs[songTitle] = !likedSongs[songTitle];
    updatePlayerUI(getSongDataFromCard(songCards[currentSongIndex]));
};

// --- Download Button in Player ---
document.getElementById('playerDownload').onclick = function() {
    showPlayerLoader(true);
    setTimeout(() => {
        showPlayerLoader(false);
        // Show notification
        const notif = document.getElementById('downloadNotification');
        notif.classList.remove('hidden');
        setTimeout(() => notif.classList.add('hidden'), 1800);
    }, 900);
};

// --- Download Button on Song Card (works for every card) ---
document.addEventListener('click', function(e) {
    if (e.target.closest('.song-card-download-btn')) {
        // Show notification (no loader for card, but you can add if you want)
        const notif = document.getElementById('downloadNotification');
        notif.classList.remove('hidden');
        setTimeout(() => notif.classList.add('hidden'), 1800);
        // Let the download proceed for <a download>
    }
});
