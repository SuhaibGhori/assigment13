import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const [usedata, setUsedata] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setUsedata(res.data);
    } catch (error) {
      alert("Error fetching products: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: '1200px', margin: '100px auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '20px', color: '#333' }}>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {usedata &&
          usedata.map((e) => (
            <div
              key={e.id}
              style={{
                width: '250px',
                padding: '15px',
                border: '1px solid #ddd',
                borderRadius: '10px',
                boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
                backgroundColor: '#f9f9f9',
                textAlign: 'center'
              }}
            >
              <img src={e.image} alt={e.title} style={{ width: '100%', height: '200px', objectFit: 'contain', borderRadius: '10px' }} />
              <h3 style={{ fontSize: '16px', color: '#333', margin: '10px 0' }}>{e.title.length > 40 ? `${e.title.slice(0, 40)}...` : e.title}</h3>
              <h5 style={{ fontSize: '14px', color: '#777', margin: '5px 0' }}>{e.category}</h5>
              <h6 style={{ fontSize: '16px', color: '#28a745', fontWeight: 'bold', margin: '5px 0' }}>${e.price.toFixed(2)}</h6>
              <button
                onClick={() => navigate(`/products/${e.id}`)}
                style={{
                  padding: '8px 16px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  marginTop: '10px'
                }}
              >
                View
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Card;
