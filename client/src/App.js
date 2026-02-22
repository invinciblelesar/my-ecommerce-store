import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-url.vercel.app/api/products') // You'll update this later
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>BD Trend Store</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {products.map(p => (
          <div key={p.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <h3>{p.name}</h3>
            <p>৳ {p.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;