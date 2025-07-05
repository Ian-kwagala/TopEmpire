// Dark mode functionality
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            if (event.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        });

        document.getElementById('darkModeToggle').addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });

        // Sample Ugandan artists data
        const ugandanArtists = [
            {
                id: 1,
                name: "Bobi Wine",
                genre: "Afrobeat/Reggae",
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZENzAwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyMCIgZm9udC13ZWlnaHQ9ImJvbGQiPkJvYmkgV2luZTwvdGV4dD4KPC9zdmc+",
                bio: "Robert Kyagulanyi Ssentamu, known professionally as Bobi Wine, is a Ugandan musician, politician, and activist. He's one of the most popular musicians in East Africa.",
                songs: ["Kyarenga", "Freedom", "Tuliyambala Engule"],
                followers: "2.5M",
                bookingFee: "50,000,000"
            },
            {
                id: 2,
                name: "Bebe Cool",
                genre: "Afrobeat/Dancehall",
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY2QjM1Ii8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTEwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPkJlYmUgQ29vbDwvdGV4dD4KPC9zdmc+",
                bio: "Moses Ssali, better known by his stage name Bebe Cool, is a ragga musician from Uganda. He started his career around 1997.",
                songs: ["Love You Everyday", "Wakayima", "Coco Finger"],
                followers: "1.8M",
                bookingFee: "30,000,000"
            },
            {
                id: 3,
                name: "Sheebah Karungi",
                genre: "Afropop/R&B",
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjOEIwMDAwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPlNoZWViYWg8L3RleHQ+Cjx0ZXh0IHg9IjEwMCIgeT0iMTI1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxNiIgZm9udC13ZWlnaHQ9ImJvbGQiPkthcnVuZ2k8L3RleHQ+Cjwvc3ZnPg==",
                bio: "Sheebah Karungi is a Ugandan recording artist, dancer, and actress. She's known as the Queen of Ugandan Music.",
                songs: ["Nkwatako", "Weekend", "Empeta"],
                followers: "2.1M",
                bookingFee: "25,000,000"
            },
            {
                id: 4,
                name: "Eddy Kenzo",
                genre: "Afrobeat",
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjNENBRjUwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPkVkZHkgS2Vuem88L3RleHQ+Cjwvc3ZnPg==",
                bio: "Edrisah Musuuza, known by his stage name Eddy Kenzo, is a Ugandan musician and the president of the Uganda National Musicians Federation.",
                songs: ["Sitya Loss", "Jubilation", "Tweyagale"],
                followers: "3.2M",
                bookingFee: "40,000,000"
            },
            {
                id: 5,
                name: "Irene Ntale",
               
                image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkZENzAwIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTA1IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9ImJvbGQiPklyZW5lIE50YWxlPC90ZXh0Pgo8L3N2Zz4=",
                bio: "Irene Ntale is a Ugandan musician and songwriter. She's known for her powerful vocals and soulful performances.",
                songs: ["Gyobera", "Sembera", "He Goes"],
                followers: "1.5M",
                bookingFee: "20,000,000"
            },
            {
                id: 6,
                name: "Winnie Nwagi",
                genre: "Afropop",
                image: "./pic1.jpg",
                bio: "Winnie Nwagi is a Ugandan recording artist and vocalist. She's known for her energetic performances and hit songs.",
                songs: ["Musawo", "Kwata Essimu", "Jangu"],
                followers: "1.9M",
                bookingFee: "22,000,000"
            }
        ];

        // Sample songs data
        const popularSongs = [
            { id: 1, title: "Sitya Loss", artist: "Eddy Kenzo", duration: "3:45", plays: "50M" },
            { id: 2, title: "Kyarenga", artist: "Bobi Wine", duration: "4:12", plays: "35M" },
            { id: 3, title: "Nkwatako", artist: "Sheebah Karungi", duration: "3:28", plays: "42M" },
            { id: 4, title: "Love You Everyday", artist: "Bebe Cool", duration: "3:55", plays: "28M" },
            { id: 5, title: "Gyobera", artist: "Irene Ntale", duration: "4:02", plays: "25M" },
            { id: 6, title: "Musawo", artist: "Winnie Nwagi", duration: "3:33", plays: "30M" }
        ];

        let isPlaying = false;
        let currentSongIndex = 0;
        let currentArtist = null;

        // Render artists
        function renderArtists(artists, containerId) {
            const container = document.getElementById(containerId);
            container.innerHTML = artists.map(artist => `
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer" onclick="openArtistModal(${artist.id})">
                    <img src="${artist.image}" alt="${artist.name}" class="w-full h-48 object-cover">
                    <div class="p-4">
                        <h4 class="font-bold text-xl text-gray-800 dark:text-white mb-2">${artist.name}</h4>
                        <p class="text-gray-600 dark:text-gray-300 mb-2">${artist.genre}</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">${artist.followers} followers</p>
                        <div class="flex space-x-2">
                            <button onclick="event.stopPropagation(); playArtist(${artist.id})" class="flex-1 bg-ugandan-gold text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                                <i class="fas fa-play mr-2"></i>Play
                            </button>
                            <button onclick="event.stopPropagation(); openBookingModal(${artist.id})" class="flex-1 bg-ugandan-red text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                                <i class="fas fa-calendar mr-2"></i>Book
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Render songs
        function renderSongs() {
            const container = document.getElementById('songsGrid');
            container.innerHTML = popularSongs.map((song, index) => `
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 card-hover">
                    <div class="flex items-center space-x-4">
                        <div class="w-12 h-12 bg-ugandan-gold rounded-lg flex items-center justify-center">
                            <i class="fas fa-music text-white text-2xl"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-semibold text-gray-800 dark:text-white">${song.title}</h4>
                            <p class="text-sm text-gray-600 dark:text-gray-300">${song.artist}</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">${song.duration} • ${song.plays} plays</p>
                        </div>
                        <div class="flex space-x-2">
                            <button onclick="playSong(${index})" class="p-2 bg-ugandan-gold text-white rounded-full hover:bg-yellow-600 transition-colors" title="Play">
                                <i class="fas fa-circle-play text-xl"></i>
                            </button>
                            <button onclick="downloadSong(${song.id})" class="p-2 bg-ugandan-green text-white rounded-full hover:bg-green-600 transition-colors" title="Download">
                                <i class="fas fa-circle-down text-xl"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Open artist modal
        function openArtistModal(artistId) {
            const artist = ugandanArtists.find(a => a.id === artistId);
            if (!artist) return;

            const modal = document.getElementById('artistModal');
            const content = document.getElementById('artistModalContent');
            
            content.innerHTML = `
                <div class="relative">
                    <img src="${artist.image}" alt="${artist.name}" class="w-full h-64 object-cover">
                    <button onclick="closeArtistModal()" class="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="p-6">
                    <h2 class="text-3xl font-bold text-gray-800 dark:text-white mb-2">${artist.name}</h2>
                    <p class="text-ugandan-gold font-semibold mb-4">${artist.genre}</p>
                    <p class="text-gray-600 dark:text-gray-300 mb-6">${artist.bio}</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Popular Songs</h3>
                            <ul class="space-y-2">
                                ${artist.songs.map((song, index) => `
                                    <li class="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded">
                                        <span class="text-gray-800 dark:text-white">${song}</span>
                                        <button onclick="playSong(${index})" class="text-ugandan-gold hover:text-yellow-600">
                                            <i class="fas fa-play"></i>
                                        </button>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-3">Stats</h3>
                            <div class="space-y-2">
                                <p class="text-gray-600 dark:text-gray-300">Followers: <span class="font-semibold">${artist.followers}</span></p>
                                <p class="text-gray-600 dark:text-gray-300">Booking Fee: <span class="font-semibold">UGX ${artist.bookingFee}</span></p>
                                <p class="text-gray-600 dark:text-gray-300">Genre: <span class="font-semibold">${artist.genre}</span></p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex space-x-4">
                        <button onclick="playArtist(${artist.id})" class="flex-1 bg-ugandan-gold text-white py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                            <i class="fas fa-play mr-2"></i>Play All
                        </button>
                        <button onclick="openBookingModal(${artist.id})" class="flex-1 bg-ugandan-red text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                            <i class="fas fa-calendar mr-2"></i>Book Artist
                        </button>
                    </div>
                </div>
            `;
            
            modal.classList.remove('hidden');
        }

        // Close artist modal
        function closeArtistModal() {
            document.getElementById('artistModal').classList.add('hidden');
        }

        // Open booking modal
        function openBookingModal(artistId) {
            currentArtist = ugandanArtists.find(a => a.id === artistId);
            document.getElementById('bookingModal').classList.remove('hidden');
            closeArtistModal();
        }

        // Close booking modal
        function closeBookingModal() {
            document.getElementById('bookingModal').classList.add('hidden');
        }

        // Play artist
        function playArtist(artistId) {
            const artist = ugandanArtists.find(a => a.id === artistId);
            if (artist && artist.songs.length > 0) {
                const songIndex = popularSongs.findIndex(song => song.artist === artist.name);
                if (songIndex !== -1) {
                    playSong(songIndex);
                }
            }
        }

        // Play song
        function playSong(index) {
            currentSongIndex = index;
            const song = popularSongs[index];
            
            // Update player UI
            document.getElementById('currentTrackTitle').textContent = song.title;
            document.getElementById('currentTrackArtist').textContent = song.artist;
            
            // Show player
            const player = document.getElementById('musicPlayer');
            player.classList.remove('translate-y-full');
            
            // Start playing
            isPlaying = true;
            updatePlayButton();
            simulateProgress();
        }

        // Toggle play/pause
        function togglePlayPause() {
            isPlaying = !isPlaying;
            updatePlayButton();
            if (isPlaying) {
                simulateProgress();
            }
        }

        // Update play button
        function updatePlayButton() {
            const btn = document.getElementById('playPauseBtn');
            const icon = btn.querySelector('i');
            if (isPlaying) {
                icon.className = 'fas fa-pause';
                btn.classList.add('pulse-animation');
            } else {
                icon.className = 'fas fa-play';
                btn.classList.remove('pulse-animation');
            }
        }

        // Simulate progress
        function simulateProgress() {
            if (!isPlaying) return;
            
            const progressBar = document.getElementById('progressBar');
            let progress = 0;
            
            const interval = setInterval(() => {
                if (!isPlaying) {
                    clearInterval(interval);
                    return;
                }
                
                progress += 1;
                progressBar.style.width = `${progress}%`;
                
                if (progress >= 100) {
                    clearInterval(interval);
                    nextSong();
                }
            }, 100);
        }

        // Next song
        function nextSong() {
            currentSongIndex = (currentSongIndex + 1) % popularSongs.length;
            playSong(currentSongIndex);
        }

        // Previous song
        function prevSong() {
            currentSongIndex = currentSongIndex > 0 ? currentSongIndex - 1 : popularSongs.length - 1;
            playSong(currentSongIndex);
        }

        // Download song
        function downloadSong(songId) {
            const song = popularSongs.find(s => s.id === songId);
            if (song) {
                // Simulate download
                const link = document.createElement('a');
                link.href = `data:audio/mp3;base64,${btoa('Mock audio data for ' + song.title)}`;
                link.download = `${song.artist} - ${song.title}.mp3`;
                link.click();
                
                // Show success message
                showNotification(`"${song.title}" by ${song.artist} downloaded successfully!`, 'success');
            }
        }

        // Search functionality
        function handleSearch() {
            const query = document.getElementById('searchInput').value.toLowerCase();
            const searchResults = document.getElementById('searchResults');
            const searchGrid = document.getElementById('searchGrid');
            
            if (query.trim() === '') {
                searchResults.classList.add('hidden');
                return;
            }
            
            const filteredArtists = ugandanArtists.filter(artist => 
                artist.name.toLowerCase().includes(query) || 
                artist.genre.toLowerCase().includes(query)
            );
            
            const filteredSongs = popularSongs.filter(song =>
                song.title.toLowerCase().includes(query) ||
                song.artist.toLowerCase().includes(query)
            );
            
            if (filteredArtists.length > 0 || filteredSongs.length > 0) {
                searchResults.classList.remove('hidden');
                
                let resultsHTML = '';
                
                // Add filtered artists
                filteredArtists.forEach(artist => {
                    resultsHTML += `
                        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer" onclick="openArtistModal(${artist.id})">
                            <img src="${artist.image}" alt="${artist.name}" class="w-full h-48 object-cover">
                            <div class="p-4">
                                <h4 class="font-bold text-xl text-gray-800 dark:text-white mb-2">${artist.name}</h4>
                                <p class="text-gray-600 dark:text-gray-300 mb-2">${artist.genre}</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">${artist.followers} followers</p>
                                <div class="flex space-x-2">
                                    <button onclick="event.stopPropagation(); playArtist(${artist.id})" class="flex-1 bg-ugandan-gold text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors">
                                        <i class="fas fa-play mr-2"></i>Play
                                    </button>
                                    <button onclick="event.stopPropagation(); openBookingModal(${artist.id})" class="flex-1 bg-ugandan-red text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                                        <i class="fas fa-calendar mr-2"></i>Book
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                });
                
                searchGrid.innerHTML = resultsHTML;
            } else {
                searchResults.classList.add('hidden');
            }
        }

        // Show notification
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
                type === 'success' ? 'bg-green-500' : 
                type === 'error' ? 'bg-red-500' : 'bg-blue-500'
            } text-white slide-in`;
            notification.textContent = message;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Event listeners
        document.getElementById('searchInput').addEventListener('input', handleSearch);
        document.getElementById('playPauseBtn').addEventListener('click', togglePlayPause);
        document.getElementById('nextBtn').addEventListener('click', nextSong);
        document.getElementById('prevBtn').addEventListener('click', prevSong);
        document.getElementById('closePlayer').addEventListener('click', () => {
            document.getElementById('musicPlayer').classList.add('translate-y-full');
            isPlaying = false;
            updatePlayButton();
        });
        document.getElementById('closeBookingModal').addEventListener('click', closeBookingModal);

        // Booking form submission
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification(`Booking request submitted for ${currentArtist ? currentArtist.name : 'artist'}!`, 'success');
            closeBookingModal();
            e.target.reset();
        });

        // Close modals on outside click
        document.getElementById('artistModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeArtistModal();
        });
        document.getElementById('bookingModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeBookingModal();
        });

        // Initialize the app
        renderArtists(ugandanArtists, 'artistsGrid');
        renderSongs();


                // ...existing code...
        const darkModeToggle = document.getElementById('darkModeToggle');
        const themeIcon = document.getElementById('themeIcon');
        
        function updateThemeIcon() {
            if (document.documentElement.classList.contains('dark')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
        darkModeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            updateThemeIcon();
        });
        updateThemeIcon();
        // ...existing code...