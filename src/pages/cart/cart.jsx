import React, { useContext } from "react";
import { ShopContext } from "../../shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout,showHideDiv } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  function displayEnteredText(){

    var inputText = document.getElementById("userinputinfo");
    alert("Thank You for your order!\n Name: nick pinnello\n Email: npin\n Card: 1212\n Address: 1234 main st.\n City: ames\n Zip: 50012");

  }

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() =>navigate('/') }> Continue Shopping </button>
          
          { <button onClick={() => showHideDiv()}> Checkout </button> }

        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
      <div classname="checkout" id = "userinfo" style ={{'display' : 'none'}} >
      

      <div class="col-md-6"id="userinfo"  >
            <label for="inputName" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="inputName"></input>
           
          </div>
  
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail4"></input>
              </div>
  
  
              <div class="col-md-6">
            <label for="inputCard" class="form-label">Card</label>
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"><i class="bi-credit-card-fill"></i></span>
              <input type="text" id="inputCard" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
                aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                </div>
  
                <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity"></input>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">Zip</label>
            <input type="text" class="form-control" id="inputZip"></input>
          </div>
          <div class="col-12">
          { <button onClick={() => displayEnteredText()}> Order </button> }
          </div>
          <div classname="checkout" id = "userinputinfo" style ={{'display' : 'none'}} >
   
    </div>
    </div>
    
    </div>
          


    

  );
};
