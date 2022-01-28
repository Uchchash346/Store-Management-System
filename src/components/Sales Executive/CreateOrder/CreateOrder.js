import React from 'react';
import './CreateOrder.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateOrder = () => {
    return (
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
                    <div className="col-8">col-8</div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrder;