import { configureStore } from "@reduxjs/toolkit";
import dishesReducer from "./dishesSlice";
import ordersslice from "./ordersslice"

const store = configureStore({
    reducer: {
        dishes: dishesReducer,
        orders: ordersReducer,
    },
}),



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
