import React from "react"
import Ccomp from "./Ccomp";
import Fcomp from "./Fcomp";
import Menu from "./Menu";
import './stylesNew.css';
import './app.css';
import Newcc from "./Newcc";
import Cstyles from "./Cstyles";
import NewCcomp from "./NewCcomp";
import DbCcomp from "./DbCcomp";
import LastCComp from "./LastCComp";



function App() {
    return (
        <div className='App'>
        <>
        <Fcomp name="kek"/>
        <Ccomp numbers={[1,2,3]}/>
        <Menu />
        <Newcc />
        <Cstyles />
        <NewCcomp />   
        <DbCcomp />     
        <LastCComp />
        </>
        </div>
    )
    }
    
export default App;