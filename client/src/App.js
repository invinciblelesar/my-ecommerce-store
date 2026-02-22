import React, { useState } from 'react';

const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: "2,250", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", tag: "Hot" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: "650", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", tag: "Best Seller" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: "1,150", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500", tag: "Sale" },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: "2,800", img: "https://images.unsplash.com/photo-1619130700003-8d631393663a?w=500", tag: "New" },
  { id: 5, name: "Mechanical Gaming Keyboard", price: "3,200", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", tag: "Gamers Choice" },
  { id: 6, name: "20,000mAh Power Bank", price: "2,450", img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500", tag: "Travel Essential" },
  { id: 7, name: "Mini WiFi IP Camera", price: "1,850", img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500", tag: "Security" },
  { id: 8, name: "Portable Air Fryer 4L", price: "6,500", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500", tag: "Kitchen Tech" },
  { id: 9, name: "Smart Health Ring", price: "4,200", img: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500", tag: "2026 Trend" },
  { id: 10, name: "Electric Kettle (Stainless)", price: "1,450", img: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?w=500", tag: "Home Basic" }
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

  const openGeneralChat = () => {
    const msg = "Hi! I have a question about your products.";
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(msg)}`);
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', fontFamily: 'system-ui', paddingBottom: '80px' }}>
      {/* Header & Search */}
      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '25px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: '0 0 10px' }}>🛒 BD Trend Store</h1>
        <input 
          type="text" 
          placeholder="Search products..." 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '90%', maxWidth: '400px', padding: '12px', borderRadius: '30px', border: 'none' }}
        />
      </nav>

      {/* Product List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {filteredProducts.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '220px', objectFit: 'cover', backgroundColor: '#eee' }} />
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '18px', margin: '0 0 10px' }}>{p.name}</h3>
              <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#38a169', marginBottom: '15px' }}>৳ {p.price}</p>
              <button onClick={() => handleWhatsApp(p.name)} style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Order via WhatsApp</button>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials */}
      <div style={{ backgroundColor: '#edf2f7', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>What Our Customers Say</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {reviews.map(r => (
            <div key={r.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', maxWidth: '300px' }}>
              <p style={{ fontSize: '14px', fontStyle: 'italic' }}>"{r.text}"</p>
              <h4 style={{ margin: '10px 0 5px' }}>{r.name}</h4>
              <span>{r.rating}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Live Chat Bubble */}
      <div 
        onClick={openGeneralChat}
        style={{ position: 'fixed', bottom: '25px', right: '25px', backgroundColor: '#25D366', color: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', cursor: 'pointer', zIndex: 1000, fontSize: '30px' }}
        title="Chat with us"
      >
        💬
      </div>

      <footer style={{ textAlign: 'center', padding: '30px', color: '#718096' }}>
        © 2026 BD Trend Store. Trusted by 5,000+ customers.
      </footer>
    </div>
  );
}

export default App;