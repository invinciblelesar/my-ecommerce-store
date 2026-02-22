import React from 'react';

// Trending Products for Bangladesh 2026
const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: "2,250", img: "https://www.startech.com.bd/image/cache/catalog/smart-watch/colmi/p71/p71-black-01-500x500.webp", tag: "Hot" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: "650", img: "https://m.media-amazon.com/images/I/516999F06EL._SL1000_.jpg", tag: "Best Seller" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: "1,150", img: "https://m.media-amazon.com/images/I/61l0iX-3t2L._SL1500_.jpg", tag: "Sale" },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: "2,800", img: "https://m.media-amazon.com/images/I/51-P9M7E2rL._AC_SL1500_.jpg", tag: "New" }
];

function App() {
  const handleWhatsApp = (pName) => {
    const phone = "8801XXXXXXXXX"; // 👈 PUT YOUR REAL NUMBER HERE
    const msg = `Hi! I want to buy the ${pName} from BD Trend Store. Is it in stock?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
  };

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