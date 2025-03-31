import axios from 'axios';
import { Order } from '../types';
import { fetchOrdersFailure, fetchOrdersRequest, fetchOrdersSuccess } from './ordersSlice';
import { AppDispatch } from './store';
export const fetchOrders = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchOrdersRequest());
    try {
      const response = await axios.get<Order[]>('http://localhost:3001/orders');
      dispatch(fetchOrdersSuccess(response.data));
    } catch (error: unknown) {
      let errorMessage = 'An error occured';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(fetchOrdersFailure(errorMessage));
    }
  };
};