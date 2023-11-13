import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const  expenses  = [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ];

    return (
        <table className='table'>
            <thead className="thead-light">
                <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10 </th>
                    <th scope="col">Decrease by 10</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>

            {expenses.map(((expense)=>(
                <ExpenseItem
                    id = {expense.id} 
                    name={expense.name} 
                    cost={expense.cost} />       
                )))
            }
            </tbody>
        </table>
    );
};

export default ExpenseList;
