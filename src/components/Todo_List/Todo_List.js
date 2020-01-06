import React, { Component } from 'react';
import TodoLIstItem from "../Todo_List_Item/Todo_LIst_Item";
import './Todo_List.scss';

export default class extends Component {
    render() {
        const { todo_data, delete_item, on_toggle_important, on_toggle_done } = this.props;
        const listItems = todo_data.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={ id } className={ 'list-group-item' }>
                    <TodoLIstItem
                        { ...itemProps }
                        delete_item={ () => delete_item(id) }
                        on_toggle_important={ () => on_toggle_important(id) }
                        on_toggle_done={ () => on_toggle_done(id) }/>
                </li>
            )
        });

        return (
            <ul className={ 'list-group todo_list' }>
                { listItems }
            </ul>
        )
    }
};