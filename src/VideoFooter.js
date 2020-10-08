import React from "react";
import "./VideoFooter.css";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ChatIcon from '@material-ui/icons/Chat';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"
function VideoFooter() {

    return <div className="videoFooter">

        <div className="videoFooter__text">
            <h3>@sanjarjuraev</h3>
            <p>this is a description</p>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon"/>
                {/**/}

            </div>

        </div>
        <img className="videoFooter__record"
             src="https://static.thenounproject.com/png/934821-200.png" alt=""/>

    </div>

}
export default VideoFooter