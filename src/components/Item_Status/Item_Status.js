import React, { Component } from 'react';
import './Item_Status.scss';

export default class extends Component{
    render() {
        const { todo, done } = this.props;
        return (
            <div className={ 'item_status' }>
                <p> { todo } more to do, { done } done </p>
            </div>
        )
    }
}