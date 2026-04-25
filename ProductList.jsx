import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';

function ProductList() {
    const dispatch = useDispatch();
    const [showCart, setShowCart] = useState(false);
    const cart = useSelector(state => state.cart.items);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const plantsArray = [
        {
            category: "Plantas de Aire Puro",
            plants: [
                { name: "Serpiente", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", description: "Produce oxígeno de noche.", cost: "$15" },
                { name: "Lirio de Paz", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355", description: "Filtra toxinas del aire.", cost: "$18" }
            ]
        },
        {
            category: "Plantas Aromáticas",
            plants: [
                { name: "Lavanda", image: "https://images.unsplash.com/photo-1565011666445-3e3b092892a2", description: "Calma y relajación.", cost: "$20" },
                { name: "Menta", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469", description: "Refrescante y deliciosa.", cost: "$10" }
            ]
        },
        {
            category: "Suculentas",
            plants: [
                { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921", description: "Propiedades medicinales.", cost: "$12" },
                { name: "Cactus de Navidad", image: "https://images.unsplash.com/photo-1509423358714-41aa55fb7858", description: "Flores hermosas.", cost: "$14" }
            ]
        }
    ];

    return (
        <div>
            <nav className="navbar">
                <div className="nav-links">
                    <a onClick={() => window.location.reload()}>Inicio</a>
                    <a onClick={() => setShowCart(false)}>Plantas</a>
                </div>
                <div className="cart-icon" onClick={() => setShowCart(true)}>
                    🛒 <span className="cart-count">{totalItems}</span>
                </div>
            </nav>

            {!showCart ? (
                <div style={{padding: '20px'}}>
                    {plantsArray.map((cat, i) => (
                        <div key={i}>
                            <h2 style={{textAlign: 'center', color: '#2d6a4f'}}>{cat.category}</h2>
                            <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
                                {cat.plants.map((plant, j) => (
                                    <div key={j} style={{border: '1px solid #ddd', margin: '15px', padding: '15px', borderRadius: '10px', width: '250px'}}>
                                        <img src={plant.image} alt={plant.name} style={{width: '100%', borderRadius: '5px'}} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p><strong>{plant.cost}</strong></p>
                                        <button 
                                            disabled={cart.some(item => item.name === plant.name)}
                                            onClick={() => dispatch(addItem(plant))}
                                            style={{backgroundColor: cart.some(item => item.name === plant.name) ? 'grey' : '#4CAF50', color: 'white', border: 'none', padding: '10px', width: '100%', cursor: 'pointer'}}>
                                            {cart.some(item => item.name === plant.name) ? "En el carrito" : "Agregar"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}
export default ProductList;