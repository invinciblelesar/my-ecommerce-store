import React from 'react';

const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: "2,250", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=500&q=80", tag: "Hot" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: "650", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80", tag: "Best Seller" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: "1,150", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=500&q=80", tag: "Sale" },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: "2,800", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=500&q=80", tag: "New" },
  { id: 5, name: "Mechanical Gaming Keyboard", price: "3,200", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=500&q=80", tag: "Gamers Choice" },
  { id: 6, name: "20,000mAh Power Bank", price: "2,450", img: "https://images.unsplash.com/photo-1609592424089-7360a77e2311?auto=format&fit=crop&w=500&q=80", tag: "Travel Essential" },
  { id: 7, name: "Mini WiFi IP Camera", price: "1,850", img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?auto=format&fit=crop&w=500&q=80", tag: "Security" },
  { id: 8, name: "Portable Air Fryer 4L", price: "6,500", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=500&q=80", tag: "Kitchen Tech" },
  { id: 9, name: "Smart Health Ring", price: "4,200", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=500&q=80", tag: "2026 Trend" },
  { id: 10, name: "Electric Kettle (Stainless)", price: "1,450", img: "https://images.unsplash.com/photo-1594212699903-ec8a3ecc50f1?auto=format&fit=crop&w=500&q=80", tag: "Home Basic" }
];

function App() {
  const handleWhatsApp = (pName) => {
    const phone = "880174587364"; 
    const msg = `Hi! I want to buy the ${pName} from BD Trend Store. Is it in stock?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`);
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '20px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 1000 }}>
        <h1 style={{ margin: 0, letterSpacing: '1px' }}>🛒 BD Trend Store</h1>
        <p style={{ margin: '5px 0 0', color: '#cbd5e0' }}>Premium Electronics • Cash on Delivery • Order: 0174587364</p>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', padding: '40px', maxWidth: '1300px', margin: '0 auto' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', transition: 'transform 0.2s' }}>
            <div style={{ position: 'relative' }}>
               <img src={p.img} alt={p.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
               <span style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: '#fed7d7', color: '#c53030', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>{p.tag}</span>
            </div>
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '18px', color: '#2d3748', marginBottom: '10px' }}>{p.name}</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#2f855a', margin: '0 0 20px' }}>৳ {p.price}</p>
              <button 
                onClick={() => handleWhatsApp(p.name)}
                style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '14px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
                Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;