package com.sunbase.CustomerManagementSystem.controller;

import com.sunbase.CustomerManagementSystem.Security.jwt.JwtHelper;
import com.sunbase.CustomerManagementSystem.Security.user.CustomerUserDetails;
import com.sunbase.CustomerManagementSystem.Security.user.CustomerUserDetailsService;
import com.sunbase.CustomerManagementSystem.request.LoginRequest;
import com.sunbase.CustomerManagementSystem.request.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    JwtHelper helper;
    @Autowired
    CustomerUserDetailsService userDetailsService;
    @Autowired
    AuthenticationManager manager;
    private final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @PostMapping("/login")
    public ResponseEntity<?>authenticateUser(@RequestBody LoginRequest loginRequest){

        this.doAuthenticate(loginRequest.getEmail(),loginRequest.getPassword());
//        Authentication authentication =
//                manager
//                        .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        CustomerUserDetails userDetail = (CustomerUserDetails) userDetailsService.loadUserByUsername(loginRequest.getEmail());
        String token = this.helper.generateToken(userDetail);

        Response response = Response.builder()
                .token(token)
                .email(userDetail.getUsername()).build();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email,password);
        try {
            manager.authenticate(authenticationToken);
        }catch (BadCredentialsException e){
            throw new AuthenticationException("Invalid User name or password") {
                @Override
                public String getMessage() {
                    return super.getMessage();
                }
            };
        }
    }

}
