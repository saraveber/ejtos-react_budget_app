import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import CustomAlert from './CustomAlert'; // Make sure to adjust the path based on your project structure

const AllocationForm = (props) => {
    const { dispatch,remaining, currency_left, currency_right  } = useContext(AppContext);
    const [alertMessage, setAlertMessage] = useState('');
    
    
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');
    console.log("left:")
    console.log(currency_left)
    console.log("right:")
    console.log(currency_right)
    const submitEvent = () => {

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            console.log("I am reducing")
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } 
        else {
            if(cost > remaining) {
                setAlertMessage("The value cannot exceed remaining funds "+currency_left + remaining+ currency_right+".");
                setCost("");
                return;
            }
            dispatch({
                type: 'ADD_EXPENSE',
                payload: expense,
            });
        }
    };
    const handleAlertClose = () => {
        setAlertMessage('');
    };

    return (
        <div>
            {alertMessage && (
                <CustomAlert message={alertMessage} onClose={handleAlertClose} />
            )}
            <div className='container'>
    <div className='row mt-3'>
        <div className='row'>
            <div className='col-sm'>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">
                            Department
                        </label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        onChange={(event) => setName(event.target.value)}
                    >
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                <option value="Sales" name="sales">Sales</option>
                <option value="Finance" name="finance">Finance</option>
                <option value='Human Resource' name='Humsan Resource'>HR</option>
                <option value="IT" name="it">IT</option>
                <option value="Admin" name="admin">Admin</option>
                        
                    </select>
                </div>
            </div>
            <div className='col-sm'>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect02">
                            Allocation
                        </label>
                    </div>
                    <select
                        className="custom-select"
                        id="inputGroupSelect02"
                        onChange={(event) => setAction(event.target.value)}
                    >
                        <option defaultValue value="Add" name="Add">
                            Add
                        </option>
                        <option value="Reduce" name="Reduce">
                            Reduce
                        </option>
                    </select>
                </div>
            </div>
            <div className='col-sm'>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="cost">
                            Cost
                        </label>
                    </div>
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ size: 10, width: '50%' }}
                        onChange={(event) => setCost(event.target.value)}
                    />
                    <span className="input-group-text">
                        {currency_left}
                        {currency_right}
                    </span>
                </div>
            </div>
            <div className='col-sm'>
                <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                    Save
                </button>
            </div>
        </div>
    </div>
</div>
</div>
    );
};

export default AllocationForm;