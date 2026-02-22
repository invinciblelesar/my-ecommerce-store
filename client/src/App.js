import React, { useState } from 'react';

// 1. Full 10-Product Inventory
const allProducts = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: 2250, img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: 650, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: 1150, img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },
  { id: 4, name: "Baseus GaN5 Pro Fast Charger", price: 2800, img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500" },
  { id: 5, name: "Smart Health Ring", price: 4200, img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500" },
  { id: 6, name: "Electric Kettle (Stainless)", price: 1450, img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500" },
  { id: 7, name: "Premium Leather Wallet", price: 950, img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
  { id: 8, name: "Magnetic Power Bank 10000mAh", price: 1850, img: "https://images.unsplash.com/photo-1609592424089-983350438317?w=500" },
  { id: 9, name: "Foldable Laptop Stand", price: 750, img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" },
  { id: 10, name: "LED RGB Desk Lamp", price: 1250, img: "https://images.unsplash.com/photo-1534073828943-f801091bb240?w=500" }
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [reviews, setReviews] = useState([
    { id: 1, name: "Rahat Ibrahim", text: "Product quality is 10/10!", rating: 5 },
    { id: 2, name: "Nusrat Jahan", text: "Fast delivery and great support.", rating: 5 }
  ]);
  
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState("5");
  const myNumber = "0174587364";

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    const itemsList = cart.map(item => `- ${item.name} (৳${item.price})`).join('\n');
    const msg = `Hi BD Trend Store! I want to order:\n${itemsList}\n\nTotal: ৳${calculateTotal()}`;
    window.open(`https://wa.me/88${myNumber}?text=${encodeURIComponent(msg)}`);
  };

  const addReview = (e) => {
    e.preventDefault();
    if (!newName || !newText) return;
    const freshReview = { id: Date.now(), name: newName, text: newText, rating: parseInt(newRating) };
    setReviews([freshReview, ...reviews]);
    setNewName(""); setNewText("");
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Search & Cart Navbar */}
      <nav style={{ backgroundColor: '#0f172a', color: 'white', padding: '20px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: '0 0 15px 0' }}>🛒 BD Trend Store</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="Search all 10 products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '60%', padding: '12px', borderRadius: '25px', border: 'none', outline: 'none' }}
          />
          <button onClick={() => setIsCartOpen(true)} style={{ padding: '10px 20px', borderRadius: '25px', backgroundColor: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
             Cart ({cart.length})
          </button>
        </div>
      </nav>

      {/* Shopping Cart Sidebar */}
      {isCartOpen && (
        <div style={{ position: 'fixed', right: 0, top: 0, height: '100%', width: '320px', backgroundColor: 'white', boxShadow: '-5px 0 15px rgba(0,0,0,0.1)', zIndex: 200, padding: '25px' }}>
          <button onClick={() => setIsCartOpen(false)} style={{ float: 'right', border: 'none', background: 'none', fontSize: '28px', cursor: 'pointer' }}>×</button>
          <h2 style={{ borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>Your Cart</h2>
          <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
            {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map((item, index) => (
              <div key={index} style={{ borderBottom: '1px solid #f1f5f9', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
                <span>{item.name}</span>
                <strong>৳{item.price}</strong>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '20px', borderTop: '2px solid #f1f5f9', paddingTop: '10px' }}>
            <h3>Total: ৳{calculateTotal()}</h3>
            <button onClick={handleCheckout} style={{ width: '100%', padding: '15px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
              Confirm via WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Product Display (Filters by Search) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
        {allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', color: '#1e293b' }}>{p.name}</h3>
              <p style={{ color: '#059669', fontWeight: 'bold', fontSize: '22px', margin: '10px 0' }}>৳ {p.price}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button onClick={() => addToCart(p)} style={{ backgroundColor: '#3b82f6', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>Add to Cart</button>
                <button onClick={() => window.open(`https://wa.me/88${myNumber}?text=Quick Order: ${p.name}`)} style={{ backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>Direct WhatsApp</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <div style={{ maxWidth: '800px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Customer Feedback</h2>
        <form onSubmit={addReview} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
            <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} style={{ flex: 1, padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            <select value={newRating} onChange={(e) => setNewRating(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <option value="5">⭐⭐⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
            </select>
          </div>
          <textarea placeholder="Write your review..." value={newText} onChange={(e) => setNewText(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', height: '100px', marginBottom: '15px', boxSizing: 'border-box' }} />
          <button type="submit" style={{ width: '100%', padding: '12px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Submit Review</button>
        </form>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '40px', justifyContent: 'center' }}>
          {reviews.map(r => (
            <div key={r.id} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', width: '280px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#fbbf24', marginBottom: '10px' }}>{"⭐".repeat(r.rating)}</div>
              <p style={{ fontStyle: 'italic', color: '#475569' }}>"{r.text}"</p>
              <strong>- {r.name}</strong>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '60px', backgroundColor: '#0f172a', color: 'white', marginTop: '60px' }}>
        <p>© 2026 BD Trend Store | Elephant Road, Dhaka</p>
        <p>WhatsApp Hotline: {myNumber}</p>
      </footer>
    </div>
  );
}

export default App;