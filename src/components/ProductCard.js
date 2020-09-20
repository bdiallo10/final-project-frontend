import React from 'react';



const ProductCard = (props) => {
    return (
        <div className="ProductCard">
            <h3> {props.productName} </h3>
            <p> ${props.price} </p>
            <p> {props.aboutProduct} </p>
            <p> This product is located in {props.productLocation} </p>
            <p> {props.timestamps } </p>
        </div>
    );
}

export default ProductCard;
