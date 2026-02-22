import React, { useState } from 'react';

const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: "2,250", oldPrice: "2,850", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", tag: "Hot", stock: 5 },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: "650", oldPrice: "950", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", tag: "Best Seller", stock: 12 },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: "1,150", oldPrice: "1,600", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500", tag: "Sale", stock: 3 },
  { id: 4, name: "Baseus GaN5 Pro Fast Charger", price: "2,800", oldPrice: "3,500", img: "/images/Baseus GaN5 Pro Fast Charger.jpg", tag: "New", stock: 4 },
  { id: 5, name: "Mechanical Gaming Keyboard", price: "3,200", oldPrice: "4,500", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", tag: "Gamers Choice", stock: 2 },
  { id: 6, name: "20,000mAh Power Bank", price: "2,450", oldPrice: "3,200", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500", tag: "Travel Essential", stock: 7 },
  { id: 7, name: "Mini WiFi IP Camera", price: "1,850", oldPrice: "2,500", img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500", tag: "Security", stock: 6 },
  { id: 8, name: "Portable Air Fryer 4L", price: "6,500", oldPrice: "8,500", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500", tag: "Kitchen Tech", stock: 3 },
  { id: 9, name: "Smart Health Ring", price: "4,200", oldPrice: "6,000", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=500", tag: "2026 Trend", stock: 5 },
  { id: 10, name: "Electric Kettle (Stainless)", price: "1,450", oldPrice: "2,100", img: "/images/Electric Kettle.jpg", tag: "Home Basic", stock: 4 }
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const myNumber = "8801745872364"; // Corrected Number

  const handleWhatsApp = (pName) => {
    const msg = `Hi! I want to buy the ${pName} from BD Trend Store. Is it in stock?`;
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(msg)}`);
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', fontFamily: 'system-ui', paddingBottom: '100px' }}>
      
      {/* FLASH SALE BANNER */}
      <div style={{ backgroundColor: '#e53e3e', color: 'white', textAlign: 'center', padding: '10px', fontWeight: 'bold', fontSize: '14px' }}>
        ⚡ FLASH SALE: Free Delivery in Dhaka for the next 2 hours! 🚚
      </div>

      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '25px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: '0 0 10px' }}>🛒 BD Trend Store</h1>
        <p style={{ margin: '0 0 15px', fontSize: '14px', color: '#cbd5e0' }}>Hotline: 01745872364</p>
        <input 
          type="text" 
          placeholder="Search gadgets (Watch, Charger...)" 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '90%', maxWidth: '400px', padding: '12px', borderRadius: '30px', border: 'none', outline: 'none' }}
        />
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {filteredProducts.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '230px', objectFit: 'cover', backgroundColor: '#eee' }} />
              <span style={{ position: 'absolute', top: '10px', right: '10px', backgroundColor: '#e53e3e', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{p.tag}</span>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '17px', margin: '0 0 10px', color: '#2d3748' }}>{p.name}</h3>
              
              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#2f855a' }}>৳ {p.price}</span>
                <span style={{ fontSize: '16px', color: '#a0aec0', textDecoration: 'line-through', marginLeft: '10px' }}>৳ {p.oldPrice}</span>
              </div>
              
              <p style={{ fontSize: '13px', color: '#e53e3e', fontWeight: 'bold', marginBottom: '15px' }}>🔥 Only {p.stock} left in stock!</p>
              
              <button onClick={() => handleWhatsApp(p.name)} style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '13px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
                Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Chat Bubble */}
      <div onClick={() => window.open(`https://wa.me/${myNumber}`)} style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', width: '65px', height: '65px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', cursor: 'pointer', zIndex: 1000, fontSize: '32px' }}>
        💬
      </div>
    </div>
  );
}

export default App;