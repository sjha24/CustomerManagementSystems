package com.sunbase.CustomerManagementSystem.controller;

import com.sunbase.CustomerManagementSystem.Security.user.CustomerUserDetailsService;
import com.sunbase.CustomerManagementSystem.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    CustomerUserDetailsService userDetailsService;
    @PostMapping("/register")
    public String registerUser(@RequestBody User user){
        return userDetailsService.addUser(user);
    }
}
