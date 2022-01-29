import React from 'react';
import './CreateOrder.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateOrder = () => {
    return (
        <div>
            <div>
                <button className="" style={{}}>Logout</button>
            </div>
            <div className="create-order-section pt-28">
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
    );
};

export default CreateOrder;