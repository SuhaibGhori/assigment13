import React, { useState } from 'react';
import axios from 'axios';

const Githubfinder = () => {
  const [username, setUsername] = useState("");
  const [userdata, setUserdata] = useState(null);

  const getdata = async () => {
    if (!username) return;

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserdata(response.data);
    } catch (err) {
      alert("Error fetching data: " + err.message);
      setUserdata(null);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '100px auto', textAlign: 'center', padding: 20, border: '1px solid #ddd', borderRadius: 10, boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
      <h2 style={{ marginBottom: 20, color: '#333' }}>GitHub User Finder</h2>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ width: '90%', padding: 10, fontSize: 16, border: '1px solid #ccc', borderRadius: 5, marginBottom: 10 }}
      />
      <br />
      <button
        onClick={getdata}
        style={{ padding: '10px 20px', fontSize: 16, cursor: 'pointer', border: 'none', borderRadius: 5, backgroundColor: '#007bff', color: 'white', marginBottom: 20 }}
      >
        Search
      </button>

      {userdata && (
        <div style={{ textAlign: 'center', padding: 20, border: '1px solid #ddd', borderRadius: 10, marginTop: 20, backgroundColor: '#f9f9f9' }}>
          <img src={userdata.avatar_url} alt={userdata.name} style={{ width: 100, borderRadius: '50%', marginBottom: 10 }} />
          <h3 style={{ margin: '10px 0', color: '#333' }}>{userdata.name || 'No Name Available'}</h3>
          <p style={{ color: '#555' }}>{userdata.bio || 'No Bio Available'}</p>
          <p><strong>Followers:</strong> {userdata.followers}</p>
          <p><strong>Following:</strong> {userdata.following}</p>
          <a
            href={userdata.html_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '8px 16px', marginTop: 10, textDecoration: 'none', backgroundColor: '#28a745', color: 'white', borderRadius: 5 }}
          >
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Githubfinder;
