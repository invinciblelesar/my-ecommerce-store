import React, { useState, useEffect } from 'react';

// 1. DATA SECTION
const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: 2250, oldPrice: 2850, img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", stock: 5 },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: 650, oldPrice: 950, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", stock: 12 },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: 1150, oldPrice: 1600, img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500", stock: 3 },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: 2800, oldPrice: 3500, img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500", stock: 8 }
];

const videoReviews = [
  { id: 1, title: "M10 TWS In-Depth Bangla Review", embedId: "95F1yrI-B68" }, 
  { id: 2, title: "M10 Wireless Earbuds Features", embedId: "WLWbamNLTRo" }
];

// 2. MAIN COMPONENT
export default function App() {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Rahat Ibrahim", text: "Product quality is 10/10. Received the charger in Dhaka within 24 hours!", rating: 5 },
    { id: 2, name: "Nusrat Jahan", text: "Ordered the smartwatch. Original product and very helpful support.", rating: 5 }
  ]);
  
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState("5");
  const myNumber = "8801745872364";

  const addReview = (e) => {
    e.preventDefault();
    if (!newName || !newText) return alert("Please fill all fields!");
    const freshReview = { id: Date.now(), name: newName, text: newText, rating: parseInt(newRating) };
    setReviews([freshReview, ...reviews]);
    setNewName(""); setNewText("");
  };

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{ backgroundColor: '#1a202c', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>🛒 BD Trend Store</h1>
        <p style={{ fontSize: '12px', opacity: 0.8 }}>Premium Electronics • Cash on Delivery</p>
      </nav>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', padding: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '15px' }}>
              <h3 style={{ fontSize: '16px' }}>{p.name}</h3>
              <p style={{ color: '#2f855a', fontWeight: 'bold', fontSize: '20px' }}>৳{p.price}</p>
              <button 
                onClick={() => window.open(`https://wa.me/${myNumber}?text=Order: ${p.name}`)} 
                style={{ width: '100%', backgroundColor: '#25D366', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Videos */}
      <div style={{ backgroundColor: '#e2e8f0', padding: '50px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>📹 Watch Before You Buy</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          {videoReviews.map(v => (
            <div key={v.id} style={{ width: '100%', maxWidth: '450px' }}>
              <iframe 
                width="100%" 
                height="250" 
                src={`https://www.youtube.com/embed/${v.embedId}`} 
                title={v.title} 
                frameBorder="0" 
                allowFullScreen 
                style={{ borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
              ></iframe>
              <p style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>{v.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Review Form */}
      <div style={{ maxWidth: '500px', margin: '40px auto', padding: '25px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h3 style={{ textAlign: 'center' }}>Customer Review Form</h3>
        <form onSubmit={addReview} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input type="text" placeholder="Your Name" value={newName} onChange={(e) => setNewName(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }} />
          <textarea placeholder="Tell us about the product..." value={newText} onChange={(e) => setNewText(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd', height: '100px' }} />
          <select value={newRating} onChange={(e) => setNewRating(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #ddd' }}>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
          </select>
          <button type="submit" style={{ padding: '12px', backgroundColor: '#3182ce', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Post Review</button>
        </form>
      </div>

      {/* Review Display */}
      <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center' }}>Real Feedback</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
          {reviews.map(r => (
            <div key={r.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '15px', width: '300px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#f6ad55', marginBottom: '10px' }}>{"⭐".repeat(r.rating)}</div>
              <p style={{ fontStyle: 'italic', color: '#4a5568' }}>"{r.text}"</p>
              <strong style={{ color: '#2d3748' }}>- {r.name}</strong>
            </div>
          ))}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '40px', backgroundColor: '#1a202c', color: 'white', marginTop: '50px' }}>
        <p>© 2026 BD Trend Store | Elephant Road, Dhaka</p>
        <p>WhatsApp: {myNumber}</p>
      </footer>

    </div>
  );
}