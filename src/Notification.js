// Notification.js
import React, { useState, useEffect } from 'react';

const Notification = ({ message, type, onClose }) => {
  const [closed, setClosed] = useState(false);

  const styles = {
    position: 'fixed',
    top: '16px',
    right: '16px',
    padding: '12px',
    borderRadius: '4px',
    backgroundColor: type === 'success' ? '#4CAF50' : '#FF5733',
    color: 'white',
    zIndex: '999',
    display: closed ? 'none' : 'block',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosed(true);
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div style={styles}>
      <span>{message}</span>
      <button
        style={{ marginLeft: '8px', cursor: 'pointer' }}
        onClick={() => {
          setClosed(true);
          onClose();
        }}
      >
        &times;
      </button>
    </div>
  );
};

export default Notification;
