import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export function Card({ user, index, avatars }) {
  return (
    <>
      <Link className={styles.category}>
        <div key={user.id}>
          <img
            src={avatars[index]}
            alt={`${user.name}'s avatar`}
            style={{ width: '100px', height: '100px' }}
          />
          <h2>{user.username}</h2>
          <p>{user.address.city}</p>
          <p>{user.company.name}</p>
          <button>
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
      </Link>
    </>
  );
}
