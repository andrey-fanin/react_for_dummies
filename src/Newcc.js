import React, { Component } from 'react'

export default class Newcc extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input: 'Hello',
            submit: '',
            items: []
             
        };

        this.handleChange = this.handleChange.bind(this);
        //делаем дефолтное значение инпута Hello и вызываем метод handleChange (стандартно)
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState ({
            input: event.target.value

        });
    }
    //когда метод handleChange вызывается, он содержит в себе инпут со строкой, а мы меняем его состояние
    // handleSubmit(event) {        
    //         event.preventDefault()        
    //         this.setState ({
    //             submit: this.state.input
    //         });
    // } //эта версия - для кнопочки, показывающей новый текст в инпуте
    handleSubmit(event) {        
            event.preventDefault()        
            this.setState ({
                input: this.state.input,
                items: [...this.state.items, this.state.input]
                //спред-оператор es6 добавляет значение инпута в массив items
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                  <input value={this.state.input} onChange={this.handleChange}/>
                  <button type='submit'>Submit!</button>
                </form>
                
                {/* <h5>Controlled input:</h5>
                <h3>{this.state.input}</h3>
                <h3>{this.state.submit}</h3> */}
                <ul>
                    {this.state.items.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                    {/* функция map выводит наш массив */}

                </ul>
            </div>
        )
    }
    //простой рендер - обработали метод и вывели инпут со значением
}
