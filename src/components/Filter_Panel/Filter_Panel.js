import React, { Component } from 'react';
import './Filter_Panel.scss';

export default class extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    render() {
        const { filter, on_filter_change } = this.props;
        const  buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'active' : '';
            return (
                <button
                    key={ name }
                    type={ 'button' }
                    className={ clazz }
                    onClick={ () => on_filter_change(name) }>
                    { label }
                </button>
            );
        });
        return (
            <div className={ 'filter_panel' }>
                { buttons }
            </div>
        )
    }
}