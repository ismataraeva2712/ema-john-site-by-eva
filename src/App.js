import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import Orders from './Component/Orders/Orders';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import Shipping from './Component/Shipping/Shipping';
import Shop from './Component/Shop/Shop';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequireAuth> <Inventory></Inventory></RequireAuth>
        }></Route>
        <Route path='/shipping' element={
          <RequireAuth>
            <Shipping></Shipping>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>


      </Routes>

    </div>
  );
}

export default App;
