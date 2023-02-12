import React, { useEffect, useState } from 'react';
import logo from '../../logo1.png';
import Card from '../Card/Card';
import Cart from '../Cart/Cart';
import './Products.css';
const Products = () => {
    const [carts, setCart] = useState([]);
    const [newCarts, setNewCarts] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    const cartHandler = (cart) => {
        const newCart = [...newCarts, cart];
        setNewCarts(newCart);
    }
    return (
        <div>
            <div className="container">
                <div className="row-1">
                    <div className="col-1">
                        <div className="heading">
                            <img src={logo} alt="" />
                            <h1>YOGA-CLUB-BD</h1>
                        </div>
                        <h2 className='title-1'>Select Yoga Exercise</h2>
                        <div className="cards-info">
                            {
                                carts.map(cart => <Card key={cart.id} cart={cart} cartHandler={cartHandler}></Card>)
                            }
                        </div>
                        <div className="question-answer1">
                            <h2>How does react works?</h2>
                            <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                        </div>
                        <div className="question-answer2">
                            <h2>Difference between state vs props?</h2>
                            <p>Ans: props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes.</p>
                        </div>
                        <div className="question-answer3">
                            <h2>Without data loading where we are using useEffect?</h2>
                            <p>1.Reading from local storage
                                2.Registering and deregistering event listeners</p>
                        </div>
                    </div>
                    <div className="col-2">
                        <Cart newCart={newCarts}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;