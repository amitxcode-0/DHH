
import music from "../../assets/music1.jpg";

function LibraryCard(props) {
    return (
        <div className="flex items-center p-2 bg-green-400 m-4 rounded-lg">
            <div>
                <img
                    src={music}
                    alt="Music"
                    className="w-12 h-12 object-cover rounded-md"
                />
            </div>

            <div className="text-white pl-5">
                {props.title}
            </div>
        </div>
    );
}

export default LibraryCard;
