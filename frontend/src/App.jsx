import React, { useState } from 'react';

const App = () => {
  const [status, setStatus] = useState('SECURE');
  const [showPopup, setShowPopup] = useState(false);
  const [refId, setRefId] = useState('');

  const handleTransfer = async () => {
    setStatus('PROCESSING...');
    const newRef = 'NCT-' + Math.random().toString(36).toUpperCase().substring(2, 10);
    setRefId(newRef);
    
    try {
      const res = await fetch('https://final-boss-ohhn.onrender.com/transfer', { method: 'POST' });
      await res.text();
      setShowPopup(true);
      setStatus('SECURE');
    } catch (e) {
      alert("Encryption Handshake Failed");
      setStatus('OFFLINE');
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: '#2563eb', margin: 0, fontWeight: '800' }}>NCT TRUST BANK</h2>
        <span style={{ fontSize: '14px', fontWeight: '600', color: status === 'SECURE' ? '#22c55e' : '#ef4444' }}>● {status}</span>
      </nav>

      <div style={{ maxWidth: '450px', margin: '60px auto', backgroundColor: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <p style={{ color: '#64748b', fontSize: '14px' }}>PRIMARY ASSET VAULT</p>
        <h1 style={{ fontSize: '56px', fontWeight: '800', margin: '10px 0 30px 0' }}>/data/data/com.termux/files/usr/bin/bash.00</h1>
        <button onClick={handleTransfer} style={{ width: '100%', padding: '18px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: '700', cursor: 'pointer' }}>
          {status === 'PROCESSING...' ? 'Encrypting...' : 'Initiate Secure Transfer'}
        </button>
      </div>

      {showPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center', maxWidth: '300px' }}>
            <div style={{ color: '#22c55e', fontSize: '50px', marginBottom: '10px' }}>✓</div>
            <h3 style={{ margin: '0 0 10px 0' }}>Transfer Successful</h3>
            <p style={{ color: '#64748b', fontSize: '14px' }}>Ref ID: <b>{refId}</b></p>
            <button onClick={() => setShowPopup(false)} style={{ marginTop: '20px', padding: '10px 20px', border: 'none', backgroundColor: '#f1f5f9', borderRadius: '8px', cursor: 'pointer' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
