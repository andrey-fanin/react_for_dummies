import React, { Component } from 'react'
import './stylesNew.css'

export default class DbCcomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             error: null,
             isLoaded: false,
             items: []
        }
    }
    
    componentDidMount() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        //xml-http интерфейс нового поколения, построен на промисах
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p> Error {error.message}</p>
        } else if (!isLoaded) {
            return <p>Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.strDrink}
                            <img width='50px' height='50px' src={item.strDrinkThumb} />
                        </li>
                    ))}
                </ul>
            )
        }
    }
}
