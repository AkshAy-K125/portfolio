import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PasswordModal from '../quotations/PasswordModal';

const Auth = ({ children, authKey = 'default_auth', redirectPath = '/', sessionDuration = 60 * 60 * 1000, password }) => {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  useEffect(() => {
    // Check if user is already authenticated with expiry check
    const authData = localStorage.getItem(authKey);
    let isAuth = false;
    
    if (authData) {
      try {
        const { timestamp, authenticated } = JSON.parse(authData);
        const now = Date.now();
        
        // Check if authentication is still valid (within session duration)
        if (authenticated && (now - timestamp) < sessionDuration) {
          isAuth = true;
        } else {
          // Authentication expired, remove from localStorage
          localStorage.removeItem(authKey);
        }
      } catch (error) {
        // Invalid data format, remove from localStorage
        localStorage.removeItem(authKey);
      }
    }
    
    setIsAuthenticated(isAuth);
    
    if (!isAuth) {
      setShowPasswordModal(true);
    }
  }, [authKey, sessionDuration]);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    setShowPasswordModal(false);
    // Store authentication with timestamp in localStorage for session persistence
    const authData = {
      authenticated: true,
      timestamp: Date.now()
    };
    localStorage.setItem(authKey, JSON.stringify(authData));
  };

  const handlePasswordClose = () => {
    setShowPasswordModal(false);
    navigate(redirectPath);
  };

  return (
    <>
      <PasswordModal
        isOpen={showPasswordModal}
        onClose={handlePasswordClose}
        onSuccess={handlePasswordSuccess}
        correctPassword={password}
      />
      
      {isAuthenticated && children}
    </>
  );
};

export default Auth;
