import React from 'react'
import { Link } from 'react-router-dom'
import food from "../images/food.png";

const Myorder = (props) => {
    return (
        <>
            <h4><b>My Order</b></h4>
            {/* <ul className="list-group list-group-flush mt-2 qty">
                <hr />

                {
                   for (const (key,value) of props.dishes) {
                    return(<li key={i} className="list-group-item pt=5 pb-4 fw-bold">{item.at(0)}</li>)
                   }

                        
                            
                        
                   
                }


            </ul> */}

            <ul className="list-group list-group-flush mt-2 qty">
                <hr />
                {props.dishes[0] === undefined ? <li className="list-group-item pt=5 pb-4 text-bold fw-bold">Select an item</li> : props.dishes.map((item, i) => {
                    return (<>

                        <li key={i} className="list-group-item pt=5 pb-4   fw-bold"><p className='d-flex justify-content-between align-items-center'>
                            <img src={food} className="foodorder" alt="..." />
                            <span className="">
                                {item.slice(0, -6)}</span>  <span className="">
                                {item.slice(-6)}</span></p></li>
                    </>)
                })}

            </ul>
            {/* <ul className="list-group list-group-flush mt-2 qty">
                <hr />
                <li className="list-group-item pb-3 ">{props.name} <span className='ms-5 mx-3'>-</span>|<span className='ms-3'>+</span></li>
                <li className="list-group-item pt=5 pb-4">A second item</li>
                <li className="list-group-item pt-3 pb-4">A third item</li>
                <li className="list-group-item pt-3 pb-4">A fourth item</li>
                <li className="list-group-item pt-3 pb-4">And a fifth one</li>
            </ul> */}
            <p className='dnd p-3'> Drag & Drop</p>
            <div className="total my-5">
                <h5>Total</h5>
                <h5><b>${props.totalPrice}</b></h5>
            </div>
            <div className="checkout">
                <button className='btn mybtn bgcol'>

                    {<Link to='/checkout' className="nav-link" >Checkout</Link>}
                </button>
            </div>

        </>
    )
}

export default Myorder