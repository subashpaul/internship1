import React from 'react'
import food from "../images/food.png";
const Menu = (props) => {
    return (
        <>
            <div className="card mb-4 d-flex flex-column align-items-start" style={{ width: "9.79rem", height: "11.6rem", background: `${props.bg}` }} onClick={() => props.setOrder(props.name, undefined, props.price)}>
                <span className="badge rounded-pill text-bg-primary" style={{ width: "4rem" }}>
                    $ {props.price}
                </span>
                <img src={food} className="card-img-top foodimg" alt="..." />
                <div className="card-body ">
                    <p className="card-text mt-2">{props.name}<br /> <b>$ {props.price}</b> </p>
                </div>
            </div>
        </ >
    )
}

export default Menu