import React, { useState, useEffect } from 'react';

const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: "2,250", oldPrice: "2,850", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", tag: "Hot", stock: 5 },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: "650", oldPrice: "950", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", tag: "Best Seller", stock: 12 },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: "1,150", oldPrice: "1,600", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500", tag: "Sale", stock: 3 },
  { id: 4, name: "Baseus GaN5 Pro Fast Charger", price: "2,800", oldPrice: "3,500", img: "/images/Baseus GaN5 Pro Fast Charger.jpg", tag: "New", stock: 4 },
  { id: 5, name: "Mechanical Gaming Keyboard", price: "3,200", oldPrice: "4,500", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", tag: "Gamers Choice", stock: 2 },
  { id: 10, name: "Electric Kettle (Stainless)", price: "1,450", oldPrice: "2,100", img: "/images/Electric Kettle.jpg", tag: "Home Basic", stock: 4 }
];

const videoReviews = [
  { id: 1, title: "Colmi P71 Full Review", embedId: "dQw4w9WgXcQ", platform: "youtube" }, // Replace with real YouTube IDs
  { id: 2, title: "M10 TWS Sound Test", embedId: "dQw4w9WgXcQ", platform: "youtube" }
];

const cities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Gazipur", "Narayanganj"];

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState(null);
  const myNumber = "8801745872364";

  useEffect(() => {
    const interval = setInterval(() => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setNotification({ product: randomProduct.name, city: randomCity });
      setTimeout(() => setNotification(null), 5000);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsApp = (pName) => {
    const msg = `Hi! I want to buy the ${pName} from BD Trend Store. Is it in stock?`;
    window.open(`https://wa.me/${myNumber}?text=${encodeURIComponent(msg)}`);
  };

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', fontFamily: 'system-ui', paddingBottom: '100px' }}>
      
      <div style={{ backgroundColor: '#e53e3e', color: 'white', textAlign: 'center', padding: '10px', fontWeight: 'bold', fontSize: '14px' }}>
        ⚡ FLASH SALE: Free Delivery in Dhaka for the next 2 hours! 🚚
      </div>

      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '25px', textAlign: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: '0 0 10px' }}>🛒 BD Trend Store</h1>
        <p style={{ margin: '0 0 15px', fontSize: '14px', color: '#cbd5e0' }}>Hotline: 01745872364</p>
        <input 
          type="text" 
          placeholder="Search gadgets..." 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '90%', maxWidth: '400px', padding: '12px', borderRadius: '30px', border: 'none', outline: 'none' }}
        />
      </nav>

      {/* PRODUCTS SECTION */}
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
              <p style={{ fontSize: '13px', color: '#e53e3e', fontWeight: 'bold', marginBottom: '15px' }}>🔥 Only {p.stock} left!</p>
              <button onClick={() => handleWhatsApp(p.name)} style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '13px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>
                Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* VIDEO REVIEW SECTION */}
      <div style={{ padding: '50px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#1a202c' }}>📹 Watch Before You Buy</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' }}>
          {videoReviews.map(video => (
            <div key={video.id} style={{ backgroundColor: 'black', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 15px rgba(0,0,0,0.2)' }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src={`https://www.youtube.com/embed/${video.embedId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div style={{ padding: '15px', color: 'white', textAlign: 'center', fontWeight: 'bold' }}>{video.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* NOTIFICATION */}
      {notification && (
        <div style={{ position: 'fixed', bottom: '20px', left: '20px', backgroundColor: 'white', padding: '15px', borderRadius: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.2)', borderLeft: '5px solid #25D366', zIndex: 2000, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ fontSize: '20px' }}>✅</div>
          <div>
            <p style={{ margin: 0, fontSize: '12px', color: '#718096' }}>Recent Order</p>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Someone in {notification.city}</p>
            <p style={{ margin: 0, fontSize: '13px' }}>just bought {notification.product}</p>
          </div>
        </div>
      )}

      {/* Floating Chat */}
      <div onClick={() => window.open(`https://wa.me/${myNumber}`)} style={{ position: 'fixed', bottom: '30px', right: '30px', backgroundColor: '#25D366', width: '65px', height: '65px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.3)', cursor: 'pointer', zIndex: 1000, fontSize: '32px' }}>
        💬
      </div>

    </div>
  );
}

export default App;