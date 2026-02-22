import React, { useState } from 'react';

// 1. DATA
const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: 2250, oldPrice: 2850, img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: 650, oldPrice: 950, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: 1150, oldPrice: 1600, img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: 2800, oldPrice: 3500, img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500" }
];

const videoReviews = [
  { id: 1, title: "M10 TWS In-Depth Bangla Review", embedId: "95F1yrI-B68" }, 
  { id: 2, title: "M10 Wireless Earbuds Features", embedId: "WLWbamNLTRo" }
];

// 2. APP LOGIC
function App() {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Rahat Ibrahim", text: "Product quality is 10/10!", rating: 5 },
    { id: 2, name: "Nusrat Jahan", text: "Fast delivery in Dhaka.", rating: 5 }
  ]);
  
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState("5");
  const myNumber = "8801745872364";

  const addReview = (e) => {
    e.preventDefault();
    if (!newName || !newText) return;
    const freshReview = { id: Date.now(), name: newName, text: newText, rating: parseInt(newRating) };
    setReviews([freshReview, ...reviews]);
    setNewName(""); setNewText("");
  };

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>🛒 BD Trend Store</h1>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '30px' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3 style={{ fontSize: '16px' }}>{p.name}</h3>
              <p style={{ color: '#2f855a', fontWeight: 'bold' }}>৳{p.price}</p>
              <button onClick={() => window.open(`https://wa.me/${myNumber}?text=Order: ${p.name}`)} style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer' }}>WhatsApp Order</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ backgroundColor: '#e2e8f0', padding: '40px 20px' }}>
        <h2 style={{ textAlign: 'center' }}>📹 Watch Before You Buy</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {videoReviews.map(v => (
            <div key={v.id} style={{ width: '100%', maxWidth: '400px' }}>
              <iframe width="100%" height="220" src={`https://www.youtube.com/embed/${v.embedId}`} title={v.title} frameBorder="0" allowFullScreen style={{ borderRadius: '15px' }}></iframe>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', backgroundColor: 'white', borderRadius: '15px' }}>
        <h3 style={{ textAlign: 'center' }}>Add a Review</h3>
        <form onSubmit={addReview} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" placeholder="Name" value={newName} onChange={(e) => setNewName(e.target.value)} style={{ padding: '10px' }} />
          <textarea placeholder="Review" value={newText} onChange={(e) => setNewText(e.target.value)} style={{ padding: '10px' }} />
          <button type="submit" style={{ padding: '10px', backgroundColor: '#3182ce', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>

      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#1a202c', color: 'white' }}>
        <p>© 2026 BD Trend Store | WhatsApp: {myNumber}</p>
      </footer>
    </div>
  );
}

export default App; // Ensure this is ONLY here once