export default function TrackDetails({ track, onClose }) {
  if (!track) {
    return null
  }

  return (
    <aside className="track-details" aria-label="Selected track details">
      <div className="details-heading">
        <p className="eyebrow">Now exploring</p>
        <button className="icon-button" type="button" onClick={onClose} aria-label="Close details">
          ×
        </button>
      </div>
      <h2>{track.title}</h2>
      <p className="detail-artist">{track.artist}</p>
      <p>{track.note || 'No listener note has been added yet.'}</p>
      <dl>
        <div><dt>Album</dt><dd>{track.album}</dd></div>
        <div><dt>Genre</dt><dd>{track.genre}</dd></div>
        <div><dt>Length</dt><dd>{track.duration}</dd></div>
      </dl>
    </aside>
  )
}