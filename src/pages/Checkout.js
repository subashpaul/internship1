import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
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
                                </b>
                            </button>
                        </div>
                        <hr />
                        <div className="col">
                            <h3>Shopping cart</h3>
                            <div className="card mt-5 container" style={{ width: "30rem" }}>
                                <ul className="list-group list-group-flush">
                                    {props.dishes[0] === undefined ? <li className="list-group-item pt=5 pb-4 text-bold fw-bold">Select an item</li> : props.dishes.map((item, i) => {
                                        return (
                                            <li key={i} className="list-group-item pt=5 pb-4   fw-bold"><p className='d-flex justify-content-between'><span className="text-start">
                                                {item.slice(0, -6)}</span>  <Counter counter={props.counter} increase={props.increase} decrease={props.decrease} reset={props.reset} /><span className="text-end">
                                                    {item.slice(-6)}</span></p></li>)
                                    })}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 offset-md-1">
                    <h1 className='text-center'>Total</h1>
                    <hr />
                    <h1>${props.totalPrice}</h1>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary bgcol" type="button">Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout