import React, { useState } from 'react';

// 1. Expanded Product Data with Discounts & Categories
const allProducts = [
  { id: 1, name: "Colmi P71 Smartwatch (AMOLED)", price: 2250, oldPrice: 3500, category: "Wearables", img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500" },
  { id: 2, name: "M10 TWS Wireless Earbuds", price: 650, oldPrice: 1200, category: "Audio", img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500" },
  { id: 3, name: "Kemei KM-632 Hair Trimmer", price: 1150, oldPrice: 1800, category: "Personal Care", img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500" },
  { id: 4, name: "Baseus GaN5 Pro Fast Charger", price: 2800, oldPrice: 3800, category: "Accessories", img: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=500" },
  { id: 5, name: "Smart Health Ring", price: 4200, oldPrice: 6500, category: "Wearables", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500" },
  { id: 6, name: "Electric Kettle (Stainless)", price: 1450, oldPrice: 2200, category: "Home Appliances", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500" },
  { id: 7, name: "7-in-1 Keyboard Cleaning Kit", price: 250, oldPrice: 450, category: "Accessories", img: "https://images.unsplash.com/photo-1629429464245-458959b487d7?w=500" },
  { id: 8, name: "Anti-Blue Light Glasses", price: 376, oldPrice: 750, category: "Personal Care", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500" },
  { id: 9, name: "Fantech NS10 Laptop Stand", price: 2260, oldPrice: 2800, category: "Accessories", img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500" },
  { id: 10, name: "USB Mini Flexible Fan", price: 1000, oldPrice: 1100, category: "Gadgets", img: "https://images.unsplash.com/photo-1534073828943-f801091bb240?w=500" }
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const myNumber = "0174587364";

  const categories = ["All", "Wearables", "Audio", "Accessories", "Personal Care", "Home Appliances", "Gadgets"];

  const filteredProducts = allProducts.filter(p => 
    (activeCategory === "All" || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateDiscount = (old, current) => Math.round(((old - current) / old) * 100);

  return (
    <div style={{ backgroundColor: '#eff0f5', minHeight: '100vh', fontFamily: 'Roboto, sans-serif' }}>
      
      {/* Header (Daraz Style) */}
      <header style={{ backgroundColor: '#fff', padding: '15px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px', padding: '0 20px' }}>
          <h2 style={{ color: '#f57224', margin: 0, cursor: 'pointer' }}>BD TREND</h2>
          <div style={{ flex: 1, position: 'relative' }}>
            <input 
              type="text" 
              placeholder="Search in BD Trend Store" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '12px 20px', borderRadius: '2px', border: 'none', backgroundColor: '#eff0f5', outline: 'none' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
             <span style={{ fontSize: '24px', cursor: 'pointer' }}>🛒 <small>{cart.length}</small></span>
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '20px auto', display: 'flex', gap: '20px', padding: '0 20px' }}>
        
        {/* Sidebar Filters */}
        <aside style={{ width: '240px', display: 'none', '@media (minWidth: 768px)': { display: 'block' } }}>
          <div style={{ backgroundColor: 'white', padding: '15px', borderRadius: '2px' }}>
            <h4 style={{ marginTop: 0 }}>Category</h4>
            {categories.map(cat => (
              <p 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                style={{ cursor: 'pointer', color: activeCategory === cat ? '#f57224' : '#333', fontSize: '14px' }}
              >
                {cat}
              </p>
            ))}
          </div>
        </aside>

        {/* Product List */}
        <main style={{ flex: 1 }}>
          <div style={{ marginBottom: '15px', fontSize: '14px', color: '#757575' }}>
            {filteredProducts.length} items found for "{searchTerm || activeCategory}"
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(188px, 1fr))', gap: '12px' }}>
            {filteredProducts.map(p => (
              <div key={p.id} style={{ backgroundColor: 'white', cursor: 'pointer', transition: 'box-shadow 0.3s' }} onMouseOver={e => e.currentTarget.style.boxShadow='0 2px 15px rgba(0,0,0,0.1)'} onMouseOut={e => e.currentTarget.style.boxShadow='none'}>
                <div style={{ position: 'relative' }}>
                  <img src={p.img} alt={p.name} style={{ width: '100%', height: '188px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 0, right: 0, backgroundColor: '#f57224', color: 'white', padding: '2px 5px', fontSize: '12px' }}>
                    -{calculateDiscount(p.oldPrice, p.price)}%
                  </div>
                </div>
                <div style={{ padding: '10px' }}>
                  <h4 style={{ fontSize: '14px', height: '36px', overflow: 'hidden', margin: '0 0 8px 0', fontWeight: 'normal', lineHeight: '18px' }}>{p.name}</h4>
                  <p style={{ color: '#f57224', fontSize: '18px', margin: 0 }}>৳ {p.price.toLocaleString()}</p>
                  <p style={{ margin: '5px 0', fontSize: '12px' }}>
                    <span style={{ textDecoration: 'line-through', color: '#9e9e9e' }}>৳ {p.oldPrice.toLocaleString()}</span>
                  </p>
                  <button 
                    onClick={() => window.open(`https://wa.me/88${myNumber}?text=Order: ${p.name}`)}
                    style={{ width: '100%', border: '1px solid #f57224', backgroundColor: 'transparent', color: '#f57224', padding: '5px', marginTop: '10px', cursor: 'pointer' }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#2e2e2e', color: 'white', padding: '40px 0', marginTop: '50px', textAlign: 'center' }}>
        <p>© 2026 BD Trend Store | Top Selling Gadgets BD</p>
      </footer>
    </div>
  );
}

export default App;