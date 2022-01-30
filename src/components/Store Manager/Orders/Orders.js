import React from 'react';
import './Orders.css';
import { NavLink } from 'react-bootstrap';
import LocalPharmacySharpIcon from '@mui/icons-material/LocalPharmacySharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EditSharpIcon from '@mui/icons-material/EditSharp';


const Orders = () => {
    return (
        <div>
            <div style={{ background: '#fff8f8', minHeight: '150vh' }} className="sales-main-area">
                <div className='d-flex mb-5' >
                    <div style={{ background: '#FFFFFF', minHeight: '130vh', minWidth: '250px' }} className='pr-5'>
                        <NavLink id="company-tag" href="/inventory" className='brand-img ' style={{ textDecoration: 'none' }}>
                            <span>
                                <LocalPharmacySharpIcon style={{ transform: "scale(1.8)", color: '#fa4549', marginTop: "20px", marginLeft: "20px" }} />
                            </span>

                        </NavLink>
                        <div className='container mt-2 ml-3'>
                            <NavLink href="/inventory" className=" pt-5" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                                <LocalMallSharpIcon />
                                <span className="pl-3">Inventory</span>
                            </NavLink>
                        </div>
                        <div className='container mt-2 ml-3'>
                            <NavLink to="/sales" className="pt-2" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                                <PeopleAltIcon />
                                <span className="pl-3">Sales Executives</span>
                            </NavLink>
                        </div>
                        <div className='container mt-2 ml-3'>
                            <NavLink to="/orders" className="pt-2" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                                <EditSharpIcon />
                                <span className="pl-3">Create Order</span>
                            </NavLink>
                        </div>
                        <div className='container mt-2 ml-3'>
                            <NavLink href="orderHistory" className="pt-2" style={{ textDecoration: 'none', color: "#fa4549", fontSize: '15px' }}>
                                <LocalMallSharpIcon />
                                <span className="pl-3">Orders</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className="create-order-section pt-28 pl-28">
                        <h2 className="text-center text-4xl create-order-heading">Create Order</h2>
                        <br />
                        <div className="container pt-5">
                            <div className="row">
                                <div className="col-4">
                                    <p className="text-lg">Medicine</p>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control text-gray input-section"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm"
                                                placeholder="Medicine Name"
                                            />
                                        </div>
                                        <div className="col-sm-4">
                                            <input
                                                type="number"
                                                className="form-control text-gray input-section"
                                                aria-label="Sizing example input"
                                                aria-describedby="inputGroup-sizing-sm"
                                                placeholder="Quantity"
                                                value="0"
                                            />
                                        </div>
                                        <div className="col-sm-2 pt-1 pl-4 add-circle-button"><AddCircleIcon /></div>
                                    </div>
                                </div>
                                <div className="col-8 create-order-customer-and-product-info">
                                    <div className="container">
                                        <div class="row pt-2">
                                            <div class="col">
                                                <label htmlFor="">Customer Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control text-gray input-section mt-2"
                                                    aria-label="Sizing example input"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    placeholder="Medicine Name"
                                                />
                                            </div>
                                            <div class="col-6"></div>
                                            <div class="col">
                                                <label htmlFor="">Customer Contact Number</label>
                                                <input
                                                    type="text"
                                                    className="form-control text-gray input-section mt-2"
                                                    aria-label="Sizing example input"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    placeholder="Medicine Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="container">
                                            <div class="row pt-4 mb-2">
                                                <div class="col-sm text-end font-bold">Medicine Name</div>
                                                <div class="col-sm text-center font-bold">Qty</div>
                                                <div class="col-sm font-bold">Price(per Unit)</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="container">
                                            <div class="row pt-2 mb-2">
                                                <div class="col-sm text-end font-bold">Total</div>
                                                <div class="col-sm text-center"></div>
                                                <div class="col-sm font-bold">0</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="container pt-3 mb-3 d-flex justify-content-center">
                                            <button type="button" class="btn btn-lg create-order-submit-button">Create Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;