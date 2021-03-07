import React from 'react';
import { connect } from './react-redux';

class _SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <div className="ui button primary">Select</div>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state => {
    return { songs: state.songs };
};

export const SongList = connect(mapStateToProps)(_SongList);
