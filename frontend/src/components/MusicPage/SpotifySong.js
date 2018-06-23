import React, {Component} from "react";

class SpotifySong extends Component {

    render() {
        return (
            <div id="spotifyContainer">
                <iframe className="spotify-song" key={this.props.track.id}
                        src={`https://open.spotify.com/embed/track/${this.props.track.id}`}
                        frameBorder="0"
                        allowtransparency="true"
                        width="100%"
                height={75}/>
            </div>


        )
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default SpotifySong;
