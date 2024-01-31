package com.sunbase.CustomerManagementSystem.request;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class Response {
    private String token;
    private String email;
}
