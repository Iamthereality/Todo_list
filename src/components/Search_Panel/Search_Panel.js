import React, { Component } from 'react';
import './Search_Panel.scss'

export default class extends Component{
    state = {
        search_data: ''
    };

    on_input_change = (event) => {
        const input_value = event.target.value;
        this.setState({
            search_data: input_value
        });
        this.props.on_search_input(input_value);
    };

    render() {
        const searchText = 'Type your query here';
        return <input
                    placeholder={ searchText }
                    className={ 'search_panel' }
                    onChange={ this.on_input_change }
                    value={ this.state.search_data }/>
    }
}