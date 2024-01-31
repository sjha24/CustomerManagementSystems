package com.sunbase.CustomerManagementSystem.controller;
import com.sunbase.CustomerManagementSystem.model.Customers;
import com.sunbase.CustomerManagementSystem.service.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    ICustomerService customerService;
    @PostMapping("/register")
    public ResponseEntity<?>addCustomer(@RequestBody Customers customer){
        return customerService.saveCustomer(customer);
    }
    @GetMapping("/{customerId}")
    public ResponseEntity<?>getCustomerById(@PathVariable String customerId){
        return customerService.getCustomerById(customerId);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Customers>>getAllCustomers(){
        return customerService.getAllCustomer();
    }
    @PutMapping("/update/{customerId}")
    public ResponseEntity<String> updateCustomerById(@PathVariable String customerId, @RequestBody Customers customer){
           return customerService.updateCustomer(customer,customerId);
    }


    @DeleteMapping("/remove/{customerId}")
    public ResponseEntity<String> RemoveCustomerById(@PathVariable String customerId){
        return customerService.removeCustomer(customerId);
    }
}
