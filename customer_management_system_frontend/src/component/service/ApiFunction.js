import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:8080"
})
const token = localStorage.getItem("token");
const headers = {
    'Content-Type': 'application/json',
     Authorization: 'Bearer '+token
}


export async function addCustomer(first_name,last_name,street,address,city,state,email,phone){
   
    const customerData={
        first_name:first_name,
        last_name:last_name,
        street:street,
        address:address,
        city:city,
        state:state,
        email:email,
        phone:phone
    }

    const response = await api.post("/customer/register",customerData,{headers});
    if(response.status === 201){
        return true;
    }else{
        return false;
    }

}

export async function getCustomerById(customerId){
    try{
        const result = await api.get(`/customer/${customerId}`,{headers})
        return result.data;
    }catch(error){
        throw new Error(`Error in fetching Room ${error.message}`)
    }
}

export async function getAllCustomer(){
    try{
        const response = await api.get('/customer/all',{headers});
        return response.data;
    }catch(error){
        throw new Error(`Error in Fetching all customer`)
    }
}

export async function removeCustomerById(customerId){
    try{
        const response = await api.delete(`/customer/remove/${customerId}`,{headers})
        return response;
    }catch(error){
        throw new Error(`Error in removing room ${error.message}`)
    }
}

export async function updateCustomerById(customerId,customerUpdateData){
    try{
        const response = await api.put(`/customer/update/${customerId}`,customerUpdateData,{headers})
        return response.data;

    }catch(error){
        throw new Error(`Error in updaing customer ${error.message}`)
    }
}

/* This function register a new user */
export async function registerUser(registration) {
	try {
		const response = await api.post("/user/register", registration)
		return response.data
	} catch (error) {
		if (error.reeponse && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`User registration error : ${error.message}`)
		}
	}
}

/* This function login a registered user */
export async function loginUser(login) {
	try {
		const response = await api.post("/auth/login", login)
		if (response.status >= 200 && response.status < 300) {
			return response.data
		} else {
			return null
		}
	} catch (error) {
		console.error(error)
		return null
	}
}