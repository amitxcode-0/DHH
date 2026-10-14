import { useState } from "react";
import { House , Search ,UserGroup } from "lucide-react";

import IconCard from "./components/sideBar/IconCard";
import LibraryCard from "./components/sideBar/LibraryCard";
import SignIn from "./components/sideBar/SignIn";


const App = () => {
 const [isSignedIn, setIsSignedIn] = useState(true);

return (
    <div>

      {/* //sidebar */}
      <div className="h-screen w-[200px] bg-black">
        <h4 className="text-white p-2">RapLibrary.in</h4>

        <section>
           <IconCard icon={House} title="Home"/>
           <IconCard icon={Search} title="Search"/>
           <IconCard icon={UserGroup} title="Artist"/>
        </section>

        <section>
           <LibraryCard title="chill rap"/>
           <LibraryCard title="hip hop"/>
        </section>

        <section className="text-white">
            {isSignedIn ? (
                <div>
                    <button
                        onClick={() => setIsSignedIn(false)}
                    >
                        Sign Out
                    </button>
                </div>
            ) : (
                <SignIn
                    onSignIn={() => setIsSignedIn(true)}
                />
            )}
          </section>
      </div>


    </div>
  )
}

export default App;