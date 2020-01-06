import React, { Component } from 'react';
import SearchPanel from "../Search_Panel/Search_Panel";
import FilterPanel from "../Filter_Panel/Filter_Panel";
import './Panels.scss'

export default class extends Component {
    search_query_data = (text) => {
        this.props.on_search_input(text);
    };

    filter_change = (text) => {
        this.props.on_filter_change(text);
    };

    render() {
        const { filter,  } = this.props;
        return (
            <div className={ 'panels' }>
                <SearchPanel on_search_input={ this.search_query_data }/>
                <FilterPanel
                    filter={ filter }
                    on_filter_change={this.filter_change }
                />
            </div>
        )
    }
};