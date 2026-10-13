export default function LibraryControls({
  query,
  activeGenre,
  genres,
  onQueryChange,
  onGenreChange,
  onSearchKeyDown,
}) {
  return (
    <section className="library-controls" aria-label="Library filters">
      <label className="search-field">
        <span className="sr-only">Search the library</span>
        <span aria-hidden="true">⌕</span>
        <input
          type="search"
          value={query}
          onChange={onQueryChange}
          onKeyDown={onSearchKeyDown}
          placeholder="Search artist, track, or album"
        />
      </label>

      <label className="genre-select">
        <span className="sr-only">Choose a genre</span>
        <select value={activeGenre} onChange={onGenreChange}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </label>
    </section>
  )
}