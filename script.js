const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');

const songs = [
    {
        title: 'Tere Batoon Me',
        artist: 'Raghav',
        src: 'tere baaton me.mp4'
    },
    {
        title: 'Ve Kamleya',
        artist: 'Arjith Singh',
        src: 've kamliya.mp4'
    },
    {
        title: 'Banjara',
        artist: 'Arjith Singh',
        src: 'banjara.mpeg'
    },
    {
        title: 'Tu Aake Dekh le',
        artist: 'King',
        src: 'tu aake dekh le.mpeg'
    },
    {
        title: 'Saware',
        artist: 'Arjith Singh',
        src: 'saware.mpeg'
    },
    {
        title: 'Tumse Hi',
        artist: 'Pritam',
        src: 'tumse hi.mpeg'
    },
    {
        title: 'Janam Janam',
        artist: 'Pritam',
        src: 'janam janam.mpeg'
    },
    {
        title: 'Tum Hi Ho',
        artist: 'Unknown',
        src: 'tum hi ho.mpeg'
    },
    {
        title: 'Aja We Mahiya We',
        artist: 'Imran Khan',
        src: 'aja we mahi we.mpeg'
    },
    {
        title: 'Kuch Is Tarah',
        artist: 'Atif Aslam',
        src: 'kuch is tarah.mpeg'
    },
    {
        title: 'Tere Nazar Ne Ye Kia Krdya',
        artist: 'Atif Aslam',
        src: 'tere nazar ne ye kia krdya.mpeg'
    }
];

let songIndex = 0;

function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.textContent = 'Pause';
    playBtn.classList.add('playing');
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = 'Play';
    playBtn.classList.remove('playing');
}

playBtn.addEventListener('click', () => {
    const isPlaying = playBtn.classList.contains('playing');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
});

nextBtn.addEventListener('click', () => {
    songIndex++;
    if (songIndex >= songs.length) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
});

// Load the first song initially
loadSong(songs[songIndex]);
