import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            if(val === "£"){
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload_left: val,
                    payload_right: "",

                })
            }
            else{
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload_left: "",
                    payload_right: val,

                })

            }
            
    }
    

return (
    <div className='alert alert-secondary'> Currency {
        <select name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
            <option value="£">Uk(£)</option>
            <option value="₹">India(₹)</option>
            <option value="€">Europe(€)</option>
            <option value="CAD">Canada(CAD)</option>
        </select>	
        } 	
    </div>
    );
};

export default Currency;