# CustomerManagementSystems

## Project Summary
This repository contains a CRUD application for managing customers. The backend is built with Spring Boot and MySQL, featuring JWT Bearer token-based authentication. The frontend is integrated using HTML, CSS, JavaScript, React.js, Bootstrap,Router and axios, allowing users to interact with the backend APIs.

## Technology Used
* Java
* Spring boot
* Hibernate
* MySQL
* HTML
* CSS
* JS
* React.js
* Bootstrap
* React-Router
* axios

## Dependecies
 Following Dependecies are Required to run the project

 * Springboot Dev Tools
 * Spring Web
 * Lombok
 * MySQL
 * Validation
 * Spring Security
 * Spring Data Jpa

## Table Created
* user `for authentication Purpose`
* Customer
## Table Contents
 `Customer`
 * uuId ` Unique Identification for each User `
 * first_name `First Name of the Customer`
 * last_name `Last Name of the Customer`
 * Street `Street Name`
 * address `Full Address of The customer`
 * city `City of the customer`
 * state `state of the customer`
 * email `email of the customer`
 * phone `phone number of the customer`

   `User`
 * Id `id of the user which is auto generated`
 * name `name of the user`
 * email `email of the user`
 * password `password of the user`
 * role `role of the user`

## API end pont
the following endpoints are avalible in the API
 * `Customer Controller`
 * RequestMapping("/customer")
   ```
   POST/register : Add Customer
   GET/{customerId} : get customer by Id from database
   GET/all : get all customer list from database
   DELETE/remove/{customerId} : Delete customer from database
   PUT/update/{customerId} : Update Customer By Id
   
   ```
* `user controler`
*  * RequestMapping("/user")
  ```
  POST/register : Register The User
  ```
* Authe Controller
*  RequestMapping("/auth")
  ```
POST/login : login user useing email and password after user successfully login the jwt bearer token generated
  ```

## User Registration
![Screenshot (268)](https://github.com/sjha24/CustomerManagementSystems/assets/98340874/506a2b9e-8a85-4eeb-a51a-0c865cd68a0b)


## Login Page
![Screenshot (267)](https://github.com/sjha24/CustomerManagementSystems/assets/98340874/c528ba92-2aaa-44b4-9511-8f051edef9ab)

## Add New Customer
![Screenshot (276)](https://github.com/sjha24/CustomerManagementSystems/assets/98340874/96ff0951-e113-414d-a4b9-7b26e85a43b4)


## Search By First Name
![Screenshot (269)](https://github.com/sjha24/CustomerManagementSystems/assets/98340874/ce655512-3486-4761-b9c7-a674562b71b7)

## Other Searching Options
![Screenshot (272)](https://github.com/sjha24/CustomerManagementSystems/assets/98340874/3c31cbd6-d1e6-48b0-9e30-4b9e8845c250)



## Customer Update By Id

![Screenshot (271)](https://github.com/sjha24/CustomerManagementSystems/assets/98340874/7e466def-d142-4ed3-a2e7-5c375c2601fe)

## Data Structure Used
`MySQL Database`
```
We have used persistant database to implement CRUD Operations.
```
## Author

Saurav Kumar

* twiter : [@saurav](https://twitter.com/Sauravjha24)
* Github : [@sjha](https://github.com/sjha24)
