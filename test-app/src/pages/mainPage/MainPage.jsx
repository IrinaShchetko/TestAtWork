import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/card';
import { Header } from '../../components/header';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/users/thunk';

export const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, error } = useSelector((state) => state.fetch);
  const [activeUsers, setActiveUsers] = useState([]);
  const [archivedUsers, setArchivedUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setActiveUsers(data);
  }, [data]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleArchive = (id) => {
    const userToArchive = activeUsers.find((user) => user.id === id);
    if (userToArchive) {
      setActiveUsers(activeUsers.filter((user) => user.id !== id));
      setArchivedUsers([...archivedUsers, userToArchive]);
    }
  };

  const handleUnarchive = (id) => {
    const userToUnarchive = archivedUsers.find((user) => user.id === id);
    if (userToUnarchive) {
      setArchivedUsers(archivedUsers.filter((user) => user.id !== id));
      setActiveUsers([...activeUsers, userToUnarchive]);
    }
  };

  const handleHide = (id) => {
    setActiveUsers(activeUsers.filter((user) => user.id !== id));
    setArchivedUsers(archivedUsers.filter((user) => user.id !== id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        {/* Активные пользователи */}
        <h1 className={styles.title}>Активные</h1>
        <section className={styles.users}>
          {activeUsers.map((user, index) => (
            <Card
              key={user.id}
              user={user}
              index={index}
              onEdit={() => handleEdit(user.id)}
              onArchive={() => handleArchive(user.id)}
              onHide={() => handleHide(user.id)}
              archived={false}
            />
          ))}
        </section>

        {/* Архивированные пользователи */}
        <h2 className={styles.title}>Архив</h2>
        <section className={styles.archived}>
          {archivedUsers.map((user, index) => (
            <Card
              key={user.id}
              user={user}
              index={index}
              // onEdit={() => handleEdit(user.id)}
              onArchive={() => handleUnarchive(user.id)}
              // onHide={() => handleHide(user.id)}
              archived={true}
            />
          ))}
        </section>
      </div>
    </>
  );
};
