import { useState } from 'react'

const emptyDraft = {
  title: '',
  artist: '',
  album: '',
  genre: 'Boom Bap',
  mood: 'Focused',
  explicit: false,
  note: '',
}

export default function AddTrackForm({ genres, onAddTrack, onCancel }) {
  const [draft, setDraft] = useState(emptyDraft)
  const [errors, setErrors] = useState({})

  function updateDraft(event) {
    const { name, value, checked, type } = event.target
    setDraft((currentDraft) => ({
      ...currentDraft,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (!draft.title.trim()) nextErrors.title = 'Add a track title.'
    if (!draft.artist.trim()) nextErrors.artist = 'Add an artist name.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // This field is deliberately uncontrolled: React does not store its value in state.
    const listenerNote = event.currentTarget.elements.listenerNote.value.trim()
    onAddTrack({ ...draft, listenerNote })
    setDraft(emptyDraft)
    event.currentTarget.reset()
  }

  return (
    <section className="add-panel" aria-labelledby="add-track-heading">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Your collection</p>
          <h2 id="add-track-heading">Add a track</h2>
        </div>
        <button className="icon-button" type="button" onClick={onCancel} aria-label="Close add track form">×</button>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <label>
            Title
            <input name="title" value={draft.title} onChange={updateDraft} placeholder="e.g. Backseat Bars" />
            {errors.title && <span className="field-error">{errors.title}</span>}
          </label>
          <label>
            Artist
            <input name="artist" value={draft.artist} onChange={updateDraft} placeholder="e.g. Your artist name" />
            {errors.artist && <span className="field-error">{errors.artist}</span>}
          </label>
          <label>
            Album
            <input name="album" value={draft.album} onChange={updateDraft} placeholder="Optional release" />
          </label>
          <label>
            Genre
            <select name="genre" value={draft.genre} onChange={updateDraft}>
              {genres.filter((genre) => genre !== 'All').map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </label>
        </div>

        <fieldset>
          <legend>Track mood</legend>
          {['Focused', 'Energetic', 'Chill'].map((mood) => (
            <label className="radio-label" key={mood}>
              <input type="radio" name="mood" value={mood} checked={draft.mood === mood} onChange={updateDraft} />
              {mood}
            </label>
          ))}
        </fieldset>

        <label className="checkbox-label">
          <input type="checkbox" name="explicit" checked={draft.explicit} onChange={updateDraft} />
          Mark as explicit
        </label>

        <label>
          Track note
          <textarea name="note" value={draft.note} onChange={updateDraft} placeholder="What makes this track memorable?" rows="3" />
        </label>

        <label>
          Listener note <span className="muted">(uncontrolled input example)</span>
          <input name="listenerNote" defaultValue="" placeholder="Optional personal note" />
        </label>

        <div className="form-actions">
          <button className="text-button" type="button" onClick={onCancel}>Cancel</button>
          <button className="primary-button" type="submit">Save track</button>
        </div>
      </form>
    </section>
  )
}
