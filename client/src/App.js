import React, { useState } from 'react';

const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: "2,250", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", tag: "Hot", stock: 5 },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: "650", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", tag: "Best Seller", stock: 12 },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: "1,150", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500", tag: "Sale", stock: 3 },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: "2,800", img: "https://images.unsplash.com/photo-1619130700003-8d631393663a?w=500", tag: "New", stock: 4 },
  { id: 5, name: "Mechanical Gaming Keyboard", price: "3,200", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", tag: "Gamers Choice", stock: 2 },
  { id: 6, name: "20,000mAh Power Bank", price: "2,450", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500", tag: "Travel Essential", stock: 7 },
  { id: 7, name: "Mini WiFi IP Camera", price: "1,850", img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500", tag: "Security", stock: 6 },
  { id: 8, name: "Portable Air Fryer 4L", price: "6,500", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500", tag: "Kitchen Tech", stock: 3 },
  { id: 9, name: "Smart Health Ring", price: "4,200", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=500", tag: "2026 Trend", stock: 5 },
  { id: 10, name: "Electric Kettle (Stainless)", price: "1,450", img: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?w=500", tag: "Home Basic", stock: 4 }
];

const reviews = [
  { id: 1, name: "Rahat Ibrahim", text: "Product quality is 10/10. Received the charger in Dhaka within 24 hours!", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, name: "Nusrat Jahan", text: "Ordered the smartwatch. Original product and very helpful WhatsApp support.", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, name: "Tanvir Ahmed", text: "Lowest price in BD for the Kemei trimmer. Very satisfied with COD service.", rating: "⭐⭐⭐⭐" }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const myNumber = "880174587364";

  const handleWhatsApp = (pName) => {
    const msg = `Hi! I want to buy the ${pName} from BD Trend Store. Is it in stock?`;
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(msg)}`);
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', fontFamily: 'system-ui', paddingBottom: '100px' }}>
      {/* Header */}
      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '25px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: '0 0 10px' }}>🛒 BD Trend Store</h1>
        <input 
          type="text" 
          placeholder="Search products..." 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '90%', maxWidth: '400px', padding: '12px', borderRadius: '30px', border: 'none' }}
        />
      </nav>

      {/* Products */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {filteredProducts.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '220px', objectFit: 'cover', backgroundColor: '#eee' }} />
              <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#e53e3e', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{p.tag}</span>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '18px', margin: '0 0 10px' }}>{p.name}</h3>
              <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#2f855a', marginBottom: '5px' }}>৳ {p.price}</p>
              
              {/* STOCK COUNTER */}
              <p style={{ fontSize: '13px', color: p.stock < 5 ? '#e53e3e' : '#718096', fontWeight: 'bold', marginBottom: '15px' }}>
                {p.stock < 5 ? `🔥 Only ${p.stock} left in stock!` : `In Stock: ${p.stock} units`}
              </p>

              <button onClick={() => handleWhatsApp(p.name)} style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Order via WhatsApp</button>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div style={{ backgroundColor: '#edf2f7', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>What Our Customers Say</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {reviews.map(r => (
            <div key={r.id} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '12px', maxWidth: '300px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <p style={{ fontSize: '15px', fontStyle: 'italic', lineHeight: '1.6' }}>"{r.text}"</p>
              <h4 style={{ margin: '15px 0 5px' }}>{r.name}</h4>
              <span>{r.rating}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Chat */}
      <div onClick={() => window.open(`https://wa.me/${myNumber}`)} style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(0,0,0,0.2)', cursor: 'pointer', zIndex: 1000, fontSize: '30px' }}>
        💬
      </div>
    </div>
  );
}

export default App;