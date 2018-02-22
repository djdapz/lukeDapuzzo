import React, {Component} from "react";

class SpotifyComponent extends Component {

    render() {
        const url = `https://open.spotify.com/embed/track/${this.props.track}`;
        return (
            <iframe className="spotify-song" key={this.props.track} src={url} frameBorder="0" allowtransparency="true"
                    height="300"/>

        )
    }

    shouldComponentUpdate() {
        return false;
    }
}

export default SpotifyComponent;
