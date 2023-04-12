// //import React, { useContext } from "react";
// // import { PRODUCTS } from "../../products";
// // //import { ShopContext } from "../../shop-context";
// // //import { PRODUCTS } from "../../products";
// // //import { CartItem } from "./cart-item";
// // //import { useNavigate } from "react-router-dom";

// // export const Checkout = () => {
// // const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
// // const form = document.getElementById('checkout-form')
// // const inputCard = document.querySelector('#inputCard')
// // const alertTrigger = document.getElementById('submit-btn')
// // const summaryCard = document.querySelector('.card')
// // const summaryList = document.querySelector('.card > ul')



// // var order = { name: '', email: '', card: '' }
// //   return(
  
    
//     <div classname="checkout">
      

//       <div class="col-md-6">
//             <label for="inputName" class="form-label">Full Name</label>
//             <input type="text" class="form-control" id="inputName"></input>
           
//           </div>

//           <div class="col-md-6">
//             <label for="inputEmail4" class="form-label">Email</label>
//             <input type="email" class="form-control" id="inputEmail4"></input>
//               </div>


//               <div class="col-md-6">
//             <label for="inputCard" class="form-label">Card</label>
//             <div class="input-group mb-3">
//               <span class="input-group-text" id="basic-addon1"><i class="bi-credit-card-fill"></i></span>
//               <input type="text" id="inputCard" class="form-control" placeholder="XXXX-XXXX-XXXX-XXXX"
//                 aria-label="Username" aria-describedby="basic-addon1"></input>
//                 </div>
//                 </div>

//                 <div class="col-12">
//             <label for="inputAddress" class="form-label">Address</label>
//             <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
//           </div>
//           <div class="col-12">
//             <label for="inputAddress2" class="form-label">Address 2</label>
//             <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
//           </div>
//           <div class="col-md-6">
//             <label for="inputCity" class="form-label">City</label>
//             <input type="text" class="form-control" id="inputCity"></input>
//           </div>
//           <div class="col-md-2">
//             <label for="inputZip" class="form-label">Zip</label>
//             <input type="text" class="form-control" id="inputZip"></input>
//           </div>
//           <div class="col-12">
//             <button type="submit" class="btn btn-success"> <i class="bi-bag-check"></i> Order</button>
//           </div>
//     </div>




    
    
// //   )
  
// // }

// import React, { useContext } from "react";
// import { ShopContext } from "../../shop-context";
// import { PRODUCTS } from "../../products";
// import { CartItem } from "./cart-item";
// import { useNavigate } from "react-router-dom";

// import "./cart.css";
// export const Cart = () => {
//   const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
//   const totalAmount = getTotalCartAmount();

//   const navigate = useNavigate();

//   return (
//     <div className="cart">
//       <div>
//         <h1>Your Cart Items</h1>
//       </div>
//       <div className="cart">
//         {PRODUCTS.map((product) => {
//           if (cartItems[product.id] !== 0) {
//             return <CartItem data={product} />;
//           }
//         })}
//       </div>

//       {totalAmount > 0 ? (
//         <div className="checkout">
//           <p> Subtotal: ${totalAmount} </p>
//           <button onClick={() => navigate("/")}> Continue Shopping </button>
//           {/* <button
//             onClick={() => {
//               //goToCheckout();
//               navigate("/checkout.html");
//             }}
//           >
//             {""}
//             Checkout{" "}
//           </button> */}
//           <button onClick={() => navigate("/checkout")}> Checkout </button>

//         </div>
//       ) : (
//         <h1> Your Shopping Cart is Empty</h1>
//       )}
//     </div>
//   );
// };
