import React,{useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Checkout from "./Checkout.js";
import Login from "./Login.js";
import { auth } from "./firebase.js";
import { useStatevalue } from "./StateProvider";
import { Dialpad } from "@mui/icons-material";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise =loadStripe("pk_test_51MmzwSSFmR8x9OnW0gsUtbluI9H7j6oDq6J7tHOtWS5qZoM5AWhWbxh8CrnhUvcb1m4mRXbHcPGs132lSadVQG6700aCVELFKS");

function App() {
  const [{},dispatch]=useStatevalue();
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log("The user is :",authUser);

      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment/>
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
