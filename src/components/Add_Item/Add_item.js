import React, { Component } from 'react';
import './Add_item.scss';

export default class extends Component {

    state = {
      label: ''
    };

    on_label_change = (event) => {
       this.setState({
           label: event.target.value
       });
    };

    on_submit = (event) => {
        event.preventDefault();
        this.props.add_item(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form
                className={ 'add_item_form' }
                onSubmit={ this.on_submit }>
                <input
                    type="text"
                    className={ 'new_item_input' }
                    onChange={ this.on_label_change }
                    placeholder={ 'What needs to be done?' }
                    value={ this.state.label }/>
                <button>Add item</button>
            </form>
        )
    }
}