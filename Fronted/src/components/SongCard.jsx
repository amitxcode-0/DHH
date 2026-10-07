function SongCard({title,artist,year="unknown"}){
    return(
        <div className="song-card">
            <p>{title}</p>
            <p>{artist}</p>
            <p>{year}</p>
        </div>
    );
};

export default SongCard;