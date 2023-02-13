import './Cart.css';
import personalImg from '../../utsho.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredCart } from '../Utilities/Utilities';
const Cart = (props) => {
    const notify = () => toast("Activity Completed!!");
    const newCart = props.newCart;
    let totalTime = 0;
    for (const product of newCart) {
        let time = parseFloat(product.time);
        totalTime = totalTime + time;
    }
    const [breakTime, setBreakTime] = useState(0);
    const buttonHandler = (time) => {
        setBreakTime(time);
        localStorage.setItem('breakTime', JSON.stringify(time));
    }
    useEffect(() => {
        // const storedData = [];
        const storedTime = getStoredCart();
        console.log(storedTime);
        // storedData.push(storedTime);
        // console.log(storedData);
        setBreakTime(storedTime);
    }, [])
    return (
        <div className='full-cart'>
            <div className="cart-info-all">
                <div className="personal-info">
                    <img src={personalImg} alt="" />
                    <div className="name-address">
                        <h2>Md.Mazharul Islam</h2>
                        <p><FontAwesomeIcon icon={faLocationDot} /> Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="weight-height">
                    <div className="weight">
                        <h2>63kg</h2>
                        <p>Weight</p>
                    </div>
                    <div className="height">
                        <h2>5.7</h2>
                        <p>Height</p>
                    </div>
                    <div className="age">
                        <h2>25yrs</h2>
                        <p>Age</p>
                    </div>
                </div>
                <div className="break-info">
                    <h2>Break Time</h2>
                    <div className="break-time">
                        <button onClick={() => buttonHandler(30)}>30s</button>
                        <button onClick={() => buttonHandler(40)}>40s</button>
                        <button onClick={() => buttonHandler(50)}>50s</button>
                        <button onClick={() => buttonHandler(60)}>60s</button>
                        <button onClick={() => buttonHandler(70)}>70s</button>
                    </div>
                </div>
                <div className="exercise-details">
                    <h2>Yoga Total Time:</h2>
                    <div className="yoga-time">
                        <h3>Yoga Time:</h3>
                        <p>{totalTime}s</p>
                    </div>
                    <div className="breaks-time">
                        <h3>Break Time:</h3>
                        <p>{breakTime}s</p>
                    </div>
                </div>
                <button className='btn-2' onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;