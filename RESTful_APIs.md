# REST APIs

### **“REpresentational State Transfer” Application Programming Interface**

<br>
<br>

It is **software** that allows two applications to communicate with each other over the internet and through various devices. Every time you access an app like Facebook or to check weather on your smartphone, on API is used.

<br>

A **RESTful API** is an architectural style for an application interface (API) that uses HTTP requests to access and use data REST is not a programming language.

<br>

Previously we are using **SOAP** and now we are using **REST** and **GraphQL**.

<br>

**Simple API**:

    | Create |	api/createUser |
    | Read	 |	api/readUser   |
    | Update |	api/updateUser |
    | Delete | 	api/deleteUser |

<br>

**But in RESTful API**

    | Create | 	POST 	  |	 /api/users  |
    | Read   |  GET		  |  /api/users  |
    | Update | 	PUT/PATCH |	 /api/users  |
    | Delete | 	DELETE 	  |  /api/users  |

 
<br>

As per the **REST architecture**, the server des not store any state about the client session on the server-side. **Statelessness** means that every HTTP request happens in complete isolation. When the client makes an HTTP request, it includes all information necessary for the server to fulfill that request.
