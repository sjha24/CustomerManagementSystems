package com.sunbase.CustomerManagementSystem.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.NumberFormat;

import java.util.UUID;

@Entity
@AllArgsConstructor
@Data
public class Customers {
    @Id
    private String uuId;
    @NotNull
    private String first_name;

    private String last_name;

    private String street;
    @NotNull
    private String address;
    @NotNull
    private String city;
    @NotNull
    private String state;

    @Email
    private String email;
    private String phone;

    public Customers(){
        uuId = UUID.randomUUID().toString();
    }
}
