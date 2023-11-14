import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


// Add code to import the other components here under
import ExpenseList from './components/ExpenseList';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import AlocationForm from './components/AllocationForm';


import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='row '>
                            {/* Add Budget component here */}       
                            <div className='col-sm'>
                                <Budget />
                            </div>
                            {/* Add Remaining component here*/}  
                            <div className='col-sm'>
                                <Remaining />
                            </div>
                            {/* Add ExpenseTotal component here */}  
                            <div className='col-sm'>
                                <ExpenseTotal />
                            </div>
                       </div>
                        {/* Add ExpenseList component here */}
                        <h3 className= 'mt3'>Expenses</h3>
                        <div className='row '>
                            <div className='col-sm'>
                                <ExpenseList />
                            </div>
                        </div>
                        
                        {/* Add ExpenseItem component here */}        

                    
                        {/* Add AllocationForm component here under */} 
                        <div className='row '>
                            <div className='col-sm'>
                                <AlocationForm />
                            </div>
                        </div>       
                      
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
