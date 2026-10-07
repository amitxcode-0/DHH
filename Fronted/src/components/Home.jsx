import SongCard from "./SongCard";
import ArtistCard from "./ArtistCard";

function Home() {
    return (
        <main className="main">
            <SongCard 
            title = "Kohinoor"
            artist = "DIVINE"
            year = {2019} 
            />
            <ArtistCard />
        </main>
    );
}

export default Home;