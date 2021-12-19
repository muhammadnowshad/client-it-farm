import React from "react";
import { Route, Routes } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import AuthProvider from "./Context/authProvider";
import AddItem from "./Pages/Admin/AddItem/AddItem";
import Admin from "./Pages/Admin/Admin/Admin";
import MakeAdmin from "./Pages/Admin/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./Pages/Admin/ManageAllOrders/ManageAllOrders";
import UpdateStatus from "./Pages/Admin/ManageAllOrders/UpdateStatus/UpdateStatus";
import ManageProduct from "./Pages/Admin/ManageProduct/ManageProduct";
import MyOrder from "./Pages/Dashboard/My Order/MyOrder";
import OrderPlace from "./Pages/Dashboard/OrderPlace/OrderPlace";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Navigation from "./Pages/Shared/Navigation/Navigation";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Navigation></Navigation>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/home' element={<Home/>}/>
            <Route exact path='/services' element={<Services/>}/>
            <Route exact path='/myOrder' element={<PrivateRoute ><MyOrder/></PrivateRoute>}/>
            <Route exact path='/payment' element={<PrivateRoute ><Payment/></PrivateRoute>}/>
            <Route exact path='/orderPlace' element={<PrivateRoute ><OrderPlace/></PrivateRoute>}/>
            <Route exact path='/orderPlace/:serviceId' element={<PrivateRoute ><OrderPlace/></PrivateRoute>}/>
            <Route exact path='/admin' element={<PrivateRoute ><Admin/></PrivateRoute>}/>
            <Route exact path='/manageOrder' element={<PrivateRoute ><ManageAllOrders/></PrivateRoute>}/>
            <Route exact path='/orders/update/:id' element={<PrivateRoute ><UpdateStatus/></PrivateRoute>}/>
            <Route exact path='/addProduct' element={<PrivateRoute ><AddItem/></PrivateRoute>}/>
            <Route exact path='/makeAdmin' element={<PrivateRoute ><MakeAdmin/></PrivateRoute>}/>
            <Route exact path='/manageProduct' element={<PrivateRoute ><ManageProduct/></PrivateRoute>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/register' element={<Register/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;


