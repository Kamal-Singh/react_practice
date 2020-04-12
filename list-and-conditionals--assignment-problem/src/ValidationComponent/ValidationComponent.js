import React from 'react';

const ValidationComponent = (props) => {
    return (
        <div>
        { props.len <= 5 ? 
            <p>Text Length is Short</p>
        :
         <p>Text Long Enough</p>
        }
        </div>
        );
}

export default ValidationComponent;