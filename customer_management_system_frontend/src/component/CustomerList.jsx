import React, { useEffect, useState } from 'react'
import { getAllCustomer,removeCustomerById } from './service/ApiFunction'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaEdit, FaTrashAlt} from 'react-icons/fa'
import CustomerPaginator from './CustomerPaginator';
import CustomSearch from './CustomSearch';

const CustomerList = () => {
    const[isLoading,setIsLoading] = useState(false);
    const[currentPage,setCuurentPage] = useState(1);
    const[customers,setCustomers] = useState([]);
    const[errorMessage,setErrorMessage] = useState("");
    const[successMessage,setSuccessMessage] = useState("");
    const[successDeleteMessage,setSuccessDeleteMessage] = useState("");
    const[errorDeleteMessage,setErrorDeleteMessage] = useState("");
    const[customerPerPage] = useState(4);
    const[filteredData,setFilteredData] = useState([""]);


    const totalCustomer = customers.length;
    const totalPages = Math.ceil(totalCustomer/customerPerPage);
    
    const handlePaginationOnClick=(pageNumber)=>{
        setCuurentPage(pageNumber);
    }
    
    const handleDelete = async(customerId)=>{
        try{
            const result = await removeCustomerById(customerId);
            
            if(result.status ===200){
                setSuccessDeleteMessage(result.data);
                const res = await getAllCustomer();
                setCustomers(res);
            }else{
                console.error(`Error in Deleting Customer : ${result.data}`);
            }
        }catch(error){
            setErrorDeleteMessage(error.message);
        }
    }

    setTimeout(()=>{
        setSuccessDeleteMessage("");
        setErrorDeleteMessage("");
    },10000)
    
    
    const filterDatas=(data)=>{
        setFilteredData(data);
    }


    const indexOfLastCustomer = currentPage * customerPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customerPerPage;
    const currentCustomers = filteredData != undefined ? filteredData.slice(indexOfFirstCustomer,indexOfLastCustomer)
    :customers.slice(indexOfFirstCustomer,indexOfLastCustomer);

    const getCustomerList=async()=>{
        setIsLoading(true);
        try{
            const result = await getAllCustomer();
            setCustomers(result);
            setIsLoading(false);
        }catch(error){
            setErrorMessage(error.message)
        }
    }

    setTimeout(()=>{
        setSuccessMessage("");
        setErrorMessage("");
    },10000)
    useEffect(()=>{
        getCustomerList();
    },[setCustomers])

    return (
        <>
            <div className="container col-md-8 col-lg-6">
                {successMessage && <p className='alert alert-success mt-5'>{successMessage}</p>}
                {successDeleteMessage && <p className='alert alert-success mt-5'>{successDeleteMessage}</p>}
                {errorDeleteMessage && <p className='alert alert-danger'>{errorDeleteMessage}</p>}
                {errorMessage && <p className='alert alert-danger'>{errorMessage}</p>}
            </div>
            {isLoading ? (
                <p>Loading Customer List..</p>
            ):(
                <section className='mt-5 mb-5 container'>
                    <h2>Customer List</h2>
                    <div className='d-flex gap-2'>
                        <Link to={'/add-customer'}><button className='btn btn-primary'>AddCustomer</button></Link>
                        <CustomSearch filterDatas={filterDatas} data={customers}/>
                    </div>
                    
                    <table className='table table-border table-hover'>
                        <thead>
                            <tr className='text-center'>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCustomers.map((customer)=>(
                                <tr key={customer.uuId} className='text-center'>
                                    <td>{customer.first_name}</td>
                                    <td>{customer.last_name}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.city}</td>
                                    <td>{customer.state}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.phone}</td>
                                    <td className='d-flex gap-2'>
                                        <Link to={`/edit-customer/${customer.uuId}`}>
                                            <span className='btn btn-info'>
                                                <FaEdit/>
                                            </span>
                                        </Link>
                                        <button 
                                            className='btn btn-danger'
                                            onClick={()=>handleDelete(customer.uuId)}
                                        >
                                            <FaTrashAlt/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <CustomerPaginator
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePaginationOnClick}
                    />
                    
                </section>
            )}
        </>
    )
}

export default CustomerList