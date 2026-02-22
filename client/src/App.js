import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: 2250, oldPrice: 2850, img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", tag: "Hot" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: 650, oldPrice: 950, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", tag: "Best Seller" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: 1150, oldPrice: 1600, img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500", tag: "Sale" },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: 2800, oldPrice: 3500, img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500", tag: "New" }
];

const customerReviews = [
  { id: 1, name: "Rahat Ibrahim", text: "Product quality is 10/10. Received the charger in Dhaka within 24 hours!", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, name: "Nusrat Jahan", text: "Ordered the smartwatch. Original product and very helpful WhatsApp support.", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, name: "Tanvir Ahmed", text: "Lowest price in BD for the Kemei trimmer. Very satisfied with COD service.", rating: "⭐⭐⭐⭐⭐" }
];

// UPDATED VIDEO SECTION WITH CORRECT EMBED IDs
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
  };

  const calculateTotal = () => cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    const itemsList = cart.map(item => `- ${item.name} (৳${item.price})`).join('\n');
    const msg = `Hi BD Trend Store! I want to order:\n${itemsList}\n\nTotal: ৳${calculateTotal()}\nIs this available?`;
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Header */}
      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '20px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1>🛒 BD Trend Store</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
          <input 
            type="text" 
            placeholder="Search products..." 
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '60%', padding: '10px', borderRadius: '25px', border: 'none' }}
          />
          <button onClick={() => setIsCartOpen(true)} style={{ padding: '10px 15px', borderRadius: '25px', backgroundColor: '#3182ce', color: 'white', border: 'none', cursor: 'pointer' }}>
             Cart ({cart.length})
          </button>
        </div>
      </nav>

      {/* Cart Sidebar */}
      {isCartOpen && (
        <div style={{ position: 'fixed', right: 0, top: 0, height: '100%', width: '300px', backgroundColor: 'white', boxShadow: '-2px 0 10px rgba(0,0,0,0.2)', zIndex: 200, padding: '20px' }}>
          <button onClick={() => setIsCartOpen(false)} style={{ float: 'right', border: 'none', background: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
          <h3>Your Shopping Cart</h3>
          {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item, index) => (
            <div key={index} style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.name}</span>
              <strong>৳{item.price}</strong>
            </div>
          ))}
          <h4 style={{ marginTop: '20px' }}>Total: ৳{calculateTotal()}</h4>
          <button onClick={handleCheckout} style={{ width: '100%', padding: '15px', backgroundColor: '#25D366', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer' }}>
            Checkout via WhatsApp
          </button>
        </div>
      )}

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '30px' }}>
        {products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3>{p.name}</h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#2f855a' }}>৳{p.price}</p>
              <button onClick={() => addToCart(p)} style={{ width: '100%', backgroundColor: '#3182ce', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', marginBottom: '5px', cursor: 'pointer' }}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Reviews - UPDATED */}
      <div style={{ backgroundColor: '#edf2f7', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📹 Watch Before You Buy</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          {videoReviews.map(v => (
            <div key={v.id}>
              <iframe 
                width="100%" 
                height="220" 
                src={`https://www.youtube.com/embed/${v.embedId}`} 
                title={v.title} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                style={{ borderRadius: '15px' }}
              ></iframe>
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>{v.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div style={{ padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>What Our Customers Say</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {customerReviews.map(r => (
            <div key={r.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', width: '300px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
              <p>"{r.text}"</p>
              <strong>{r.name}</strong>
              <div style={{ color: '#f6ad55' }}>{r.rating}</div>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ backgroundColor: '#1a202c', color: 'white', padding: '20px', textAlign: 'center' }}>
        <p>© 2026 BD Trend Store. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;