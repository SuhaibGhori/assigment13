import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    userdata();
  }, []);

  const userdata = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    } catch (error) {
      alert("Error fetching users: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: '100px auto', textAlign: 'center', padding: 20 }}>
      <h2 style={{ marginBottom: 20, color: '#333' }}>User List</h2>

      {data && data.map((e) => (
        <div key={e.id} style={{ marginBottom: 20, padding: 20, border: '1px solid #ddd', borderRadius: 10, boxShadow: '0px 0px 10px rgba(0,0,0,0.1)', backgroundColor: `#f9f9f9` }}>
          <h3 style={{ margin: '5px 0', color: '#007bff' }}>{e.name}</h3>
          <h5 style={{ margin: '5px 0', color: '#555' }}>@{e.username}</h5>
          <h6 style={{ margin: '5px 0', color: '#777' }}>{e.email}</h6>
          <button
            onClick={() => navigate(`/users/${e.id}`)}
            style={{ padding: '8px 16px', fontSize: 14, cursor: 'pointer', border: 'none', borderRadius: 5, backgroundColor: '#28a745', color: 'white', marginTop: 10 }}
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default User;
