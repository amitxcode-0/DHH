import { useState } from 'react'
import { genres, starterTracks } from './data'
import Header from './components/Header'
import LibraryControls from './components/LibraryControls'
import TrackCard from './components/TrackCard'
import TrackDetails from './components/TrackDetails'
import AddTrackForm from './components/AddTrackForm'

export default function App() {
  const [tracks, setTracks] = useState(starterTracks)
  const [query, setQuery] = useState('')
  const [activeGenre, setActiveGenre] = useState('All')
  const [favoriteIds, setFavoriteIds] = useState([])
  const [playingTrackId, setPlayingTrackId] = useState(null)
  const [selectedTrackId, setSelectedTrackId] = useState(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [signedIn, setSignedIn] = useState(true)
  const [notice, setNotice] = useState('Choose a track and make the library yours.')

  const visibleTracks = tracks.filter((track) => {
    const searchableText = `${track.title} ${track.artist} ${track.album}`.toLowerCase()
    const matchesSearch = searchableText.includes(query.toLowerCase())
    const matchesGenre = activeGenre === 'All' || track.genre === activeGenre
    return matchesSearch && matchesGenre
  })

  const selectedTrack = tracks.find((track) => track.id === selectedTrackId)

  function handlePlay(trackId) {
    setPlayingTrackId((currentId) => (currentId === trackId ? null : trackId))
    const track = tracks.find((item) => item.id === trackId)
    setNotice(playingTrackId === trackId ? 'Playback paused.' : `Now playing: ${track.title}.`)
  }

  function toggleFavorite(trackId) {
    setFavoriteIds((currentIds) => (
      currentIds.includes(trackId)
        ? currentIds.filter((id) => id !== trackId)
        : [...currentIds, trackId]
    ))
  }

  function handleSearchKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      setNotice(`Showing ${visibleTracks.length} matching track${visibleTracks.length === 1 ? '' : 's'}.`)
    }
  }

  function addTrack(draft) {
    const newTrack = {
      id: `${draft.title.toLowerCase().replaceAll(' ', '-')}-${Date.now()}`,
      title: draft.title.trim(),
      artist: draft.artist.trim(),
      album: draft.album.trim() || 'Independent release',
      genre: draft.genre,
      duration: '3:00',
      color: draft.mood === 'Energetic' ? '#ff5d3d' : draft.mood === 'Chill' ? '#27c9b8' : '#8b5cf6',
      explicit: draft.explicit,
      note: draft.note.trim() || draft.listenerNote || 'New addition to your personal library.',
    }

    setTracks((currentTracks) => [newTrack, ...currentTracks])
    setActiveGenre('All')
    setQuery('')
    setShowAddForm(false)
    setNotice(`${newTrack.title} was added to your library.`)
  }

  if (!signedIn) {
    return (
      <main className="login-page">
        <section className="login-card">
          <span className="brand-mark">FL</span>
          <p className="eyebrow">Flow Library</p>
          <h1>Your rap library, one place.</h1>
          <p>Sign in to browse tracks, save favorites, and add your own finds.</p>
          <button className="primary-button" type="button" onClick={() => setSignedIn(true)}>Sign in to continue</button>
        </section>
      </main>
    )
  }

  return (
    <>
      <Header trackCount={tracks.length} signedIn={signedIn} onAccountClick={() => setSignedIn(false)} />

      <main id="top" className="app-shell">
        <section className="hero">
          <div>
            <p className="eyebrow">Personal music crate</p>
            <h1>Keep your favorite bars close.</h1>
            <p className="hero-copy">A small React music library for collecting rap, discovering moods, and practicing the fundamentals.</p>
          </div>
          <div className="hero-stat">
            <strong>{favoriteIds.length}</strong>
            <span>favorites saved</span>
          </div>
        </section>

        <section className="library-section" aria-labelledby="library-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Library</p>
              <h2 id="library-heading">Your rotation</h2>
            </div>
            <button className="primary-button" type="button" onClick={() => setShowAddForm(true)}>+ Add track</button>
          </div>

          <LibraryControls
            query={query}
            activeGenre={activeGenre}
            genres={genres}
            onQueryChange={(event) => setQuery(event.target.value)}
            onGenreChange={(event) => setActiveGenre(event.target.value)}
            onSearchKeyDown={handleSearchKeyDown}
          />

          <p className="status-message" aria-live="polite">{notice}</p>

          <div className="content-layout">
            <div className="track-list" aria-live="polite">
              {visibleTracks.length > 0 ? (
                visibleTracks.map((track) => (
                  <TrackCard
                    key={track.id}
                    track={track}
                    isFavorite={favoriteIds.includes(track.id)}
                    isPlaying={playingTrackId === track.id}
                    isSelected={selectedTrackId === track.id}
                    onPlay={handlePlay}
                    onToggleFavorite={toggleFavorite}
                    onSelect={setSelectedTrackId}
                    onHover={(title) => setNotice(`Ready to preview ${title}.`)}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <p>No tracks match that search.</p>
                  <button className="text-button" type="button" onClick={() => { setQuery(''); setActiveGenre('All') }}>
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            <TrackDetails track={selectedTrack} onClose={() => setSelectedTrackId(null)} />
          </div>
        </section>
      </main>

      {showAddForm && <AddTrackForm genres={genres} onAddTrack={addTrack} onCancel={() => setShowAddForm(false)} />}
    </>
  )
}