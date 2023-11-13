import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { CiCirclePlus } from "react-icons/ci"
import { CiCircleMinus} from "react-icons/ci"
import { CiCircleRemove } from "react-icons/ci"



const ExpenseItem = (props) => {
    /* ADD onClick={handleFunction1,3,4} */

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.cost}€</td>
            <td><CiCirclePlus size='2.2em' color="green" ></CiCirclePlus></td>
            <td><CiCircleMinus size='2.2em' color="red" ></CiCircleMinus></td>
            <td><CiCircleRemove size='2.2em' color="black" ></CiCircleRemove></td>
            	
        </tr>
    ); 
};

export default ExpenseItem;
