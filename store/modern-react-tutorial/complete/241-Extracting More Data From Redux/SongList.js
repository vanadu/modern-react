import React from 'react';
import { connect } from './react-redux';
class _SongList extends React.Component {
    renderList() {
        // !VA The favorite title is set in react-redux.js where the date is stored
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <div className="ui button primary">Select</div>
                    </div>
                    <div className="content">
                        {song.title}
                        <div>
                            <b>{song.title === this.props.favoriteTitle && 'Favorite!'}</b>
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}
const mapStateToProps = state => {
    // !VA Step 1: update mapStateToProps to expose the favoriteTitle piece of state to the component. This makes the favoriteTitle property available to the component as this.props.favoriteTitle
    return { songs: state.songs, favoriteTitle: state.favoriteTitle };
};
export const SongList = connect(mapStateToProps)(_SongList);