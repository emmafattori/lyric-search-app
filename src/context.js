import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();
const baseUrl = 'https://genius.p.rapidapi.com/search'

const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_TRACKS':
            return {
                ...state,
                track_list: action.payload,
                heading: 'Search Results'
            };
        default: return state;
    }
}

export class Provider extends Component {
    state = {
        track_list: [

        ],
        heading: 'Featured Artist',
        dispatch: action => this.setState(state => reducer(state, action))
    };
    componentDidMount() {
        axios.get(
            baseUrl, {
            params: { q: 'Odesza', per_page: 10 },
            headers: {
                // to do: place key in .env
                'X-RapidAPI-Key': '8780038684mshf933dce4ebe00dfp171953jsn97e90579acca',
                'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
        }
        )
            .then(res => {
                let musicData = res.data.response.hits;
                // console.log(musicData)
                this.setState({ track_list: musicData })
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;