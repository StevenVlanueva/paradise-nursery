import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (parseFloat(item.cost.substring(1)) * item.quantity), 0);
  };

  return (
    <div style={{padding: '20px'}}>
      <h2>Total del Carrito: ${calculateTotalAmount()}</h2>
      {cart.map(item => (
        <div key={item.name} style={{display: 'flex', borderBottom: '1px solid #ccc', padding: '10px', alignItems: 'center'}}>
          <img src={item.image} alt={item.name} style={{width: '80px', marginRight: '20px'}} />
          <div>
            <h3>{item.name}</h3>
            <p>Precio: {item.cost}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => dispatch(removeItem(item.name))}>Eliminar</button>
          </div>
        </div>
      ))}
      <button style={{marginTop: '20px'}} onClick={() => alert('¡Gracias por tu compra!')}>Pagar</button>
    </div>
  );
};

export default CartItem;