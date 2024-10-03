import React from 'react';
import { Card } from '../../components/card';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/users/thunk';
import { useEffect } from 'react';
import first from '../../assets/first.jpg';
import cat from '../../assets/cat.jpg';
import girl from '../../assets/girl.jpg';

const avatars = [first, cat, girl, first, cat, girl];
export const MainPage = () => {
  //   const { category } = useParams()
  //   const dispatch = useAppDispatch()

  //   useEffect(() => {
  //     dispatch(fetchGoodsThunk('all'))
  //   }, [dispatch, category])
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchData()); // Вызов thunk для получения данных
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container">
      <section className={styles.users}>
        <h1>Активные</h1>
        {data.map((user, index) => (
          <Card key={user.id} user={user} index={index} avatars={avatars} />
        ))}
      </section>
    </div>
  );
};
