import React from 'react';
import './Card.css';
const Card = (props) => {
    let cart = props.cart;
    let cartHandler = props.cartHandler;
    const { name, about, age, picture, time } = cart;
    return (
        <div className='card-info'>
            <img src={picture} alt="" />
            <div className="only-info">
                <h2>{name}</h2>
                <p>{about}</p>
                <h3>Age: {age}</h3>
                <h3>Yoga time: {time}</h3>
            </div>
            <button className='btn-1' onClick={() => cartHandler(cart)}>Add to cart</button>
        </div>
    );
};

export default Card;