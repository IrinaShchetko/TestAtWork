import React, { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css';
import { DropDown } from '../dropDown';
import photo from '../../assets/photo.png';

export function Card({ user, onEdit, onArchive, onHide, archived }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const cardRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.card}>
      <img
        className={styles.avatar}
        src={photo}
        alt={`${user.name}'s avatar`}
      />
      <div className={styles.additional}>
        <div className={styles.info}>
          <p className={styles.name}>{user.username}</p>
          <p className={styles.company}>{user.company.name}</p>
          <p className={styles.city}>{user.address.city}</p>
        </div>

        <button className={styles.button} onClick={toggleDropdown}>
          <svg
            width="4"
            height="17"
            viewBox="0 0 4 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.5C0 15.6 0.9 16.5 2 16.5C3.1 16.5 4 15.6 4 14.5C4 13.4 3.1 12.5 2 12.5C0.9 12.5 0 13.4 0 14.5ZM0 2.5C0 3.6 0.9 4.5 2 4.5C3.1 4.5 4 3.6 4 2.5C4 1.4 3.1 0.5 2 0.5C0.9 0.5 0 1.4 0 2.5ZM0 8.5C0 9.6 0.9 10.5 2 10.5C3.1 10.5 4 9.6 4 8.5C4 7.4 3.1 6.5 2 6.5C0.9 6.5 0 7.4 0 8.5Z"
              fill="#161616"
            />
          </svg>
        </button>
      </div>
      <DropDown
        onEdit={onEdit}
        onArchive={onArchive}
        onHide={onHide}
        isVisible={showDropdown}
        archived={archived}
      />
    </div>
  );
}
