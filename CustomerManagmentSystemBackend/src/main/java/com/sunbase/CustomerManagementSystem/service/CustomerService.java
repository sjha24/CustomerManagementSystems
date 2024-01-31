package com.sunbase.CustomerManagementSystem.service;
import com.sunbase.CustomerManagementSystem.model.Customers;
import com.sunbase.CustomerManagementSystem.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class CustomerService implements ICustomerService{
    @Autowired
    CustomerRepository customerRepository;
    @Override
    public ResponseEntity<String> saveCustomer(Customers customer) {
        Customers ExistCustomers = customerRepository.findByEmail(customer.getEmail());
        if(ExistCustomers == null){
            customerRepository.save(customer);
            return ResponseEntity.ok(customer.getFirst_name()+" is Successfully Register !!");
        }
        return new ResponseEntity<>("User Already Exist", HttpStatus.ALREADY_REPORTED);
    }

    @Override
    public ResponseEntity<?> getCustomerById(String customerId) {
        Customers customers = customerRepository.findById(customerId).orElse(null);
        if(customers != null) {
            return ResponseEntity.ok(customers);
        }
        return new ResponseEntity<>("User is not found with this uuId "+customerId,HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<String> updateCustomer(Customers customer, String customerId) {
        Customers existCustomer = customerRepository.findById(customerId).orElse(null);
        if(existCustomer != null) {
           if(customer.getFirst_name() != null) {
               existCustomer.setFirst_name(customer.getFirst_name());
           }
           if(customer.getLast_name() != null) {
               existCustomer.setLast_name(customer.getLast_name());
           }
           if(customer.getEmail() != null) {
               existCustomer.setEmail(customer.getEmail());
           }
           if(customer.getAddress() != null) {
               existCustomer.setAddress(customer.getAddress());
           }
           if(customer.getCity() != null) {
               existCustomer.setCity(customer.getCity());
           }
           if(customer.getState() != null) {
               existCustomer.setStreet(customer.getStreet());
           }
           if(customer.getState() != null) {
               existCustomer.setState(customer.getState());
           }
           if(customer.getPhone() != null) {
               existCustomer.setPhone(customer.getPhone());
           }
            customerRepository.save(existCustomer);
            return new ResponseEntity<>("Customer Updated Successfully",HttpStatus.OK);
        }

        return new ResponseEntity<>("Customer Is Not Exists with this uuId "+customerId,HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<String> removeCustomer(String customerId) {
        Customers customer = customerRepository.findById(customerId).orElse(null);
        if(customer != null){
            customerRepository.delete(customer);
            return new ResponseEntity<>(customer.getFirst_name()+" Deleted Successfully",HttpStatus.OK);
        }
        return new ResponseEntity<>("Customer Is not Found with this uuId "+customerId,HttpStatus.NOT_FOUND);
    }

    @Override
    public ResponseEntity<List<Customers>> getAllCustomer() {
        List<Customers>customersList = customerRepository.findAll();
        return ResponseEntity.ok(customersList);
    }
}
