import React from 'react';
import styles from './styles.module.css';

const Button = ({ label, onClick }) => (
  <button className={styles.btn} onClick={onClick}>
    {label}
  </button>
);

export const DropDown = ({
  onEdit,
  onArchive,
  onHide,
  isVisible,
  archived,
}) => {
  if (!isVisible) return null;

  return (
    <div className={styles.dropdown}>
      {!archived && <Button label="Редактировать" onClick={onEdit} />}
      <Button
        label={archived ? 'Активировать' : 'Архивировать'}
        onClick={onArchive}
      />
      {!archived && <Button label="Скрыть" onClick={onHide} />}
    </div>
  );
};
