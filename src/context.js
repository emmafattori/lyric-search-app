import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();


const baseUrl = 'https://api.genius.com/oauth/authorize?'
const client_id = process.env.REACT_APP_GENIUS_CLIENTID

export class Provider extends Component {
    state = {
        track_list: [

        ],
        heading: 'Top 10 Tracks'
    };
    componentDidMount() {
        axios
            .get(
                'https://genius.p.rapidapi.com/search', {
                params: { q: 'Kendrick Lamar' },
                headers: {
                    'X-RapidAPI-Key': '8780038684mshf933dce4ebe00dfp171953jsn97e90579acca',
                    'X-RapidAPI-Host': 'genius.p.rapidapi.com'
                }
            }
            )
            .then(res => {
                console.log(res.data);
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