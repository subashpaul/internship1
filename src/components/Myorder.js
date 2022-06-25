import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faBlackboard } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom'
import food from "../images/food.png";

const Myorder = (props) => {
    return (
        <>
            <div className='container d-flex justify-content-between align-items-center' style={{ borderBottom: '1px solid black' }}>
                <h3><b>My Order</b></h3>
                <button className='me-2 order-btn fs-5'>Edit</button>

            </div>

            <ul className="list-group list-group-flush mt-3 qty d-md-flex justify-content-md-center">
                <hr className='d-none d-md-block' />
                {props.dishes[0] === undefined ? <li className="list-group-item pb-4 text-bold fs-4 fw-light text-center">SELECT ITEM</li> : props.dishes.map((item, i) => {
                    return (

                        <li key={i} className="list-group-item py-md-5 py-3 fw-bold"><div className='d-flex justify-content-between align-items-center'>
                            <img src={food} className="foodorder" alt="..." />
                            <span className="txt">
                                {item.itemName}</span>
                            <div className="quantity">
                                <button className='counter-btn'>
                                    <FontAwesomeIcon icon={faChevronLeft}
                                        onClick={() => props.handleQuantityDecrease(i)
                                        }
                                    />
                                </button>
                                <span> {item.quantity} </span>
                                <button className='counter-btn'>
                                    <FontAwesomeIcon icon={faChevronRight} onClick={() => props.handleQuantityIncrease(i)}
                                    />
                                </button>
                            </div>
                            <span className="fs-6 fw-bold">
                                ${item.itemPrice}</span></div></li>
                    )
                })}

            </ul>
            <hr />
            <div className="container">
                <p className='dnd p-3'> Drag & Drop</p>
                <div className="total my-5">
                    <h5>Total</h5>
                    <h5 className='me-2'><b>${Number(props.totalPrice).toFixed(2)}</b></h5>
                </div>
                <div className="checkout">
                    <button className='btn mybtn bgcol'>

                        {<Link to='/checkout' className="nav-link d-flex align-items-center justify-content-center fs-5" >
                            <span>Checkout</span><span class="material-symbols-outlined ms-2">
                                arrow_forward
                            </span></Link>}
                    </button>
                </div>
            </div>


        </>
    )
}

export default Myorder