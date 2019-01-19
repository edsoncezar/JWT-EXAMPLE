# JWT-EXAMPLE

Simple example using JWT and Token for authentication, like there are good examples of that on the internet, I decide didn't start my project by the zero.

The general concept behind a token-based authentication system is simple. Allow users to enter their username and password in order to obtain a token which allows them to fetch a specific resource - without using their username and password. 

Token-based authentication is predominantly used on the web because it allows users to stay logged onto a website without the use of cookies. In addition to a more user-friendly experience, tokens are more secure because they can be used to replace a user’s actual credentials. What’s more, token-based authentication can be used with several other types of authentication methods to create an improved user experience.

When we use a Token-based authentication the main idea is to guarantee that the user logged is his own, and thus maintenance to access of the contents, and manage the access levels that it may have.


#Cookie-Based Authentication

Cookie-based authentication has been the default, tried-and-true method for handling user authentication for a long time.

Cookie-based authentication is stateful. This means that an authentication record or session must be kept both server and client-side. The server needs to keep track of active sessions in a database, while on the front-end a cookie is created that holds a session identifier, thus the name cookie based authentication. Let's look at the flow of traditional cookie-based authentication:

- User enters their login credentials.

- Server verifies the credentials are correct and creates a session which is then stored in a database.

- A cookie with the session ID is placed in the users browser.

- On subsequent requests, the session ID is verified against the database and if valid the request processed.

- Once a user logs out of the app, the session is destroyed both client-side and server-side.

#Token-Based Authentication

Token-based authentication has gained prevalence over the last few years due to the rise of single page applications, web APIs, and the Internet of Things (IoT). When we talk about authentication with tokens, we generally talk about authentication with JSON Web Tokens (JWTs). While there are different ways to implement tokens, JWTs have become the de-facto standard. With this context in mind, the rest of the article will use tokens and JWTs interchangeably.

Token-based authentication is stateless. The server does not keep a record of which users are logged in or which JWTs have been issued. Instead, every request to the server is accompanied by a token which the server uses to verify the authenticity of the request. The token is generally sent as an addition Authorization header in the form of Bearer {JWT}, but can additionally be sent in the body of a POST request or even as a query parameter. Let's see how this flow works:

- User enters their login credentials.

- Server verifies the credentials are correct and returns a signed token.

- This token is stored client-side, most commonly in local storage - but can be stored in session storage or a cookie as well.

- Subsequent requests to the server include this token as an additional Authorization header or through one of the other methods mentioned above.

- The server decodes the JWT and if the token is valid processes the request.

Once a user logs out, the token is destroyed client-side, no interaction with the server is necessary.


I'm creating a login and I will choose Angular and JWT;

JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.

There are multiple ways to allow a service to be used securely. JSON web tokens is one of them, although there are limitations to the security that JSON web tokens provide. JSON Web tokens(JWT) is a standard for representing claims securely between two parties. It is quite secure because the JWT can be signed using a secret or public/private key.

#Prerequisites

Install Node.js® and npm

node -v

npm -v

Install Angular cli

npm install -g @angular/cli

Install node packages

cd /go/to/app/directory having package.json

npm install


I will use in node.js using jsonwebtoken (https://github.com/auth0/node-jsonwebtoken) module, for the installation just use the command:


$ npm install jsonwebtoken

$ npm install --save @types/node


Then I use tis code in the class GenerateTokenService for using a token who expire after 30 minutes:

var encodedData = window.btoa('TOKEN-EXAMPLE' +Math.random().toString(36).slice(-10)); // encode a string
      var jwt = require('jsonwebtoken');
      
      var token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 30),
        data: 'foobar'
      }, encodedData);


If you get the error:


ERROR in src/app/_services/generate-token.service.ts(18,17): error TS2304: Cannot find name 'require'.


Use this line in App module file:


declare var require: any;


If you get the error:

ERROR in ./node_modules/jws/lib/sign-stream.js

Module not found: Error: Can't resolve 'stream' in '/home/edson/Angular/jwt-example/node_modules/jws/lib'

Just replace in the related file:


//var Stream = require('stream');
var Stream = require("readable-stream");


If you get the error:

ERROR in ./node_modules/jwa/index.js

Module not found: Error: Can't resolve 'crypto' in '/home/edson/Angular/jwt-example/node_modules/jwa'

Go to:

node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js

In my case line 133, and just replace:

node: false

To: 


node: { crypto: true, stream: true, buffer: true }



And here all the sources I used for this implementation:

http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial

https://www.npmjs.com/package/jsonwebtoken

https://itnext.io/so-what-the-heck-is-jwt-or-json-web-token-dca8bcb719a6

https://swoopnow.com/token-based-authentication/

https://dzone.com/articles/cookies-vs-tokens-the-definitive-guide

Angular 6 - User Registration and Login Example with Angular CLI

To see a demo and further details go to http://jasonwatmore.com/post/2018/05/16/angular-6-user-registration-and-login-example-tutorial

