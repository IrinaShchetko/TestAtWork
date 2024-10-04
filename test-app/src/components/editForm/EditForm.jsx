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
    <section className={styles.container}>
      <div className={styles.main}>
        <img src={photo} alt="Avatar" />
        <p>Данные профиля</p>
        <p>Рабочее пространство</p>
        <p>Приватность</p>
        <p>Безопасность</p>
      </div>
      <form className={styles.additional} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Имя</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Никнейм</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Почта</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Город</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Телефон</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Сохранить</button>

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
    </section>
  );
};
