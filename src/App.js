import logo from './logo.svg';
import './App.css';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import { Route, Routes } from 'react-router-dom';
import SalesHomePage from './components/Sales Executive/SalesHomePage';
import StoreHomePage from './components/Store Manager/StoreHomePage';
import Orders from './components/Store Manager/Orders/Orders';
import InventoryNavbar from './components/Store Manager/Inventory/InventoryNavbar';
import SalesExecutives from './components/Store Manager/Sales Executives/SalesExecutives';
import OrdersHistory from './components/Store Manager/Create Orders/OrdersHistory';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/salesHome' element={<SalesHomePage />} />
        <Route path='/storeHome' element={<StoreHomePage />} />
        <Route path='/inventory' element={<InventoryNavbar />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/sales' element={<SalesExecutives />} />
        <Route path='/orderHistory' element={<OrdersHistory />} />
        {/* <Route path="/*" element={<Login />}>
          <Route path="/" element={<salesHome />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
