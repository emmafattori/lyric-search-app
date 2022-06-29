import React from 'react'
import { Link } from 'react-router-dom';
const Track = (props) => {

    const { track } = props;
    return (
        <div className="col-md-6">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5>{track.result.artist_names}</h5>
                    <p className="card-text">
                        <strong>
                            <i className="fas fa-play"></i> Track: {track.result.full_title}
                        </strong>
                        <br />
                        <img src={track.result.song_art_image_thumbnail_url} alt={track.result.full_title + 'album artwork'} />

                    </p>
                    <Link className="btn btn-dark btn-block" target="blank" to={{ pathname: `${track.result.url}` }}>
                        <i className="fas fa-chevron-right"></i> View Lyrics
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Track