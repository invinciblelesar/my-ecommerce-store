import React from 'react';

// Reliable 2026 Trending Product Data
const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: "2,250", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=500&q=80", tag: "Hot" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: "650", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80", tag: "Best Seller" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: "1,150", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=500&q=80", tag: "Sale" },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: "2,800", img: "https://images.unsplash.com/photo-1619130700003-8d631393663a?auto=format&fit=crop&w=500&q=80", tag: "New" }
];

function App() {
  const handleWhatsApp = (pName) => {
    // UPDATED WITH YOUR NUMBER: 0174587364
    const phone = "880174587364"; 
    const msg = `Hi! I want to buy the ${pName} from BD Trend Store. Is it in stock?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
  };
  
  // ... rest of your return code remains the same

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Header */}
      <nav style={{ backgroundColor: '#2c3e50', color: 'white', padding: '15px 20px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '24px' }}>🇧🇩 BD Trend Store</h1>
        <p style={{ margin: '5px 0 0', fontSize: '12px', opacity: 0.8 }}>Genuine Gadgets • Cash on Delivery • Fast Shipping</p>
      </nav>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#e74c3c', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>{p.tag}</span>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '220px', objectFit: 'contain', backgroundColor: '#fff', borderBottom: '1px solid #eee' }} />
            <div style={{ padding: '15px' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 10px', color: '#333', height: '40px', overflow: 'hidden' }}>{p.name}</h3>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#27ae60', margin: '0 0 15px' }}>৳ {p.price}</p>
              <button 
                onClick={() => handleWhatsApp(p.name)}
                style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px', color: '#7f8c8d', fontSize: '13px' }}>
        <p>© 2026 BD Trend Store. Trusted by 5,000+ customers.</p>
      </footer>
    </div>
  );
}

export default App;