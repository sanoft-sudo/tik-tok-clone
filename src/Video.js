import React, {useRef, useState} from "react";
import "./Video.css"

function Video() {
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () =>{
        if (play){
            videoRef.current.pause();
            setPlay(false)
        }else{
            videoRef.current.play();
            setPlay(true)
        }
    }
    return <div className="video">

        <div className="card">
            <div className="card__body">
                <video
                    className="video__player"
                    loop
                    ref={videoRef}
                    onClick={onVideoPress}
                    src="https://v77.tiktokcdn.com/755c0c27ce031622bb9f1deef5daf60a/5f5d143d/video/tos/useast2a/tos-useast2a-pve-0068/9c48b59a2d894391927eb038f05a824f/?a=1233&br=3368&bt=1684&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009121232210101902182225C110005&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=Mzgzd29weHVvdjMzZTczM0ApN2hkaTdpaWU7NzloOWk5M2dscWRpXl5xZm5fLS1fMTZzczQxLWM2NDExMzVhMTQtNmM6Yw%3D%3D&vl=&vr=">
                </video>
            </div>
            <div className="card__footer">

            </div>
        </div>
    </div>

}

export default Video