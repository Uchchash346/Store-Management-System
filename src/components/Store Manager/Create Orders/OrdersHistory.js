import React from 'react';
import './OrdersHistory.css';
import LocalPharmacySharpIcon from '@mui/icons-material/LocalPharmacySharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import { NavLink } from 'react-bootstrap';

const OrdersHistory = () => {
    return (
        <div>
            <div>
            <div className="create-order-section pt-28">
            <h2 className="text-center text-4xl order-history-heading">Order History</h2>
        </div>
            <div style={{ background: '#fff8f8', minHeight: '150vh' }} className="sales-main-area">
            <div className='d-flex mb-5' >
                <div style={{ background: '#FFFFFF', minHeight: '130vh', minWidth: '250px' }} className='pr-5'>
                    <NavLink id="company-tag" href="/inventory" className='brand-img ' style={{ textDecoration: 'none' }}>
                        <span>
                            <LocalPharmacySharpIcon style={{ transform: "scale(1.8)", color: '#fa4549', marginTop: "20px", marginLeft: "20px" }} />
                        </span>

                    </NavLink>
                    <div className='container mt-2 ml-3'>
                        <NavLink href="/inventory"  className=" pt-5" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                            <LocalMallSharpIcon />
                            <span className="pl-3">Inventory</span>
                        </NavLink>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <NavLink href="/sales" className="pt-2" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                            <PeopleAltIcon />
                            <span className="pl-3">Sales Executives</span>
                        </NavLink>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <NavLink href="/orders"  className="pt-2" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                            <EditSharpIcon />
                            <span className="pl-3">Create Order</span>
                        </NavLink>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <NavLink href="/orderHistory" className="pt-2" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                            <LocalMallSharpIcon />
                            <span className="pl-3">Orders</span>
                        </NavLink>
                    </div>

                </div>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default OrdersHistory;