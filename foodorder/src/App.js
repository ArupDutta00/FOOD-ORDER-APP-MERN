import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import "./App.css"
import Home from "./Component/Home.js"
import Cart from "./Component/Cart.js"
import Pizza from "./Component/Pizza.js"
import Burger from "./Component/Burger.js"

function App() {
  const [curentdata, setdata] = useState([]);
  useEffect(() => {
    onLoad();
    showCart();
  }, [])

  const [cart, setcart] = useState([]);

  function orderNow(value) {
    const additem = {
      name: value.name,
      price: value.price,
      description: value.description,
      image: value.image
    }
    axios.post('/addcartitem', additem)
    showCart();
  }

  function onLoad() {
    axios.get('/getdata').then((res) => {
      setdata(res.data.results);
      console.log(res.data.results)
    });
  }

  function showCart() {
    axios.get('/getcart').then((res) => {
      setcart(res.data)
    })
  }

  function removeItem(value) {
    const data = {
      _id: value._id
    }
    axios.delete('/deleteitem', { data })
    showCart();
  }

  function removeAll() {
    axios.delete('/alldelete')
    showCart();
  }

  return (
    <Router>
      <div id="header">
        <NavLink id="navbar" to="/">Food Ordering Portal</NavLink>
        <NavLink id="cart" to="/cart"><img alt="" src="https://res.cloudinary.com/katlisko/image/upload/v1619199240/food%20order/126083_j7odq2.png" width="20"></img> ({cart.length})</NavLink>
      </div>
      <Switch>
        <Route exact path="/" component={() => <Home getdata={curentdata} />} />
        <Route exact path="/cart" component={() => <Cart cartdata={cart} deleteItem={removeItem} clearCart={removeAll} />} />
        <Route exact path="/pizza" component={() => <Pizza getdata={curentdata} addItem={orderNow} />} />
        <Route exact path="/burger" component={() => <Burger getdata={curentdata} addItem={orderNow} />} />
      </Switch>
    </Router>
  );
}

export default App;