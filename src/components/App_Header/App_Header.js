import React, { Component } from 'react';
import AppTitle from "../App_Title/App_Title";
import ItemStatus from "../Item_Status/Item_Status";
import './App_Header.scss';

export default class extends Component {
    render() {
        const { todo, done } = this.props;
        return (
            <div className={ 'header' }>
                <AppTitle/>
                <ItemStatus todo={ todo } done={ done }/>
            </div>
        )
    }
}