import React, { useEffect, useState } from 'react'
import { getCustomerById, updateCustomerById } from './service/ApiFunction';
import { Link, useParams } from 'react-router-dom';

const EditCustomer=()=> {
  const{uuId} = useParams();
  console.log(uuId);
    const [newCustomer,setExistCustomer] = useState({
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

    const handleCustomerInputChange=(e)=>{
        e.preventDefault(); 
        setExistCustomer({...newCustomer,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
      const fetchCustomer = async()=>{
        try{
          const customerData = getCustomerById(uuId);
          console.log(customerData)
          setExistCustomer(customerData);
        }catch(error){
          console.error(error);
        }
      }
      fetchCustomer();
    },[uuId])
    const handleCustomerUpdate = async (e)=>{
        e.preventDefault();
        try{
          console.log(newCustomer);
            const response = await updateCustomerById(uuId,newCustomer);
            if(response === 'Customer Updated Successfully'){
              setSuccessMessage(response);
              const updatedCustomerData = await getCustomerById(uuId);
              setExistCustomer(updatedCustomerData)
              setErrorMessage("");
            }else{
              setErrorMessage(response);
            }
        }catch(error){
          console.error(error)
          setErrorMessage(error.message);
        }
    }
    
    setTimeout(()=>{
        setSuccessMessage("");
        setErrorMessage("");
    },8000)

    return (
        <>
            <section className='container' style={{marginTop:60}}>
                {errorMessage && <p className='alert alert-danger'>{errorMessage}</p>}
                {successMessage && <p className='alert alert-success'>{successMessage}</p>}

                <div className="row">
                            <h2 style={{marginLeft:180,marginBottom:15}}>Customer Details</h2>
                    <form onSubmit={handleCustomerUpdate}>
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
                            <Link to="/"><button className='btn btn-primary px-4' style={{marginLeft:189}}>Customer List</button></Link>
                            <button type='submit' className='btn btn-primary px-4'>Edit Customer</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default EditCustomer