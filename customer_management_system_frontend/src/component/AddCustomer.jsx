import React, { useEffect, useState } from 'react'
import { addCustomer, getAllCustomer } from './service/ApiFunction';
import CustomerList from './CustomerList';
import { Link } from 'react-router-dom';

const AddCustomer=()=> {
    const [newCustomer,setNewCustomer] = useState({
        first_name:"",
        last_name:"",
        street:"",
        address:"",
        city:"",
        state:"",
        email:"",
        phone:""
    });

    const [successMessage,setSuccessMessage] = useState("");
    const [errorMessage,setErrorMessage] = useState("");
    const[customer,setCustomers] = useState([]);

    const handleCustomerInputChange=(e)=>{
        e.preventDefault(); 
        setNewCustomer({...newCustomer,[e.target.name]:e.target.value})
    }
    const handleCustomerRegistration = async (e)=>{
        e.preventDefault();
        try{
            const success = await addCustomer(newCustomer.first_name,newCustomer.last_name,newCustomer.street,newCustomer.address,newCustomer.city,newCustomer.state,newCustomer.email,newCustomer.phone);
            console.log(success)
            if(success !== undefined){
                setSuccessMessage("Customer Registeration Successfull");
                setNewCustomer({
                    first_name:"",
                    last_name:"",
                    street:"",
                    address:"",
                    city:"",
                    state:"",
                    email:"",
                    phone:""
                });
                setErrorMessage("");
            }else{
                setErrorMessage("Something going wrong to Register Customer");
            }
        }catch(error){
            setErrorMessage("Error in adding new Customer "+error.message);
        }
    }
    
    setTimeout(()=>{
        setSuccessMessage("");
        setErrorMessage("");
    },3000)

    return (
        <>
            <section className='container' style={{marginTop:60}}>
                {errorMessage && <p className='alert alert-danger'>{errorMessage}</p>}
                {successMessage && <p className='alert alert-success'>{successMessage}</p>}

                <div className="row">
                            <h2 style={{marginLeft:180,marginBottom:15}}>Customer Details</h2>
                    <form onSubmit={handleCustomerRegistration}>
                        <div className='form-group d-flex flex-wrap justify-content-center'>
                            <input
                                name='first_name'
                                type='text'
                                placeholder='First name'
                                value={newCustomer.first_name}
                                onChange={handleCustomerInputChange}
                                style={{width:350,padding:5, marginRight:30,height:35 ,borderRadius:9,marginBottom:20}}
                            />
                            <input
                                name='last_name'
                                type='text'
                                placeholder='Last name'
                                value={newCustomer.last_name}
                                onChange={handleCustomerInputChange}
                                style={{width:350,padding:5, marginRight:30,height:35 ,borderRadius:9,marginBottom:20}}
                            />
                            <input
                                name='street'
                                type='text'
                                placeholder='Street'
                                value={newCustomer.street}
                                onChange={handleCustomerInputChange}
                                style={{width:350,padding:5, marginRight:30,height:35 ,borderRadius:9,marginBottom:20}}
                            />
                            <input
                                name='address'
                                type='text'
                                placeholder='Address'
                                value={newCustomer.address}
                                onChange={handleCustomerInputChange}
                                style={{width:350,padding:5, marginRight:30,height:35 ,borderRadius:9,marginBottom:20}}
                            />
                            <input
                                name='city'
                                type='text'
                                placeholder='City'
                                value={newCustomer.city}
                                onChange={handleCustomerInputChange}
                                style={{width:350,padding:5, marginRight:30,height:35 ,borderRadius:9,marginBottom:20}}
                            />
                            <input
                                name='state'
                                type='text'
                                placeholder='State'
                                value={newCustomer.state}
                                onChange={handleCustomerInputChange}
                                style={{width:350,padding:5, marginRight:30,height:35 ,borderRadius:9,marginBottom:20}}
                            />
                            <input
                                name='email'
                                type='email'
                                placeholder='Email'
                                value={newCustomer.email}
                                onChange={handleCustomerInputChange}
                                style={{width:350,padding:5, marginRight:30,height:35 ,borderRadius:9,marginBottom:20}}
                            />
                            <input
                                name='phone'
                                type='text'
                                placeholder='Phone'
                                value={newCustomer.phone}
                                onChange={handleCustomerInputChange}
                                style={{width:350,padding:5, marginRight:30,height:35 ,borderRadius:9,marginBottom:20}}
                            />
                        </div>
                        <div className='d-flex justify-content-between' style={{marginRight:220}}>
                            <Link to="/" style={{marginLeft:190}}><button className='btn btn-primary'>Customer List</button></Link>
                            <button type='submit' className='btn btn-primary px-4'>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default AddCustomer