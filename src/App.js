import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Menu from './components/Menu';
import Navbar from './components/Navbar'
import '../src/App.css'
import Checkout from './pages/Checkout';
export default function App() {
  const [dishes, setDishes] = useState([
    // {itemName:'Select an item',quantity:0}
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [counter, setCounter] = useState(0);
  let updatePrice = 0;
  const setOrder = (na) => {
    // const newItem={
    //   itemName:
    // }
    setDishes(arr => [...arr, na]);

  }

  useEffect(() => {
    console.log(dishes)
    dishes.forEach(item => updatePrice += Number(item.slice(-5)));
    setTotalPrice(updatePrice);
    // console.log(totalPrice);

  }, [dishes])


  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  };

  //reset counter 
  const reset = () => {
    setCounter(0)
  }
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home setOrder={setOrder} dishes={dishes} totalPrice={totalPrice} counter={counter} increase={increase} decrease={decrease} reset={reset} />} />
          <Route exact path='/checkout' element={<Checkout dishes={dishes} totalPrice={totalPrice} counter={counter} increase={increase} decrease={decrease} reset={reset} />} />
          <Route exact path='/menu' element={<Menu />} />
        </Routes>
      </Router>
    </>


  )
}
