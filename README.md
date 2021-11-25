# Snappi
A photo sharing application with some user interaction.

<br>

<!-- PROJECT LOGO -->
<p align="center">
    <a >
        <img src="public/images/logoCircular.png" raw=true width="150"/>
    </a>
</p>


<br>

# Overview
Snappi is an application to share pictures, comments, like and view others posted images.

# App features
* Select and upload pictures.
* View posts from users.
* Search for posts.
* Comment and like on posts.

## Built With

- [Express.js](https://expressjs.com/) - Back end web applicaton framework for NodeJS.
- [REST API](https://restfulapi.net/) - The server will transfer to the client a representation of the state of the requested resource
- [Vanilla JS](http://vanilla-js.com/) - JavaScript to create CRUD operations from the DOM (Create, Read, Update, Delete).
- [Node MySQL 2](https://github.com/sidorares/node-mysql2) - MySQL client for Node.js which supports prepared statements, non-utf8 endcodings, binary log protocol, compression and ssl.
- [Express-JWT](https://github.com/auth0/express-jwt) - Middleware for validating JWTs for authentication
- [JSON Web Token](https://github.com/auth0/node-jsonwebtoken) - For generating JWTs used by authentication
- [Passport](https://github.com/jaredhanson/passport) - For handling user authentication


<!-- GETTING STARTED -->
# Requirements
For development and production, you will need Node.js and npm, installed in your environement. Additionally, setup MySQL database for databse storage.

### Node
- #### Node installation

  Just go on [official Node.js website](https://nodejs.org/) and download the installer or use your linux distro specific package manager to download it.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

If the installation was successful, you should be able to run the following command.

    $ node --version

    $ npm --version
    
### MySQL
- #### MySQL installation
 [Install](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/windows-install-archive.html)

 # Getting started

### Clone

To get the Node server running locally.

```sh
git clone https://github.com/iakai00/Snappi.git
cd Snappi
```
### Set up the local environment
Create a new file named `.env` with this environment variables.

   For example:
```
PORT= port where the server is listening to e.g 3000
DB_HOST= localhost
DB_USER=  database user
DB_PASS=  database password
DB_NAME=  database name
SECRET_KEY= JSON Web Token secret key
SALT_ROUNDS= salt rounds for bcrypt
```

After that run this command on project path

```sh
$ npm install
$ npm start
```
Your app should now be running on [localhost:3000](http://localhost:3000/)
