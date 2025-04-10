import {Dish} from '../../types';
import s from './Dishltem.module.scss'


interface DishItemProps extends Dish {
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
const DishItem: React.FC<DishItemProps > = ({ id, title, price, img, onEdit, onDelete }) => {
  return (
    <div className={s.card}>
      <div className={s.wrap}>
        <img src={img} alt='dish' className={s.img} />
        <h3>{title}</h3>
      </div>
      <div className={s.wrap}>
        <h3>{price} тенге</h3>
        <button className={s.editButton} onClick={() => onEdit(id!)}>Edit</button>
        <button className={s.deleteButton} onClick={()=> onDelete(id!)}>Delete</button>
      </div>
    </div>
  );
};

export default DishItem;