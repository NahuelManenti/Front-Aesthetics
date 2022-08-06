import React from "react";
import {Link as LinkRouter} from 'react-router-dom';
import '../css/index.css'


export default function CallToAction(){

    return (
        <div className='divCallTA'>
            <h1 className="hCTA">Aesthethic</h1>
            <h3 className="hCTA2">El poder de la belleza se refleja en la sonrisa</h3>
                <div>
                <LinkRouter to='/products'>
                <button className="btnCTA">Click para más!</button>
                </LinkRouter>
                </div>
        </div>
    )
}
