import React from 'react';
import styles from './styles.module.css';

export const PopUp = ({ show, onClose, message }) => {
  if (!show) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <p>{message}</p>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};
