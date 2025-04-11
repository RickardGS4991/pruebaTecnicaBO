# pruebaTecnicaBO

##Introduction
This is technical test developed to prove my knowledge with Javascript, Express, Node.js and Jest. Basically, it consists of developing a CRUD application. The API used in this test was Hubspot. 

##Description
***
If you want to run it, you have the download the repository. Then, you must go to the project directory and you will run the next commando:

# chmod +x script.sh

# ./script.sh

Basically, you must able to execute the script that automatize the process of installing the project. Once you have already installed, you can execute with the next command:

# npm run start

This command will run the principal file to run all application. If you want to test every function, you must write the next urls in postman:

1.- http://localhost:4000/technicalTest/createcontact (you must add a body in the request and choose POST method)
2.- http://localhost:4000/technicalTest/getallcontacts (you must choose GET method)
3.- http://localhost:4000/technicalTest/contact/:id (you must choose GET method and write the id in ":id")
4.- http://localhost:4000/technicalTest/getcontactwithemail/:email (you must choose GET method and write the email in ":email")
5.- http://localhost:4000/technicalTest/updatecontact/:id (you must choose PATCH method and add a body with the data that you want to update)
6.- http://localhost:4000/technicalTest/deletecontact/:id (you must choose DELETE method)

# TEST

