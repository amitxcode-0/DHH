export default function TrackCard({
  track,
  isFavorite = false,
  isPlaying = false,
  isSelected = false,
  onPlay,
  onToggleFavorite,
  onSelect,
  onHover,
}) {
  const initials = track.title
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)

  return (
    <article
      className={`track-card ${isSelected ? 'selected' : ''}`}
      onMouseEnter={() => onHover(track.title)}
    >
      <div className="album-art" style={{ backgroundColor: track.color }} aria-hidden="true">
        {initials}
      </div>

      <div className="track-copy">
        <div className="track-title-row">
          <h3>{track.title}</h3>
          {track.explicit && <span className="explicit-badge">E</span>}
        </div>
        <p>{track.artist} · {track.album}</p>
        <span className="genre-chip">{track.genre}</span>
      </div>

      <span className="duration">{track.duration}</span>

      <div className="track-actions">
        <button
          className="icon-button"
          type="button"
          aria-label={isFavorite ? `Remove ${track.title} from favorites` : `Add ${track.title} to favorites`}
          aria-pressed={isFavorite}
          onClick={() => onToggleFavorite(track.id)}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
        <button
          className="play-button"
          type="button"
          onClick={() => onPlay(track.id)}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button className="text-button select-button" type="button" onClick={() => onSelect(track.id)}>
          Details
        </button>
      </div>
    </article>
  )
}