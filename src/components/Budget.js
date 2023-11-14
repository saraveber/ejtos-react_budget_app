import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import CustomAlert from './CustomAlert'; // Make sure to adjust the path based on your project structure


const Budget = () => {
	const { budget, dispatch,expenses, currency } = useContext(AppContext);
    const [alertMessage, setAlertMessage] = useState('');

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			setAlertMessage("You cannot reduce the budget value lower than spending");
		} 

        else if (val>20000){
            setAlertMessage("The budget can't exceed 20000!");
        }
        
        
        else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
    const handleAlertClose = () => {
        setAlertMessage('');
    };
	
	return (
        <div>
            {alertMessage && (
                <CustomAlert message={alertMessage} onClose={handleAlertClose} />
            )}
            <div className='alert alert-secondary'>
                <span>Budget: {currency}</span>
                <input type="number" step="10" value={budget} onInput={(event)=>changeBudget(event.target.value)}></input>
            </div>
        </div>
	);
};

export default Budget;