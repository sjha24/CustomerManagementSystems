package com.sunbase.CustomerManagementSystem.exception;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String userIsNotExist) {
        super(userIsNotExist);
    }
}
