## Using Mongooes to make connection with the MongoDB Databse
* Connection link is followed by the DB Name

### Note
    MODEL = TABLE
    ROW = DOCUMENT
    - a document can hava a sub-document


### Three Steps to follow after you have created the connection to access a collection in DA
  - Create a Model or Schema which is a structure of a collection 
  - Create an instance of the Model
  - Perform Operation on the Instance

### To Perform Validation
  - before inserting data in the DB you can use validator() to perform validation's
  - Can also use a npm package called validator

### Header adds a meta information to a API request

### NOTE:
  - Configure Express to parse JSON data from Request [REQUIRED]
    - app.use(express.json());


# Authentication and Security of API's
 - before storing a password in DB encrypt the password
  * you can use bcryptjs package to encrypt the password

- Middleware are used over schemas for applying any function post and pre DB operation.

  -Statics are accessible on Model also called Model Methods
  -methods are accessible on instances also called Instance Methods


### Web Tokens are methods for making url safe for transferring claims b/w tow parties.
 - JWT (JSON Web Tokens)
 - can you jsonwebtoken package
 - a web token is made of three distinct part seperated by "." 
 - header.payload.signature ->encoded in base64
 
### A Middleware sits between a request and a routerHadler. It can be used to perfrom any action on the request before it is passed on to the routeHandler like to decide wether run rotuehandler or not
  -  app.use(middlewareFunction) check index.js

  without Middleware -> new Request -> run route Handler
  with Middleware -> new Request -> middleware Fuction -> route Handler

### Multer is a goto package for fileUploads in nodeJs