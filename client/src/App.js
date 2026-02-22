import React, { useState } from 'react';

// 1. Updated Product Data
const products = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: 2250, img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: 650, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: 1150, img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },
  { id: 4, name: "Baseus 65W GaN Fast Charger", price: 2800, img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500" }
];

// 2. Your New Review Videos
const videoReviews = [
  { id: 1, title: "M10 TWS In-Depth Bangla Review", embedId: "95F1yrI-B68" }, 
  { id: 2, title: "M10 Wireless Earbuds Features", embedId: "WLWbamNLTRo" }
];

function App() {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Rahat Ibrahim", text: "Product quality is 10/10. Received the charger in Dhaka within 24 hours!", rating: 5 },
    { id: 2, name: "Nusrat Jahan", text: "Ordered the smartwatch. Original product and very helpful support.", rating: 5 },
    { id: 3, name: "Tanvir Ahmed", text: "Lowest price in BD for the Kemei trimmer. Very satisfied with COD service.", rating: 4 }
  ]);
  
  const [newName, setNewName] = useState("");
  const [newText, setNewText] = useState("");
  const [newRating, setNewRating] = useState("5");
  const myNumber = "0174587364";

  const addReview = (e) => {
    e.preventDefault();
    if (!newName || !newText) return alert("Please fill out all fields!");
    const freshReview = { id: Date.now(), name: newName, text: newText, rating: parseInt(newRating) };
    setReviews([freshReview, ...reviews]);
    setNewName(""); setNewText("");
    alert("Thank you! Your review has been posted.");
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      
      {/* Header */}
      <nav style={{ backgroundColor: '#1e293b', color: 'white', padding: '25px', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '28px' }}>🛒 BD Trend Store</h1>
        <p style={{ margin: '5px 0 0', fontSize: '14px', opacity: 0.8 }}>Premium Electronics • Cash on Delivery • Order: {myNumber}</p>
      </nav>

      {/* Product Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        {products.map(p => (
          <div key={p.id} style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center', transition: 'transform 0.2s' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', color: '#1e293b', marginBottom: '10px' }}>{p.name}</h3>
              <p style={{ color: '#059669', fontWeight: 'bold', fontSize: '22px', marginBottom: '15px' }}>৳ {p.price}</p>
              <button 
                onClick={() => window.open(`https://wa.me/88${myNumber}?text=I want to order: ${p.name}`)} 
                style={{ width: '100%', backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}
              >
                Order via WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Video Reviews Section */}
      <div style={{ backgroundColor: '#f1f5f9', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '40px' }}>📹 Watch Before You Buy</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
          {videoReviews.map(v => (
            <div key={v.id} style={{ width: '100%', maxWidth: '500px', backgroundColor: 'white', padding: '15px', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
              <iframe 
                width="100%" 
                height="280" 
                src={`https://www.youtube.com/embed/${v.embedId}`} 
                title={v.title} 
                frameBorder="0" 
                allowFullScreen 
                style={{ borderRadius: '12px' }}
              ></iframe>
              <p style={{ textAlign: 'center', fontWeight: '600', marginTop: '15px', color: '#334155' }}>{v.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Combined Review Section */}
      <div style={{ maxWidth: '1000px', margin: '60px auto', padding: '0 20px' }}>
        <h2 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '40px' }}>What Our Customers Say</h2>
        
        {/* Review Form */}
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', marginBottom: '50px' }}>
          <h3 style={{ marginTop: 0, marginBottom: '20px', fontSize: '20px' }}>Leave a Review</h3>
          <form onSubmit={addReview} style={{ display: 'grid', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <input type="text" placeholder="Your Name" value={newName} onChange={(e) => setNewName(e.target.value)} style={{ flex: 1, minWidth: '200px', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              <select value={newRating} onChange={(e) => setNewRating(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', backgroundColor: 'white' }}>
                <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                <option value="4">⭐⭐⭐⭐ (Good)</option>
                <option value="3">⭐⭐⭐ (Average)</option>
              </select>
            </div>
            <textarea placeholder="Write your experience with our products..." value={newText} onChange={(e) => setNewText(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', height: '100px', resize: 'vertical' }} />
            <button type="submit" style={{ padding: '14px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' }}>Submit Review</button>
          </form>
        </div>

        {/* Review List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {reviews.map(r => (
            <div key={r.id} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '15px', borderTop: '4px solid #3b82f6', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ color: '#fbbf24', fontSize: '18px', marginBottom: '10px' }}>{"⭐".repeat(r.rating)}</div>
              <p style={{ fontStyle: 'italic', color: '#475569', lineHeight: '1.6', marginBottom: '15px' }}>"{r.text}"</p>
              <strong style={{ color: '#1e293b' }}>— {r.name}</strong>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#1e293b', color: 'white', marginTop: '80px' }}>
        <p style={{ margin: 0 }}>© 2026 BD Trend Store. All Rights Reserved.</p>
        <p style={{ margin: '10px 0 0', opacity: 0.7 }}>Elephant Road, Dhaka, Bangladesh | WhatsApp: {myNumber}</p>
      </footer>

    </div>
  );
}

export default App;