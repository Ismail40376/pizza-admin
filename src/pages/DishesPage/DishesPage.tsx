import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DishForm from '../../components/DishForm/DishForm';
import { fetchDishes } from '../../store/dishesAction';
import { AppDispatch, RootState } from '../../store/store';
import s from './Dishes.module.scss';
import DishItem from '../../components/Dishltem/Dishltem';
import Modal from '../../components/Modal/Modal';
import { deleleteDish } from '../../store/dishesSlice';
import { Dish } from '../../types';
import axios from 'axios';





const DishesPage: React.FC = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [dishToEdit, setDishToEdit] = useState<null | string>(null);
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.dishes);


  const handleDeleteDish = async (id: string) => {
    dispatch(deleleteDish(id));
    await axios.delete(`http://localhost:3001/dishes/${id}`);
  };


  const handleEditDish = (id: string) => {
    setDishToEdit(id);
    setIsShowForm(true)
  }


  const dishForEdit = items.find(dish => dish.id === dishToEdit) || undefined

  useEffect(() => {


    dispatch(fetchDishes());
  }, [dispatch]);
  if (loading) {
    return (
      <div className={s.loading}>
        <div className={s.spinner}></div>
      </div>
    );
  }
  if (error) {
    return <div className={s.error}>An error occured!</div>;
  }
 

  return (
    <>
      <div className="container">
        <div className={`${s.dishes} container`}>
          <h2>Dishes</h2>
          <button className={s.addButton} onClick={() => setIsShowForm(true)}>Add now Dish</button>
        </div>
        {items.map(dish => (
          <DishItem
            id={dish.id}
            title={dish.title}
            price={dish.price}
            img={dish.img}
            key={dish.id}
            onEdit={handleEditDish}
            onDelete={handleDeleteDish}

          />
        ))}

        {isShowForm && (
          <Modal onClose={() => setIsShowForm(false)}>
            <DishForm onClose={() => setIsShowForm(false)}
              dishToEdit={dishForEdit}
            />
          </Modal>
        )}

      </div>
    </>
  );
};


export default DishesPage;