import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "./CartSlice";

function CartItem() {

  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>

      <h2>Shopping Cart</h2>

      {cart.map((item) => (

        <div key={item.id}>

          <img src={item.image} alt={item.name} width="80"/>

          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>

          {item.quantity}

          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>

          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>

        </div>

      ))}

      <h3>Total Cart Amount: ${totalAmount}</h3>

      <button>Checkout (Coming Soon)</button>

      <button>Continue Shopping</button>

    </div>
  );
}

export default CartItem;