import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Layout from './layout/Layout';
import DishesPage from './pages/DishesPage/DishesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/dishes' element={<DishesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
