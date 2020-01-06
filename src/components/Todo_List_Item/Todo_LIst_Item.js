import React, { Component } from 'react';
import './Todo_List_Item.scss';

export default class extends Component{
    render() {
        const { done, important, label, delete_item, on_toggle_important, on_toggle_done } = this.props;
        let classNames = 'todo_list_item';

        if (important) {
            classNames += ' important';
        }

        if (done) {
            classNames += ' done';
        }

        return (
            <span className={ classNames }>
                <span
                    className={ 'todo_list_item_label' }
                    onClick={ on_toggle_done }>
                    { label }
                </span>
                <div className={ 'button_container' }>
                    <button
                        type={ 'button' }
                        className={ 'delete' }
                        onClick={ delete_item }>
                        <i className={ 'fa fa-trash-o' }/>
                    </button>
                    <button
                        type={ 'button' }
                        className={ 'mark' }
                        onClick={ on_toggle_important }>
                        <i className={ 'fa fa-exclamation' }/>
                    </button>
                </div>
            </span>
        )
    }
}