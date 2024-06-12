let i = Math.floor(Math.random() * data.playlists.length);

function generateFeatured(){
    const container = document.querySelector(".featured-playlist");
    const imageElement = document.createElement('img');
    const titleElement = document.createElement('h3');
    const creatorElement = document.createElement('p');

    imageElement.className = "playlist-image";
    
    imageElement.src = data.playlists[i]["playlist_art"];
    titleElement.textContent = data.playlists[i]["playlist_name"];
    creatorElement.textContent = data.playlists[i]["playlist_creator"];

    container.appendChild(imageElement);
    container.appendChild(titleElement);
    container.appendChild(creatorElement);
}

function addSongs(id){
    data.playlists[id]["songs"].forEach((song) => {
        createSongCard(song["title"], song["artist"], song["album"], song["cover_art"], song["duration"], song["songID"]);
    })

}

function createSongCard(title, artist, album, art, duration, id){
    const songList = document.querySelector(".featured-songs");

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

generateFeatured();
addSongs(i);