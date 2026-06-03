import { useState } from 'react';
import './index.css';

export function PasswordModal({ password, onSuccess }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      if (input === password) {
        onSuccess();
      } else {
        setError('Incorrect password. Please try again.');
        setInput('');
      }
      setLoading(false);
    }, 400);
  };

  return (
    <div className="pm-overlay">
      <div className="pm-card">
        <div className="pm-header">
          <span className="pm-lock">🔒</span>
          <h2 className="pm-title">Access Required</h2>
          <p className="pm-desc">This page is password protected.</p>
        </div>
        <form className="pm-form" onSubmit={handleSubmit}>
          <input
            type="password"
            className="pm-input"
            placeholder="Enter password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={loading}
            autoFocus
            required
          />
          {error && <p className="pm-error">{error}</p>}
          <button
            type="submit"
            className="pm-btn"
            disabled={loading || !input.trim()}
          >
            {loading ? 'Verifying…' : 'Unlock'}
          </button>
        </form>
      </div>
    </div>
  );
}
