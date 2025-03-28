import { useEffect, useState } from "react";
import s from "./DishForm.module.scss";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Dish } from "../../types";
import { addDish, updateDish } from "../../store/dishesSlice";




interface Props {
    onClose: () => void;
    dishToEdit?: Dish;
}


const DishForm: React.FC<Props> = ({ onClose, dishToEdit }) => {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [img, setImg] = useState<string>("");
    const [fileName, setFileName] = useState<string>("");
    const dispatch = useDispatch();

    useEffect(()=>{
        if(dishToEdit){
            setTitle(dishToEdit.title)
            setPrice(dishToEdit.price)
            setImg(dishToEdit.img)
        }
    }, [dishToEdit])

    const handleFileSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
            const reader = new FileReader()
            reader.onloadend = () => {
                setImg(reader.result as string);
            };
            reader.readAsDataURL(file);
        }

    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (dishToEdit) {
                const updatedDish = {...dishToEdit, title, price, img};
                await axios.put(`https://localhost:3001/dishes/${dishToEdit.id}`);
                dispatch(updateDish(updatedDish));

            }
            const newDish: Dish = {
                id: Date.now().toString(),
                title,
                price: price ? price : 0,        
                img,
            };
            await axios.post("http://localhost:3001/dishes", newDish);
            dispatch(addDish(newDish));
            onClose();
        } catch (error: unknown) {                                           
            let errorMessage = "An error occurder"
            if (error instanceof Error) {
                errorMessage = error.message
            }
            console.log("Error saving dish:", errorMessage);

        }

    }
    return (
        <div>
            <p className={s.title}>App dish</p>
            <form onSubmit={handleSubmit} className={s.form}>
                <div>
                    <label className={s.label}>title</label>
                    <input className={s.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label className={s.label}>price</label>
                    <input className={s.input} type="number" value={price} onChange={e => setPrice(Number(e.target.value))} />
                </div>
                <div>
                    <label className={s.label}>Image upload</label>
                    <input className={s.input} type="file" onChange={handleFileSubmit} />
                    {fileName && <p className={s.fileName}>Selected file: {fileName}</p>}
                    {img && (
                        <div className={s.imagePreview}>
                            <img src={img} alt="preview" />
                        </div>
                    )}


                </div>
                <button className={s.saveButton} type="submit">Save</button>
            </form>
        </div>

    )
}




export default DishForm





