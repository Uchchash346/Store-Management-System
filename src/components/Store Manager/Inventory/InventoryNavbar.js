import React, { useState } from 'react';
import './InventoryNavbar.css'
import { NavLink } from 'react-bootstrap';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import LocalPharmacySharpIcon from '@mui/icons-material/LocalPharmacySharp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SalesExecutives from '../Sales Executives/SalesExecutives';
import Inventory from '../Inventory/Inventory';
import CreateOrders from '../Create Orders/OrdersHistory'
import Orders from '../Orders/Orders'
const InventoryNavbar = () => {

    const [inventory, setInventory] = useState(true);
    const [salesExecutive, setSalesExecutive] = useState(true);

    const handleInventory = () => {
        setInventory(true);
    }

    const handleSalesExecutives = () => {
        setInventory(false);
    }
    const handleCreateOrder = () => {
        setSalesExecutive(true);
    }
    const handleOrders = () => {
        setSalesExecutive(false);
    }

    return (
        <div style={{ background: '#fff8f8', minHeight: '150vh' }} className="sales-main-area">
            <div className='d-flex mb-5' >
                <div style={{ background: '#FFFFFF', minHeight: '130vh', minWidth: '250px' }} className='pr-5'>
                    <NavLink id="company-tag" to="/home" className='brand-img ' style={{ textDecoration: 'none' }}>
                        <span>
                            <LocalPharmacySharpIcon style={{ transform: "scale(1.8)", color: '#fa4549', marginTop: "20px", marginLeft: "20px" }} />
                        </span>

                    </NavLink>
                    <div className='container mt-2 ml-3'>
                        <NavLink onClick={handleInventory} className=" pt-5" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                            <LocalMallSharpIcon />
                            <span className="pl-3">Inventory</span>
                        </NavLink>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <NavLink onClick={handleSalesExecutives} className="pt-2" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                            <PeopleAltIcon />
                            <span className="pl-3">Sales Executives</span>
                        </NavLink>
                    </div>
                    <div className='container mt-2 ml-3'>
                        <NavLink href="/orders" className="pt-2" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
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

                <div style={{ width: '100%', height: '100px', background: '#FFFFFF' }}>
                    {
                        inventory ?
                            <Inventory /> :
                            <SalesExecutives />
                    }

                </div>
                <div style={{ width: '100%', height: '100px', background: '#FFFFFF' }}>

                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default InventoryNavbar;