export default function Header({ trackCount = 0, signedIn, onAccountClick }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Flow Library home">
        <span className="brand-mark">FL</span>
        <span>Flow Library</span>
      </a>

      <div className="header-actions">
        <span className="track-counter">{trackCount} tracks</span>
        <button className="text-button" type="button" onClick={onAccountClick}>
          {signedIn ? 'Sign out' : 'Sign in'}
        </button>
      </div>
    </header>
  )
}
