import React, { Component } from 'react'
import Menu from './Menu'

export default class Ccomp extends Component {
    constructor(props) {
        super(props)
    //  super(props) - функция, вызов родительский конструктор
    
        this.state = {
             count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(state =>({
            count: state.count + 1
        }));
    }
    decrement() {
        this.setState(state =>({
            count: state.count - 1
        }));
    }
    reset() {
        this.setState({
            count: 0
        })
    }
// handleClick() {
//     this.setState(state =>({
//         visibility: !state.visibility
//     }));
// }
    
    render() {
        return (
            <div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.reset}>reset</button>
                <h1>Current: {this.state.count}</h1>
            </div>
        )
        
    }
    // render() {
    //     if (this.state.visibility) {
    //         return (
    //             <div>                
    //             <h1>Now see</h1>
    //             <button onClick={this.handleClick}>Click</button>
    //         </div>
    //     );
    //     } else {
    //         return (
    //             <div>            
    //             <button onClick={this.handleClick}>Click</button>
    //         </div>
    //         )
    //     }
    // }
}
// render() {
//     const name = this.state.name;
//     return (
//         <div>
//             <Menu />
//             <h1>Class component {name}</h1>
//         </div>
//     )
// }

Ccomp.defaultProps = {name: "Alexey"} //если не прописали новое в апп - будет это


//{this.props.numbers.join(',')} - перевести массив в строку и добавить запятые-разделители