import React from 'react';

const CharComponent = (props) => {
    let style = {
        "display": "inline-block",
        "padding": "16px",
        "textAlign": "center",
        "margin": "16px",
        "border": "1px solid black"
    }
    return (
        <div onClick={props.click} style={style} >
            <h3>{props.character}</h3>
        </div>
    )
}

export default CharComponent;