import React, {Component} from 'react';

import SongRow from "./SongRow";
import Paper from "@material-ui/core/Paper/Paper";

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
            <Paper>
                <div className="admin-table admin-table-content">
                    <div className={"table-header"}>
                        <h4>
                            {this.props.type.display}s
                        </h4>
                    </div>

                    <div className={"table-content"}>
                        {this.renderSongRows()}
                    </div>
                </div>
            </Paper>

        )
    }
}

