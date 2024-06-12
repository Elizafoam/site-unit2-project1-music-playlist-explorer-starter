const playlistCards = document.querySelector('.playlist-cards');
const closeModal = document.getElementById("close");
const modal = document.querySelector(".modal-overlay");
const shuffleButton = document.querySelector(".shuffle");


function createPlaylistCards(){
    for (let i = 0; i < data.playlists.length; i++){
        const container = document.querySelector(".featured-playlist");
        addPlaylist(data.playlists[i]["playlist_name"], data.playlists[i]["playlist_creator"], data.playlists[i]["playlist_art"], data.playlists[i]["likeCount"], i);
    }
}

function addPlaylist(name, creator, art, likes, id){
    const container = document.createElement('div');
    const imageElement = document.createElement('img');
    const titleElement = document.createElement('h3');
    const creatorElement = document.createElement('p');
    const likesElement = document.createElement('button');

    container.className = "playlist";
    container.id = `${id}`;
    imageElement.className = "playlist-image";
    likesElement.className = "like-count";
    
    imageElement.src = art;
    titleElement.textContent = name;
    creatorElement.textContent = creator;
    likesElement.textContent = `♡ ${likes}`;

    container.appendChild(imageElement);
    container.appendChild(titleElement);
    container.appendChild(creatorElement);
    container.appendChild(likesElement);

    playlistCards.appendChild(container);
}

function createSongList(){
    const playlistsElements = document.querySelectorAll(".playlist");

    playlistsElements.forEach((playlist) => {
        playlist.addEventListener("click", (e) => {
            const image = document.querySelector(".modal-image");
            const title = document.querySelector(".modal-playlist-title");
            const creator = document.querySelector(".modal-creator");
            
            image.src = playlist.childNodes[0].src;
            title.textContent = playlist.childNodes[1].textContent;
            title.id = playlist.id;
            creator.textContent = playlist.childNodes[2].textContent;

            addSongs(playlist.id);

            modal.style.visibility = "initial";
        })
    });
}

function addSongs(id){
    data.playlists[id]["songs"].forEach((song) => {
        createSongCard(song["title"], song["artist"], song["album"], song["cover_art"], song["duration"], song["songID"]);
    })

}

function createSongCard(title, artist, album, art, duration, id){
    const songList = document.querySelector(".modal-song-list");

    const container = document.createElement("div");
    const infoContainer = document.createElement("div");
    const imageElement = document.createElement('img');
    const titleElement = document.createElement('h4');
    const creatorElement = document.createElement('h5');
    const albumElement = document.createElement('p');
    const timeElement = document.createElement('p');

    container.className = "modal-song";
    imageElement.className = "song-image";
    infoContainer.className = "modal-song-info";
    timeElement.className = "modal-song-time";
    titleElement.className  = "modal-song-title";
    creatorElement.className = "modal-artist";
    albumElement.className = "modal-album";
    container.id = `${id}`;
    
    imageElement.src = art;
    titleElement.textContent = title;
    creatorElement.textContent = artist;
    albumElement.textContent = album;
    timeElement.textContent = duration;

    container.appendChild(imageElement);

    infoContainer.appendChild(titleElement);
    infoContainer.appendChild(creatorElement);
    infoContainer.appendChild(albumElement);
    
    container.appendChild(infoContainer);
    container.appendChild(timeElement);
    songList.append(container);
}

closeModal.addEventListener("click", (e) => {
    modal.style.visibility = "hidden";
})

createPlaylistCards();
createSongList();

const likeButtons = document.querySelectorAll(".like-count");
likeButtons.forEach((button) => {
    let prevLike = "♡ 0";

    button.addEventListener("click", (e) => {
        if (prevLike == "♡ 0"){
            button.textContent = "❤️ 1"
        }
        else {
            button.textContent = "♡ 0"
        }
        prevLike = button.textContent;
    });

    button.addEventListener("mouseover", (e) => {
        button.textContent = "-`♡´-";
    });

    button.addEventListener("mouseout", (e) => {
        button.textContent = prevLike;
    });
});


shuffleButton.addEventListener("click", (e) => {
    const songList = document.querySelector(".modal-song-list");
    const playlistID = document.querySelector(".modal-playlist-title").id;

    const set = new Set();
    songList.innerHTML = "";
    let size = data.playlists[playlistID]["songs"].length;


    while(set.size < size) {
        set.add(Math.floor(Math.random() * size))
    }

    for (let s of set){
        createSongCard(data.playlists[playlistID]["songs"][s]["title"], data.playlists[playlistID]["songs"][s]["artist"], data.playlists[playlistID]["songs"][s]["album"], data.playlists[playlistID]["songs"][s]["cover_art"], data.playlists[playlistID]["songs"][s]["duration"], data.playlists[playlistID]["songs"][s]["songID"]);
    }
});