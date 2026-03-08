import React, { useState } from 'react';

const App = () => {
  const [status, setStatus] = useState('SECURE');
  
  const handleTransfer = async () => {
    setStatus('PROCESSING...');
    const res = await fetch('https://final-boss-ohhn.onrender.com/transfer', { method: 'POST' });
    const data = await res.text();
    alert("Transaction Locked: " + data);
    setStatus('SECURE');
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px', fontFamily: 'Arial' }}>
      <nav style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between' }}>
        <h2 style={{ color: '#1a73e8', margin: 0 }}>NCT TRUST BANK</h2>
        <span>Status: <b style={{ color: 'green' }}>{status}</b></span>
      </nav>
      <div style={{ maxWidth: '400px', margin: '50px auto', backgroundColor: '#fff', padding: '30px', borderRadius: '12px', textAlign: 'center' }}>
        <h3>Account Balance</h3>
        <h1 style={{ fontSize: '48px' }}>/data/data/com.termux/files/usr/bin/bash.00</h1>
        <button onClick={handleTransfer} style={{ width: '100%', padding: '15px', backgroundColor: '#1a73e8', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          Transfer to Vault
        </button>
      </div>
    </div>
  );
};

export default App;
