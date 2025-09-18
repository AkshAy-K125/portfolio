import React, { useState } from 'react';
import './passwordModal.css';

const PasswordModal = ({ isOpen, onClose, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const correctPassword = process.env.REACT_APP_QUOTATIONS_PASSWORD ;
      
      if (password === correctPassword) {
        onSuccess();
        setPassword('');
      } else {
        setError('Incorrect password. Please try again.');
      }
    } catch (err) {
      console.error('Password validation error:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setPassword('');
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="password-modal-overlay">
      <div className="password-modal">
        <div className="password-modal-header">
          <h2>Access Required</h2>
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="password-modal-body">
          <p className="password-modal-description">
            This quotation is password protected. Please enter the password to view.
          </p>
          
          <div className="password-input-group">
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="password-input"
              required
              disabled={isLoading}
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          
          <div className="password-modal-actions">
            <button
              type="button"
              onClick={handleClose}
              className="cancel-btn"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={isLoading || !password.trim()}
            >
              {isLoading ? 'Verifying...' : 'View Quotation'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordModal;
