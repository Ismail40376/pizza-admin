import {UseDispatch} from "../../react/redux";
import {AppDispatch} from "../../store/store";
import s from "./OrdersPage.module.scss"



const OrdersPage =()=> {
    const dispatch = useDispatch<AppDispatch>();



    return (
        <div className={s.ordersPage}>
            <h2 className={s.title}>Orders</h2>
            <h2 className={s.ordersList}></h2>
            </div>
    )
}