
const VideoTitle = ({title,overview}) =>{
    return <div className="videomain">
   <h1 className="h1vt">{title}</h1>
   <p>{overview}</p>
   <div className="vtsecound">
    <button className="play-btn fa-solid fa-play">Play</button>
    <button className="more-btn play-btn">More Info </button>
   </div>
    </div>;
};
export default VideoTitle;




