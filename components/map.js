export default function Map({name, coordinates, height}) {
    return(
<iframe width='100%' height={height} className="block  rounded-md bg-white  border-4 border-GhostWhite rounded-2xl	" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDsuYTI54DXY9Y8QPjsiU7pB28RRm7MQJY&q=${name}&zoom=17&center=${coordinates}`} allowFullScreen></iframe>    )
} 