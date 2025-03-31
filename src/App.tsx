import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';
import DishesPage from './pages/DishesPage/DishesPage';
import OrdersPage from "./pages/OrdersPage/OrdersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/dishes' element={<DishesPage />} />
          <Route path='/orders' element={<OrdersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
