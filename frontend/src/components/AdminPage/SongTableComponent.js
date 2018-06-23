import React, {Component} from 'react';

import SongRow from "./SongRowComponent";

export default class SongTable extends Component {

    constructor() {
        super();
        this.renderSongRows = this.renderSongRows.bind(this);
    }


    renderSongRows() {
        return this.props.songs.map(song => {
            return <SongRow key={song.id} details={song} type={this.props.type.api}/>
        })
    }

    render() {
        return (
            <div>
                <hr/>
                <div className="admin-table">
                    <div className={"table-header"}>
                        <h4>
                            {this.props.type.display}s
                        </h4>
                    </div>

                    <div className={"table-content"}>
                        {this.renderSongRows()}
                    </div>
                </div>
            </div>

        )
    }
}

