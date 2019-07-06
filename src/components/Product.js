import React from 'react';

function Product (props) {
    return (
        <div>
           <h3 style={{display: props.name ? "block" : "none"}}>Name: {props.name}</h3>
           <h3 style={{display: props.price ? "block" : "none"}}>Price: ${props.price}</h3>
           <h3 style={{display: props.description ? "block" : "none"}}>Description: {props.description}</h3>
           <hr></hr>
        </div>
    );
}

export default Product