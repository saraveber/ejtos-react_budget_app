import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CiCirclePlus } from "react-icons/ci"
import { CiCircleMinus} from "react-icons/ci"
import { CiCircleRemove } from "react-icons/ci"



const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }

    
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.cost}€</td>
            <td><CiCirclePlus size='2.2em' color="green"  onClick={event=> increaseAllocation(props.name)}></CiCirclePlus></td>
            <td><CiCircleMinus size='2.2em' color="red"  onClick={event=> decreaseAllocation(props.name)} ></CiCircleMinus></td>
            <td><CiCircleRemove size='2.2em' color="black" onClick={handleDeleteExpense}></CiCircleRemove></td>	
            
        </tr>
    ); 
};

export default ExpenseItem;
