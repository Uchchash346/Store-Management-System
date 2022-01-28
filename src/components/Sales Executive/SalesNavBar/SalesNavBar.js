/* eslint-disable no-undef */
import React, { useState } from 'react';
import './NavBar.css';
import { NavLink } from 'react-bootstrap';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import LocalPharmacySharpIcon from '@mui/icons-material/LocalPharmacySharp';
import CreateOrder from '../CreateOrder/CreateOrder';
import OrderHistory from '../OrderHistory/OrderHistory';

const SalesNavBar = () => {
    const [order, setOrder] = useState(true);

    const handleCreateOrderItem = () => {
        setOrder(true);
    }

    const handleOrderHistory = () => {
        setOrder(false);
    }

    return (
        <div style={{ background: '#fff8f8', minHeight: '120vh' }} className="sales-main-area">
            <div className='d-flex mb-5' >
                <div style={{ background: '#FFFFFF', minHeight: '130vh', minWidth: '250px' }} className='pr-5'>
                    <NavLink id="company-tag" to="/home" className='brand-img ' style={{ textDecoration: 'none' }}>
                        <span className="" >
                            <LocalPharmacySharpIcon style={{ transform: "scale(1.8)", color: '#fa4549' }} />
                        </span>
                    </NavLink>
                    <div className='container mt-2 ml-3'>
                        <NavLink className="pt-5" onClick={handleCreateOrderItem} style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                            <EditSharpIcon />
                            <span className="pl-3">Create Order</span>
                        </NavLink>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <NavLink className=" pt-5" onClick={handleOrderHistory} style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                            <LocalMallSharpIcon />
                            <span className="pl-3">Order History</span>
                        </NavLink>
                    </div>
                </div>

                <div style={{ width: '100%', height: '100px', background: '#FFFFFF' }}>
                    {
                        order ?
                            <CreateOrder /> :
                            <OrderHistory />
                    }
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default SalesNavBar;