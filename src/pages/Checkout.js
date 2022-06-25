import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import food from '../images/food.png'
import Counter from '../components/Counter'
const Checkout = (props) => {
    return (
        <>
            <div className="row container">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-12">
                            <button type="button" className="btn btn-primary my-3 d-flex align-items-center bgcol"
                                style={{ '--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': ".75rem" }}>
                                <span className="material-symbols-outlined">
                                    arrow_back
                                </span> &nbsp;<b>


                                    <Link to='/' className='nav-link'>

                                        Continue Shopping
                                    </Link>
                                    {/* {<Link to='/' className="nav-link" >Checkout</Link>} */}

                                </b>
                            </button>
                        </div>
                        <hr />
                        <div className="col">
                            <h3 className='ms-2'>Shopping cart</h3>
                            <div className="card mt-md-5 mt-3 container" style={{ width: '100%' }}>
                                <ul className="list-group list-group-flush qty1">
                                    {props.dishes[0] === undefined ? <li className="list-group-item pt-5 pb-4 text-bold fw-bold">Select an item</li> : props.dishes.map((item, i) => {
                                        return (

                                            <li key={i} className="list-group-item py-4 fw-bold"><div className='d-flex justify-content-between align-items-center'>
                                                <img src={food} className="foodorder" alt="..." />
                                                <span className="fs-sm-4">
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
                                                <span className="fs-sm-3">
                                                    ${item.itemPrice}</span></div></li>
                                        )
                                    })}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 offset-md-1 mt-3 mt-md-0">
                    <h1 className='text-md- center '> Grand Total</h1>
                    <hr />
                    <h1 className='text-center'>${Number(props.totalPrice).toFixed(2)}</h1>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary bgcol  mt-2 d-flex justify-content-center align-items-center" type="button">
                            <span className="material-symbols-outlined me-3">
                                payments
                            </span><span className='fs-4'>Payments</span>

                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout