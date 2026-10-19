import Search from "./components/main/SearchBar";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* Main-part Layout */}
      <div className="flex min-h-screen pb-20">

        {/* Left Sidebar */}
        <aside className="
          hidden md:flex
          w-16 lg:w-56 shrink-0
          flex-col
          border-r border-zinc-800
          bg-black p-4
        ">
          <h1 className="mb-8 text-xl font-extrabold">
            <span className="hidden lg:inline">
              RapLibrary.In
            </span>
          </h1>
        </aside>

        {/* Main Section */}
        <main className="
          min-w-0 flex-1 min-h-screen
          bg-zinc-900
          p-4 sm:p-6 lg:p-8
        ">

         <div className="search
         w-full 
         max-w-5xl
         min-h-10
         mx-auto
         rounded-xl
         bg-blue-500
         ">
            
            <Search/>
         </div>
         <div></div>
         <div></div>
         <div></div>
       
        </main>

        {/* Right Sidebar */}
        <aside className="
          hidden xl:flex
          w-64 shrink-0 flex-col
          border-l border-zinc-800
          bg-black p-5
        ">
          <h3 className="mb-6 text-lg font-bold">
            Now Playing
          </h3>

          <div className="
            flex aspect-square items-center justify-center
            rounded-2xl
            bg-gradient-to-br from-green-700 to-zinc-900
            text-6xl
          ">
            🎧
          </div>
        </aside>

      </div>

      {/* Fixed Bottom Music Player */}
      <div className="
        fixed bottom-0 left-0 right-0 z-50
        flex h-20 items-center justify-between gap-3
        border-t border-zinc-700
        bg-zinc-950/95 px-3 sm:px-6
        shadow-2xl backdrop-blur-md
      ">

        {/* Song Info */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-lg bg-red-700 sm:h-12 sm:w-12
          ">
            🎵
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-sm font-semibold">
              My Favorite Song
            </h4>
            <p className="truncate text-xs text-zinc-400">
              RapLibrary Playlist
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
