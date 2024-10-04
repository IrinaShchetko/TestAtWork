import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { EditForm } from '../../components/editForm';
import { PopUp } from '../../components/popUp/PopUp';
import { Header } from '../../components/header';
import styles from './styles.module.css';

export const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, status } = useSelector((state) => state.fetch);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    city: '',
    phone: '',
    companyName: '',
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const user = data.find((user) => user.id === parseInt(id));

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        username: user.username,
        email: user.email,
        city: user.address.city,
        phone: user.phone,
        companyName: user.company.name,
      });
      setIsLoading(false);
    }
  }, [user, data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(true);
    setShowPopup(true);
  };
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  if (status === 'loading' || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={handleBack}>
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.125 11H0.875"
              stroke="#595959"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 17.125L0.875 11L7 4.875"
              stroke="#595959"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Назад
        </button>

        <EditForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isValid={isValid}
        />

        <PopUp
          show={showPopup}
          onClose={() => setShowPopup(false)}
          message="Изменения сохранены!"
        />
      </div>
    </>
  );
};
