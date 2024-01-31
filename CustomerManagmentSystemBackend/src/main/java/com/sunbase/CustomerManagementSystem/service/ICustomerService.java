package com.sunbase.CustomerManagementSystem.service;

import com.sunbase.CustomerManagementSystem.model.Customers;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ICustomerService {
    ResponseEntity<String> saveCustomer(Customers customer);

    ResponseEntity<?> getCustomerById(String customerId);

    ResponseEntity<String> updateCustomer(Customers customer, String CustomerId);

    ResponseEntity<String> removeCustomer(String customerId);

    ResponseEntity<List<Customers>> getAllCustomer();
}
