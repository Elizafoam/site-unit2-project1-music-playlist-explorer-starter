const playlistCards = document.querySelector('.playlist-cards');

function createPlaylistCards(){
    for (let i = 0; i < data.playlists.length; i++){
        
        console.log(data.playlists[i]["playlist_name"])
        createPlaylist(data.playlists[i]["playlist_name"], data.playlists[i]["playlist_creator"], data.playlists[i]["playlist_art"], data.playlists[i]["likeCount"])
    }
}

function createPlaylist(name, creator, art, likes){
    const container = document.createElement('div');
    const imageElement = document.createElement('img');
    const titleElement = document.createElement('h3');
    const creatorElement = document.createElement('p');
    const likesElement = document.createElement('div');

    container.className = "playlist";
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

createPlaylistCards();