import React from "react";
import { useState } from "react";
import './countries.css';
import Codes from './codes'
export default function Countries(props){

    const [isShown, setIsShown] = useState(false);

    return(
        <li className="List">
            <div className="con-name-button">
                <h3>{props.name}</h3>
                <button className="button" onClick={() => setIsShown(current => !current)}>Show Code</button>
            </div>
            {/* When isShown==true && (expression), always executes the expression.
            When isShown==false && (expression), is always false and doesn't execute the expression */}
            {isShown && (
                <Codes code={props.code} />
            )}
        </li>
    );
}

