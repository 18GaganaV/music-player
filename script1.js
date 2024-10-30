document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    const songTitle = document.getElementById('song-title');
    const artist = document.getElementById('artist');

    let currentSongIndex = 0;
    const songs = [
        {
            src: 'music5.mp3',
            title: 'Song 1 Title',
            artist: 'Artist 1'
        },
        {
            src: 'music3.mp3',
            title: 'Song 2 Title',
            artist: 'Artist 2'
        },
        {
            src: 'music1.mp3',
            title: 'Song 3 Title',
            artist: 'Artist 3'
        },
    ];

    function loadSong(index) {
        const song = songs[index];
        audio.src = song.src;
        songTitle.innerText = song.title;
        artist.innerText = song.artist;
    }

    playBtn.addEventListener('click', () => {
        audio.play();
    });

    pauseBtn.addEventListener('click', () => {
        audio.pause();
    });

    nextBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
    });

    prevBtn.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        audio.play();
    });

    loadSong(currentSongIndex);
});
