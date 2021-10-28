import React, { Component } from 'react';

export default class NewFcomp extends Component {
    constructor(props) {
        super(props);

        this.state = {
             newName: 'Button pressed'
        }
    }
    
    render() {
        return (
            <div>
                <h1>hello, {this.props.name}</h1>
                <h1>input: </h1>
                <input value={this.props.input} onChange={this.props.handleChange}/>

                <button onClick={() => {this.props.updateData(this.state.newName)}}>Press button</button>
            </div>
        );
    }
}
