import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Remaining = () => {
    const { expenses, budget, currency_left, currency_right} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency_left}{budget - totalExpenses}{currency_right}</span>
        </div>
    );
};
export default Remaining;
