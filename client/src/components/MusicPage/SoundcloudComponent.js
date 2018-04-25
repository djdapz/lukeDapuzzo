import PropTypes from "prop-types";
import React from "react";

class SoundcloudComponent extends React.Component {
    render() {
        const url = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.song.id}&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false`;
        return <div className={"soundcloud-frame"}>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" src={url}/>
        </div>
    }

    shouldComponentUpdate() {
        return false
    }
}

SoundcloudComponent.propTypes = {
    songs: PropTypes.shape({
        id: PropTypes.number.isRequired
    })
};

export default SoundcloudComponent