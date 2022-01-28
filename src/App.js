import logo from './logo.svg';
import './App.css';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import { Route, Routes } from 'react-router-dom';
import SalesHomePage from './components/Sales Executive/SalesHomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/salesHome' element={<SalesHomePage />} />
      </Routes>
    </>
  );
}

export default App;
