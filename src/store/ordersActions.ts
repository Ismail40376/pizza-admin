import {AppDispatch} from "./store";
import axios from "../axios";
import {Order} from "../types"


export const fetchOrders=()=> {
    return async (dispatch: AppDispatch) => {
        dispatch(fetchOrdersReaquest());
        try{
            const response = await axios.get<Order[]>("https://localhost:3001/orders")
        } catch (error) {}
    }
}
