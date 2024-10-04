import React from 'react';
import styles from './styles.module.css';
import photo from '../../assets/photo.png';

export const EditForm = ({
  formData,
  handleChange,
  handleSubmit,
  isValid,
  showPopup,
  setShowPopup,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <img className={styles.avatar} src={photo} alt="Avatar" />
        <h3 className={styles.profile}>Данные профиля</h3>
        <p className={styles.item}>Рабочее пространство</p>
        <p className={styles.item}>Приватность</p>
        <p className={styles.item}>Безопасность</p>
      </div>
      <form className={styles.additional} onSubmit={handleSubmit}>
        <h3 className={styles.title}>Данные профиля</h3>
        <div className={styles.formGroup}>
          <label className={styles.label}>Имя</label>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Никнейм</label>
          <input
            className={styles.input}
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Почта</label>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Город</label>
          <input
            className={styles.input}
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Телефон</label>
          <input
            className={styles.input}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Company Name</label>
          <input
            className={styles.input}
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <button className={styles.btn} type="submit">
          Сохранить
        </button>

        {!isValid && (
          <p className={styles.error}>Все поля должны быть заполнены</p>
        )}

        {showPopup && (
          <div className={styles.popup}>
            <p>Изменения сохранены!</p>
            <button onClick={() => setShowPopup(false)}>✕</button>
          </div>
        )}
      </form>
    </div>
  );
};
