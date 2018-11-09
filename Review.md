# Review Questions

## What is Node.js?

Node.js is a Javascript runtime enviornment built on chromes V8 engine.

## What is Express?

Express is a web application framewroek for Node.js

## Mention two parts of Express that you learned about this week.

I learned how to use Middleware and also use Routing with Express.

## What is Middleware?

Middleware functions get the request and response objects and can operate on them and either return the response or call the next middlware in the piepline.

## What is a Resource?

The key abstrction of information in REST is a resource. It can be a document, image, basically any information can be named as a resource.

## What can the API return to help clients know if a request was successful?

The API can return a status code with JSON letting the client know that the request was successful.

## How can we partition our application into sub-applications?

We can use Routing in our applications.

## What is express.json() and why do we need it?

This is a built-in middleware function in EXpress. It parses incoming requests with JSON payloads and is based on bod-parser. We need it becuase it returns middleware that only parses JSON and only looks at requests where the content-type header matches the type option.
