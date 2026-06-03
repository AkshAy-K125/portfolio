import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PasswordModal } from '../quotations/PasswordModal';

const Auth = ({ children, authKey = 'default_auth', redirectPath = '/', sessionDuration = 60 * 60 * 1000, password }) => {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authData = localStorage.getItem(authKey);
    let isAuth = false;
    if (authData) {
      try {
        const { timestamp, authenticated } = JSON.parse(authData);
        if (authenticated && (Date.now() - timestamp) < sessionDuration) {
          isAuth = true;
        } else {
          localStorage.removeItem(authKey);
        }
      } catch {
        localStorage.removeItem(authKey);
      }
    }
    setIsAuthenticated(isAuth);
    if (!isAuth) setShowPasswordModal(true);
  }, [authKey, sessionDuration]);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
    setShowPasswordModal(false);
    localStorage.setItem(authKey, JSON.stringify({ authenticated: true, timestamp: Date.now() }));
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
