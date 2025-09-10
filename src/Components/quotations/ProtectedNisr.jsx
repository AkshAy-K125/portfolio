import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordModal from './PasswordModal';
import Nisr from './Nisr/Nisr';

const ProtectedNisr = () => {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated with expiry check
    const authData = localStorage.getItem('nisr_quotation_auth');
    let isAuth = false;
    
    if (authData) {
      try {
        const { timestamp, authenticated } = JSON.parse(authData);
        const now = Date.now();
        const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds
        
        // Check if authentication is still valid (within 1 hour)
        if (authenticated && (now - timestamp) < oneHour) {
          isAuth = true;
        } else {
          // Authentication expired, remove from localStorage
          localStorage.removeItem('nisr_quotation_auth');
        }
      } catch (error) {
        // Invalid data format, remove from localStorage
        localStorage.removeItem('nisr_quotation_auth');
      }
    }
    
    setIsAuthenticated(isAuth);
    
    if (!isAuth) {
      setShowPasswordModal(true);
    }
  }, []);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    setShowPasswordModal(false);
    // Store authentication with timestamp in localStorage for session persistence
    const authData = {
      authenticated: true,
      timestamp: Date.now()
    };
    localStorage.setItem('nisr_quotation_auth', JSON.stringify(authData));
  };

  const handlePasswordClose = () => {
    setShowPasswordModal(false);
    navigate('/');
  };

  return (
    <>
      <PasswordModal
        isOpen={showPasswordModal}
        onClose={handlePasswordClose}
        onSuccess={handlePasswordSuccess}
      />
      
      {isAuthenticated && <Nisr />}
    </>
  );
};

export default ProtectedNisr;
