import React, { useState, useEffect } from 'react';

const App = () => {
  const [status, setStatus] = useState('SECURE');
  const [showPopup, setShowPopup] = useState(false);
  const [refId, setRefId] = useState('');
  const [history, setHistory] = useState([]);
  const [showActualBalance, setShowActualBalance] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('nct_history');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const handleTransfer = async () => {
    setStatus('PROCESSING...');
    const newRef = 'NCT-' + Math.random().toString(36).toUpperCase().substring(2, 10);
    const newEntry = { id: newRef, date: new Date().toLocaleString(), amount: 'ENCRYPTED' };
    
    try {
      await fetch('https://final-boss-ohhn.onrender.com/transfer', { method: 'POST' });
      const updatedHistory = [newEntry, ...history].slice(0, 5);
      setHistory(updatedHistory);
      localStorage.setItem('nct_history', JSON.stringify(updatedHistory));
      setRefId(newRef);
      setShowPopup(true);
      setStatus('SECURE');
    } catch (e) {
      setStatus('OFFLINE');
    }
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: '#2563eb', margin: 0, fontWeight: '800' }}>NCT TRUST BANK</h2>
        <span style={{ fontSize: '14px', fontWeight: '600', color: status === 'SECURE' ? '#22c55e' : '#ef4444' }}>● {status}</span>
      </nav>

      <div style={{ maxWidth: '600px', margin: '40px auto' }}>
        <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', textAlign: 'center', marginBottom: '30px' }}>
          <p style={{ color: '#64748b', fontSize: '12px', letterSpacing: '1px' }}>PRIMARY ASSET VAULT</p>
          <h1 
            onClick={() => setShowActualBalance(!showActualBalance)} 
            style={{ fontSize: '56px', fontWeight: '800', margin: '10px 0 30px 0', color: '#1e293b', cursor: 'pointer', transition: '0.3s' }}
          >
            {showActualBalance ? '4,205.12' : '/data/data/com.termux/files/usr/bin/bash.00'}
          </h1>
          <button onClick={handleTransfer} style={{ width: '100%', padding: '18px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: '700', cursor: 'pointer' }}>
            {status === 'PROCESSING...' ? 'Encrypting...' : 'Initiate Secure Transfer'}
          </button>
        </div>

        <div style={{ backgroundColor: '#fff', padding: '25px', borderRadius: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ marginTop: 0, color: '#1e293b', fontSize: '16px' }}>Recent Activity</h3>
          {history.length === 0 ? <p style={{color: '#94a3b8'}}>Secure line established. No activity.</p> : 
            history.map((item, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: i !== history.length-1 ? '1px solid #f1f5f9' : 'none' }}>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '14px', color: '#1e293b' }}>{item.id}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>{item.date}</div>
                </div>
                <div style={{ color: '#22c55e', fontWeight: '700', fontSize: '14px' }}>{item.amount}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;
