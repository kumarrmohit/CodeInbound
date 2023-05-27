# CodeInbound
----------------------------------
Here i Create a Node.js-based API where we can do crud operations 
i used tech stack-Node.js ,Mongo-db atlas,expressjs,jwt, bcrypt

here are some point how user can operate this code

First you need to authenticate to register your details and then login

1) localhost:8080/users/register:(can register on this end point)
2)localhost:8080/users/login:(can login with this end point)

after login a token will generate at postman, that you can submit in header under 
authorization, then you will able to create crud:-

1)localhost:8080/data-(post the data)
2)localhost:8080/data-(get the data)
3)localhost:8080/data/:id-(update the data)
4)localhost:8080/data/:id-(delete the data)

And all the data is stored in the mongodb atlas database