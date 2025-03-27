import s from "./Dishes.module.scss";


const DishesPage = () => {
    return (
     <div className={`${s.dishes} container`}>
      <h2>Dishes</h2>
     <button className={s.addButton}>Add now Dish</button>
     </div>
  );
}

  
  export default DishesPage;