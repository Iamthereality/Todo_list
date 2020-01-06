import React, { Component } from 'react';
import AppHeader from "../App_Header/App_Header";
import Panels from "../Panels/Panels";
import TodoList from "../Todo_List/Todo_List";
import Add_Item from '../Add_Item/Add_item';
import './App.scss';

export default class extends Component {

    max_id = 1;

    create_todo_item(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.max_id++
        }
    }

    state = {
        todo_data: [
            this.create_todo_item('Learn React'),
            this.create_todo_item('Drink Coffee'),
            this.create_todo_item('Build Awesome App')
        ],
        search_data: '',
        filter: 'all' //possible states: all, active, done
    };

    delete_item = (id) => {
        this.setState(({ todo_data }) => {
            const element_index = todo_data.findIndex((element) => element.id === id);
            const arr = [
                ...todo_data.slice(0, element_index),
                ...todo_data.slice(element_index + 1)
            ];
            return {
                todo_data: arr
            }
        });
    };

    add_item = (text) => {
        const new_item = this.create_todo_item(text);
        this.setState(({ todo_data }) => {
            const arr = [...todo_data, new_item];
            return {
                todo_data: arr
            }
        });
    };

    toggle_property(array, id, property_name) {
        const element_index = array.findIndex((element) => element.id === id);
        const old_item = array[element_index];
        const new_item = {
            ...old_item,
            [property_name]: !old_item[property_name]
        };
        return [
            ...array.slice(0, element_index),
            new_item,
            ...array.slice(element_index + 1)
        ];
    }

    on_toggle_done = (id) => {
        this.setState(({ todo_data }) => {
            return {
                todo_data: this.toggle_property(todo_data, id, 'done')
            };
        });
    };

    on_toggle_important = (id) => {
        this.setState(({ todo_data }) => {
            return {
                todo_data: this.toggle_property(todo_data, id, 'important')
            };
        });
    };

    on_search_input = (text) => {
        this.setState({
            search_data: text
        });
    };

    search = (todo_items, search_data) => {
        if (search_data.length === 0) {
            return todo_items;
        }

        return todo_items.filter((item) => {
            return item.label.toLowerCase().indexOf(search_data.toLowerCase()) > -1;
        });
    };

    filter = (todo_items, filter) => {
        switch (filter) {
            case 'all': return todo_items;
            case 'active': return todo_items.filter((item) => !item.done);
            case 'done': return todo_items.filter((item) => item.done);
            default: return todo_items;
        }
    };

    on_filter_change = (state) => {
        this.setState({
            filter: state
        });
    };


    render() {
        const { todo_data, search_data, filter } = this.state;
        const display_todo_data = this.filter(this.search(todo_data, search_data), filter);
        const done_count = todo_data.filter((element) => element.done).length;
        const todo_count = todo_data.length - done_count;
        return (
            <div className={ 'container' }>
                <div className={ 'content' }>
                    <AppHeader
                        todo={ todo_count }
                        done={ done_count }/>
                    <Panels
                        on_search_input={ this.on_search_input }
                        filter={ filter }
                        on_filter_change={ this.on_filter_change }/>
                    <TodoList
                        todo_data={ display_todo_data }
                        delete_item={ this.delete_item }
                        on_toggle_important={ this.on_toggle_important }
                        on_toggle_done={ this.on_toggle_done }/>
                    <Add_Item
                        add_item={ this.add_item }/>
                </div>
            </div>
        )
    }
}
