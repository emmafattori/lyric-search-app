import React, { Component } from 'react';
import axios from 'axios';
const Context = React.createContext();


const baseUrl = 'https://spotify23.p.rapidapi.com/search/'


export class Provider extends Component {
    state = {
        track_list: [

        ],
        heading: 'Top 10 Tracks'
    };
    componentDidMount() {

        const options = {
            method: 'GET',
            url: baseUrl,
            params: {
                q: 'the weeknd',
                type: 'multi',
                offset: '0',
                limit: '10',
                numberOfTopResults: '5'
            },
            headers: {
                'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
                // to do, hold in .env
                'X-RapidAPI-Key': '8780038684mshf933dce4ebe00dfp171953jsn97e90579acca',

            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
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