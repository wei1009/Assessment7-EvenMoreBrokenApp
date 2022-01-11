### Conceptual Exercise

Answer the following questions below:

- What is a JWT?  
JWT is used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. 
- What is the signature portion of the JWT?  What does it do?  
 The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. 

- If a JWT is intercepted, can the attacker see what's inside the payload?  
Yes, JWTs are used to identify the client, if one is compromised, an attacker has full access to the user’s account in the same way they would if the attacker had instead compromised the user’s username and password.
- How can you implement authentication with a JWT?  Describe how it works at a high level.  
Client send a login request with username and password to server. Server receive the username and password, authenticate the user. If authentication is successful, then the server creates a JWT token. Client sends any request to server, client just attach the token with request. Server receives a request, authenticates the JWT token, and continues processing the request, and then returns the result to the client.

- Compare and contrast unit, integration and end-to-end tests.  
1.Unit testing is normally the lowest level of testing and typically tests an individual module of software to ensure that it performs as expected for a selected range of inputs and outputs.  
2.Integration testing tests that modules that are expected to interoperate with each other work together as expected. It normally does not include testing of the user interface.  
3.End-to-end testing tests the complete functionality of the entire system including the UI.

- What is a mock? What are some things you would mock?  
Mocking means creating a fake version of an external or internal service that can stand in for the real one, helping your tests run more quickly and more reliably. Mocking is primarily used in unit testing
An object under test may have dependencies on other (complex) objects
To isolate the behavior, you replace other objects by mocks that simulate their behavior
This is useful if the real objects are impractical to incorporate into the unit test.

- What is continuous integration?  
Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- What is an environment variable and what are they used for?  
An environment variable is a dynamic "object" on a computer, containing an editable value, which may be used by one or more software programs in Windows. Environment variables help programs know what directory to install files in, where to store temporary files, and where to find user profile settings. They help shape the environment that the programs on your computer use to run.

- What is TDD? What are some benefits and drawbacks?  
Test-driven development (TDD) is a software development process relying on software requirements being converted to test cases before software is fully developed, and tracking all software development by repeatedly testing the software against all test cases. This is as opposed to software being developed first and test cases created later.

- What is the value of using JSONSchema for validation?  
Describes your existing data format(s).
Provides clear human- and machine- readable documentation.
Validates data which is useful for:
Automated testing.
Ensuring quality of client submitted data.

- What are some ways to decide which code to test?  
What exactly do you want to test. And test the most important. Test to make sure it basically does what you are expecting it to do in the expected cases.

- What does `RETURNING` do in SQL? When would you use it?  
In SQL, for INSERT/UPDATE/DELETE, you can have a RETURNING clause to return data that was inserted, updated, or deleted.

- What are some differences between Web Sockets and HTTP?  
HTTP protocol: HTTP is unidirectional where the client sends the request and the server sends the response. 
WebSocket: WebSocket is bidirectional, a full-duplex protocol that is used in the same scenario of client-server communication, unlike HTTP it starts from ws:// or wss://. It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server). after closing the connection by either of the client and server, the connection is terminated from both the end. 

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?  
I think Flask is more intuitive than Express. I feel that Express' syntax is more complex than Flask's since it pays more attention to API design and handling errors. 
