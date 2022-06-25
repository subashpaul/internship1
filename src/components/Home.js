import React from 'react'
import ListItem from './ListItem'
import Menu from './Menu'
import Myorder from './Myorder'

export default function Home(props) {
    // const [name, setName] = useState(new Map());


    return (
        <div className='row'>
            <div className="col-md-2 bgcol d-none d-md-block" style={{ position: 'relative', height: '61rem' }}>

                <ListItem />
            </div>
            <div className="dishes col-md mt-4 pb-4 d-flex flex-column" >
                <div className="row">
                    <div className="col-md-12">
                        <p className='text-end'><span className="fw-light">Sort by:</span> <span className="fw-bold me-2">Recommended</span></p>

                    </div>
                </div>

                {/* <br /> */}
                <div className="row">
                    <div className="col-md-12 mt-1" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Menu name='Cabage salad' price={15.00} bg={'linear-gradient(to right, #ff9966, #ff5e40)'} setOrder={props.setOrder} />
                        < Menu name='Noodle salad' price={11.46} bg={'linear-gradient(to right, #1c92d2, #f2fcfe)'} setOrder={props.setOrder} />
                        <Menu name='Vegetable mix' price={14.6} bg={'linear-gradient(to right, #ef4b16, #ffffff)'} setOrder={props.setOrder} />
                        <Menu name='Seafood soup' price={10.32} bg={`linear-gradient(to right, #4ac29a, #bdfff3)`} setOrder={props.setOrder} />
                        <Menu name='Bean soup' price={11.32} bg={'linear-gradient(to right, #d66d75, #e29587)'} setOrder={props.setOrder} />
                        <Menu name='Stewed vegetable' price={12.54} bg={'linear-gradient(to right, #6190e8, #a7bfe8)'} setOrder={props.setOrder} />
                        <Menu name='Carrot mix' price={25.20} bg={'linear-gradient(to right, #ff9966, #ff5e40)'} setOrder={props.setOrder} />
                        <Menu name='Chicken soup' price={22.40} bg={'linear-gradient(to right, #1c92d2, #f2fcfe)'} setOrder={props.setOrder} />
                        <Menu name='Carrot mix' price={25.28} bg={'linear-gradient(to right, #ef4b16, #ffffff)'} setOrder={props.setOrder} />
                        <Menu name='Seafood soup' price={10.32} bg={`linear-gradient(to right, #4ac29a, #bdfff3)`} setOrder={props.setOrder} />
                        <Menu name='Roast potatoes' price={33.20} bg={'linear-gradient(to right, #d66d75, #e29587)'} setOrder={props.setOrder} />
                        <Menu name='Seafood soup' price={10.32} bg={'linear-gradient(to right, #6190e8, #a7bfe8)'} setOrder={props.setOrder} />
                    </div>
                </div>





            </div>
            <div className="col-md-4 mt-md-4 me-md-2">
                {/* <Myorder
                name={name} price={price} 
                /> */}
                <Myorder
                    dishes={props.dishes} totalPrice={props.totalPrice} handleQuantityIncrease={props.handleQuantityIncrease}
                    handleQuantityDecrease={props.handleQuantityDecrease}
                />
            </div>
        </div >
    )
}
