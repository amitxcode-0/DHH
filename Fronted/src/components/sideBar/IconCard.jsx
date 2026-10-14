

function IconCard(props){
    const Icon=props.icon;

    return(
        <div className="flex p-2 bg-red-400 m-4 rounded-lg">
            <div className="text-white"><Icon /></div>
            <div className="text-white pl-5">{props.title}</div>
        </div>
    )
}

export default IconCard;