import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Plantas de Interior",
            plants: [
                { name: "Serpiente", image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32", cost: "$15" },
                { name: "Poto", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d", cost: "$12" }
            ]
        },
        {
            category: "Plantas Aromáticas",
            plants: [
                { name: "Lavanda", image: "https://images.unsplash.com/photo-1565011666445-3e3b092892a2", cost: "$20" },
                { name: "Menta", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469", cost: "$10" }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({ ...prevState, [product.name]: true }));
    };

    return (
        <div style={{padding: '20px'}}>
            <h1>Catálogo de Plantas</h1>
            {plantsArray.map((category, index) => (
                <div key={index}>
                    <h2>{category.category}</h2>
                    <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
                        {category.plants.map((plant, i) => (
                            <div key={i} style={{border: '1px solid #ddd', padding: '10px', borderRadius: '8px', width: '200px'}}>
                                <img src={plant.image} alt={plant.name} style={{width: '100%'}} />
                                <h3>{plant.name}</h3>
                                <p>{plant.cost}</p>
                                <button 
                                    disabled={addedToCart[plant.name]} 
                                    onClick={() => handleAddToCart(plant)}>
                                    {addedToCart[plant.name] ? "En el carrito" : "Agregar"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;