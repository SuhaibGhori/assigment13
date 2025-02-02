import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Carddetails = () => {
  const { id } = useParams(); 
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    getSingleData();
  }, [id]); 

  const getSingleData = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProductData(res.data);
    } catch (error) {
      alert("Error fetching product details: " + error.message);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '20px' }}>
      {productData ? (
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            maxWidth: '800px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
            backgroundColor: '#f9f9f9'
          }}
        >
          <div style={{ flex: '1', textAlign: 'center' }}>
            <img 
              src={productData.image} 
              alt={productData.title} 
              style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '10px' }} 
            />
          </div>

          <div style={{ flex: '2', textAlign: 'left', padding: '10px' }}>
            <h1 style={{ fontSize: '22px', color: '#333', marginBottom: '10px' }}>{productData.title}</h1>
            <h3 style={{ fontSize: '16px', color: '#777' }}>Category: {productData.category}</h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>{productData.description}</p>
            <h4 style={{ fontSize: '18px', color: '#28a745', fontWeight: 'bold', margin: '10px 0' }}>Price: ${productData.price}</h4>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#555' }}>Loading...</p>
      )}
    </div>
  );
};

export default Carddetails;
