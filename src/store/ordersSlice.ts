import  {Order} from "../types";
import {createSlice} from "@reduxjs/toolkit";



interface OrdersSlice {
    items: Order[];
    loading: boolean;
    error: string|null;
}



const initialState: ordersState = {
    items: [],
    loading: false,
    error: null,
}

const ordersslice = createSlice({
    name: "orders",
    initialState,
    reducer: {
        fetchOrdersReaquest(state) {
            state.loading = true;
            state.error = null;
        },
        fetchOrdersSuccess(state, action: PayloadAction<Orders[]>) {
            state.items = action.payload;
        },
        fetchOrdersFailure(state, action: PayloadAction <string>) {
            state.loading = false;
            state.error = action.payload;
        },
        removeOrder(state, action: PayloadAction<string>) {
            state.items = state.items.filter(order=> 
                order.id !== action.payload)
            
        },
    },
});


export const { fetchOrdersReaquest, 
    fetchDishesSuccess,
     fetchOrdersFailure,
      removeOrder}= OrdersSlice.actions;


      export default ordersslice.reducer;