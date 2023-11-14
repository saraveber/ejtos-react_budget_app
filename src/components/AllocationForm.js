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
            <div className='row'>
                <div className="input-group mb-3" style={{ marginLeft: '2rem' }}>
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>
                    <div className="input-group-prepend" style={{ marginLeft: '2rem' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02">Allocation</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>
                    <span style={{ "position":"relative","right":"-20px"}}> {currency_left} </span>  
                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>
                    <span style={{ "position":"relative","right":"-20px"}}> {currency_right} </span>  

                    <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>

        </div>
    );
};

export default AllocationForm;