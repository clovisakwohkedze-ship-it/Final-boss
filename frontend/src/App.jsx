import React, { useState } from 'react';

const App = () => {
  const [status, setStatus] = useState('SECURE');
  
  const handleTransfer = async () => {
    setStatus('PROCESSING...');
    try {
      const res = await fetch('https://final-boss-ohhn.onrender.com/transfer', { method: 'POST' });
      const data = await res.text();
      alert("NCT Vault Handshake: " + data);
      setStatus('SECURE');
    } catch (e) {
      alert("Connection Error");
      setStatus('OFFLINE');
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ color: '#2563eb', margin: 0, fontWeight: '800' }}>NCT TRUST BANK</h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: status === 'SECURE' ? '#22c55e' : '#ef4444' }}></div>
          <span style={{ fontSize: '14px', fontWeight: '600' }}>{status}</span>
        </div>
      </nav>

      <div style={{ maxWidth: '450px', margin: '60px auto', backgroundColor: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '8px' }}>PRIMARY ASSET VAULT</p>
        <h1 style={{ fontSize: '56px', fontWeight: '800', margin: '0 0 32px 0', color: '#1e293b' }}>/data/data/com.termux/files/usr/bin/bash.00</h1>
        
        <button 
          onClick={handleTransfer}
          style={{ width: '100%', padding: '18px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '14px', fontSize: '16px', fontWeight: '700', cursor: 'pointer' }}
        >
          {status === 'PROCESSING...' ? 'Encrypting...' : 'Initiate Secure Transfer'}
        </button>
      </div>
    </div>
  );
};

export default App;
