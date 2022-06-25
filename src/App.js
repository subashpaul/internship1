import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Menu from './components/Menu';
import Navbar from './components/Navbar'
import '../src/App.css'
import Checkout from './pages/Checkout';



export default function App() {
  const [dishes, setDishes] = useState([
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  let updatePrice = 0;

  const setOrder = (na, qty = 1, price) => {
    const newItem = {
      itemName: na,
      quantity: qty,
      itemPrice: price
    }
    setDishes(arr => [...arr, newItem]);

  }

  useEffect(() => {
    // console.log(dishes)
    dishes.forEach(item => updatePrice += (item.quantity * item.itemPrice))
    // dishes.forEach(item => console.log(item))
    setTotalPrice(updatePrice);
    // console.log(totalPrice);

  }, [dishes])



    //increase counter
    ;
  const handleQuantityIncrease = (index) => {
    const newItems = [...dishes];

    newItems[index].quantity++;

    setDishes(newItems);
    // updatePrice += (newItems[index].quantity * newItems[index].itemPrice);
    // setTotalPrice(updatePrice)
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...dishes];

    newItems[index].quantity--;

    setDishes(newItems);
  };

  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home setOrder={setOrder} dishes={dishes} totalPrice={totalPrice} handleQuantityIncrease={handleQuantityIncrease}
            handleQuantityDecrease={handleQuantityDecrease} />} />
          <Route exact path='/checkout' element={<Checkout dishes={dishes} totalPrice={totalPrice}
            handleQuantityIncrease={handleQuantityIncrease}
            handleQuantityDecrease={handleQuantityDecrease}
          />} />
          <Route exact path='/menu' element={<Menu />} />
        </Routes>
      </Router>
    </>


  )
}
