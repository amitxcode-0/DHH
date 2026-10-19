
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [songs, setSongs] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Input handle karna
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  // Form submit hone par API call
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!search.trim()) {
      setError("Please enter an artist name");
      setSongs([]);
      return;
    }

    setLoading(true);
    setError("");
    setSongs([]);

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(search)}&entity=song&limit=10`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch songs");
      }

      const data = await response.json();

      setSongs(data.results);

      if (data.results.length === 0) {
        setError("No songs found. Try another artist.");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-4 text-white sm:p-8">

      <div className="mx-auto w-full max-w-3xl">

        <h1 className="mb-6 text-3xl font-bold">
          Rapverse Search
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">

          <input
            type="text"
            placeholder="Search artist, e.g. DIVINE"
            value={search}
            onChange={handleChange}
            className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-purple-600 px-4 py-3 font-semibold hover:bg-purple-500 disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>

        </form>

        {/* Error Message */}
        {error && (
          <p className="mt-4 text-red-400">
            {error}
          </p>
        )}

        {/* Search Results */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">

          {songs.map((song) => (
            <div
              key={song.trackId}
              className="flex gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4"
            >
              <img
                src={song.artworkUrl100}
                alt={song.trackName}
                className="h-20 w-20 rounded-lg object-cover"
              />

              <div className="min-w-0">
                <h2 className="truncate font-bold">
                  {song.trackName}
                </h2>

                <p className="mt-1 text-sm text-zinc-400">
                  {song.artistName}
                </p>

                <p className="mt-1 truncate text-xs text-zinc-500">
                  {song.collectionName}
                </p>

                {song.previewUrl && (
                  <audio
                    controls
                    preload="none"
                    src={song.previewUrl}
                    className="mt-3 w-full"
                  />
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default Search;
