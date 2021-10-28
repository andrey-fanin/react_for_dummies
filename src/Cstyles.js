import React, { Component } from 'react';
import './stylesNew.css';
import { Button } from '@material-ui/core/';

export default class Cstyles extends Component {
    render() {
        const styles = {
            color: 'yellow',
            backgroundColor: 'green',
            fontSize: '5.6em',
            fontSize: 50 //будут пиксели
        }
        return (
            <div>
                <h1 className='hello' style={styles}>5.Hello!</h1>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                Link
                </Button>
                {/* <h1 style={{color: 'green', backgroundColor: 'yellow'}}>5.Hello!</h1> */}
            </div>
        )
    }
}
