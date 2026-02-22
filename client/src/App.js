import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: 2250, oldPrice: 2850, img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", tag: "Hot", stock: 5 },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: 650, oldPrice: 950, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", tag: "Best Seller", stock: 12 },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: 1150, oldPrice: 1600, img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500", tag: "Sale", stock: 3 },
  { id: 4, name: "Baseus GaN5 Pro Fast Charger", price: 2800, oldPrice: 3500, img: "/images/Baseus GaN5 Pro Fast Charger.jpg", tag: "New", stock: 4 },
  { id: 10, name: "Electric Kettle (Stainless)", price: 1450, oldPrice: 2100, img: "/images/Electric Kettle.jpg", tag: "Home Basic", stock: 4 }
];

const customerReviews = [
  { id: 1, name: "Ariful Islam", city: "Dhaka", text: "M10 earbuds er sound quality darun! delivery o fast chilo.", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, name: "Sadiya Rahman", city: "Sylhet", text: "Original product peyechi. Packaging khub bhalo chilo.", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, name: "Kamrul Hasan", city: "Chittagong", text: "Baseus charger ta best. Recommended shop!", rating: "⭐⭐⭐⭐" }
];

const videoReviews = [
  { id: 1, title: "M10 TWS In-Depth Bangla Review", embedId: "95F1yrI-B68" }, 
  { id: 2, title: "M10 Wireless Earbuds Features", embedId: "WLWbamNLTRo" }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const myNumber = "8801745872364";

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const calculateTotal = () => cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    const itemsList = cart.map(item => `- ${item.name} (৳${item.price})`).join('\n');
    const msg = `Hi BD Trend Store! I want to order:\n${itemsList}\n\nTotal: ৳${calculateTotal()}\nIs this available?`;
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(msg)}`);
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', fontFamily: 'system-ui' }}>
      
      {/* Banner & Header */}
      <div style={{ backgroundColor: '#e53e3e', color: 'white', textAlign: 'center', padding: '10px', fontWeight: 'bold' }}>
        ⚡ FLASH SALE: Free Delivery in Dhaka! 🚚
      </div>

      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '20px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1>🛒 BD Trend Store</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
          <input 
            type="text" 
            placeholder="Search gadgets..." 
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '70%', maxWidth: '400px', padding: '10px', borderRadius: '25px', border: 'none' }}
          />
          <button onClick={() => setIsCartOpen(!isCartOpen)} style={{ padding: '10px 20px', borderRadius: '25px', backgroundColor: '#3182ce', color: 'white', border: 'none', cursor: 'pointer' }}>
             Cart ({cart.length})
          </button>
        </div>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div style={{ position: 'fixed', right: 0, top: 0, height: '100%', width: '300px', backgroundColor: 'white', boxShadow: '-2px 0 10px rgba(0,0,0,0.2)', zIndex: 200, padding: '20px' }}>
          <button onClick={() => setIsCartOpen(false)} style={{ float: 'right', border: 'none', background: 'none', fontSize: '20px' }}>×</button>
          <h3>Your Shopping Cart</h3>
          {cart.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.name}</span>
              <span>৳{item.price}</span>
            </div>
          ))}
          <h4 style={{ marginTop: '20px' }}>Total: ৳{calculateTotal()}</h4>