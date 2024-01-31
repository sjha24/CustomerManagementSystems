package com.sunbase.CustomerManagementSystem.repository;

import com.sunbase.CustomerManagementSystem.model.Customers;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customers,String> {
    Customers findByEmail(String email);
}
