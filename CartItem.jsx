import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (costStr) => parseFloat(costStr.replace('$', ''));

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + (parseCost(item.cost) * item.quantity), 0);
  };

  const calculateSubtotal = (item) => parseCost(item.cost) * item.quantity;

  return (
    <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{textAlign: 'center'}}>Tu Carrito de Compras</h1>
      <h3 style={{textAlign: 'right'}}>Total General: ${calculateTotalAmount()}</h3>
      
      {cart.map(item => (
        <div key={item.name} style={{display: 'flex', border: '1px solid #eee', padding: '15px', marginBottom: '10px', borderRadius: '8px', alignItems: 'center'}}>
          <img src={item.image} alt={item.name} style={{width: '100px', height: '100px', objectFit: 'cover', marginRight: '20px'}} />
          <div style={{flex: 1}}>
            <h3>{item.name}</h3>
            <p>Precio Unitario: {item.cost}</p>
            <div>
              <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: Math.max(0, item.quantity - 1)}))}>-</button>
              <span style={{margin: '0 10px'}}>{item.quantity}</span>
              <button onClick={() => dispatch(updateQuantity({name: item.name, quantity: item.quantity + 1}))}>+</button>
            </div>
            <p><strong>Subtotal: ${calculateSubtotal(item)}</strong></p>
            <button onClick={() => dispatch(removeItem(item.name))} style={{color: 'red', border: 'none', background: 'none', cursor: 'pointer'}}>Eliminar</button>
          </div>
        </div>
      ))}

      <div style={{marginTop: '30px', display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={onContinueShopping} style={{padding: '10px 20px'}}>Continuar Comprando</button>
        <button onClick={() => alert('Próximamente disponible')} style={{padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none'}}>Pagar</button>
      </div>
    </div>
  );
};
export default CartItem;