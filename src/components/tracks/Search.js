import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {

    state = {
        trackTitle: ''
    }

    onChange = (e) => {
        //grabbing state from search input. Allowing the function to be versatile enough if other inputs or forms get added to the page by keeping the state name the same as the input name.
        this.setState({ [e.target.name]: e.target.value })
    }

    fetchSong = (dispatch, e) => {
        e.preventDefault();
        axios.get(
            'https://genius.p.rapidapi.com/search', {
            params: { q: this.state.trackTitle },
            headers: {
                // to do: place key in .env
                'X-RapidAPI-Key': '8780038684mshf933dce4ebe00dfp171953jsn97e90579acca',
                'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
        }
        )
            .then(res => {
                console.log(res.data.response.hits)
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.response.hits

                })
                this.setState({ trackTitle: '' })

            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value
                    return (
                        <div className="card card-body mb-4 p-4">
                            <h1 className="display-4 text-center">
                                <i className="fas fa-music"></i> Search for a song
                            </h1>
                            <p className="lead text-center">
                                Get the lyrics for any song
                            </p>
                            <form onSubmit={this.fetchSong.bind(this, dispatch)}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Song title..."
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        onChange={this.onChange} />

                                </div>
                                <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Song Lyrics</button>
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default Search;