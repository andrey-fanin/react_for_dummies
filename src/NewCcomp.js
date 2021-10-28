import React, { Component } from 'react';
import './stylesNew.css';
import NewFcomp from './NewFcomp';
import NewNFcomp from './NewNFcomp';

export default class NewCcomp extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             name: "web dev blog",
             inputValue: '',
             newName: 'Button not pressed'
        };
        this.handleChange = this.handleChange.bind(this);
        this.updateData = this.updateData.bind(this);
    }
    updateData = (value) => {
        this.setState({
            newName: value
        })
    };
    
        handleChange(event) {
            this.setState({
                inputValue: event.target.value
            })
        };

    render() {
        return (
            <div>
                <p>Hello YOutube {this.state.name}</p>
                <NewFcomp name={this.state.name} />
                <NewFcomp 
                input={this.state.inputValue}
                handleChange={this.handleChange} />
                <NewNFcomp input={this.state.inputValue} />
                <p>State: {this.state.newName}</p>
                <NewFcomp updateData={this.updateData} />

            </div>
        );
    }

}
