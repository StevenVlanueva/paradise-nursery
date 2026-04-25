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
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters formaldehyde.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", description: "Removes mold spores.", cost: "$18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114414_1280.jpg", description: "Adds humidity naturally.", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Large, air-cleaning leaves.", cost: "$25" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283100_1280.jpg", description: "Purifies air and heals burns.", cost: "$10" }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1565011666445-3e3b092892a2", description: "Calming scent.", cost: "$20" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Fragrant herb.", cost: "$15" },
                { name: "Mint", image: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469", description: "Fresh and cooling.", cost: "$10" },
                { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2015/10/02/12/03/lemon-balm-968412_1280.jpg", description: "Citrusy aroma.", cost: "$12" },
                { name: "Thyme", image: "https://cdn.pixabay.com/photo/2016/08/13/16/32/thyme-1591040_1280.jpg", description: "Earthly scent.", cost: "$14" },
                { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2017/07/17/17/34/jasmine-2513220_1280.jpg", description: "Sweet floral aroma.", cost: "$22" }
            ]
        },
        {
            category: "Easy Care",
            plants: [
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/pothos-3816940_1280.jpg", description: "Tough and beautiful.", cost: "$14" },
                { name: "ZZ Plant", image: "https://cdn.pixabay.com/photo/2021/08/21/11/50/flowerpot-6562590_1280.jpg", description: "Thrives in low light.", cost: "$25" },
                { name: "Jade Plant", image: "https://cdn.pixabay.com/photo/2016/06/19/20/46/jade-plant-1467610_1280.jpg", description: "Symbol of luck.", cost: "$18" },
                { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2014/11/05/15/57/foliage-518042_1280.jpg", description: "Indestructible.", cost: "$30" },
                { name: "Philodendron", image: "https://cdn.pixabay.com/photo/2018/06/09/17/09/philodendron-3464734_1280.jpg", description: "Heart-shaped leaves.", cost: "$16" },
                { name: "Chinese Evergreen", image: "https://cdn.pixabay.com/photo/2020/03/01/15/30/aglaonema-4893144_1280.jpg", description: "Beautiful patterns.", cost: "$24" }
            ]
        }
    ];

    return (
        <div>
            {/* Navbar completa como pide la Pregunta 6 */}
            <nav className="navbar">
                <div className="nav-links">
                    <a onClick={() => window.location.reload()}>Home</a>
                    <a onClick={() => setShowCart(false)}>Plants</a>
                    <a onClick={() => setShowCart(true)}>Cart ({totalItems})</a>
                </div>
            </nav>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((cat, i) => (
                        <div key={i}>
                            <h2 className="category-title">{cat.category}</h2>
                            <div className="plants-container">
                                {cat.plants.map((plant, j) => (
                                    <div key={j} className="plant-card">
                                        <img src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p><strong>{plant.cost}</strong></p>
                                        <button 
                                            disabled={cart.some(item => item.name === plant.name)}
                                            onClick={() => dispatch(addItem(plant))}>
                                            {cart.some(item => item.name === plant.name) ? "Added" : "Add to Cart"}
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