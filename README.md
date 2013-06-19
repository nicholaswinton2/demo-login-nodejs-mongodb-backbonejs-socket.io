# Full structure and authentication cycle with nodejs mongodb backbonejs socket.io

This is a demo application with all the structural base done. 

## Used in this project

### Frontend


 - [Requirejs](http://requirejs.org/)
 - [Backbonejs](http://backbonejs.org/)
 - [Backbone Layoutmanager](https://github.com/tbranyen/backbone.layoutmanager)
 - [Twitter Bootstrap](http://twitter.github.io/bootstrap/)
 - [jQuery](http://jquery.com/)
 - [Underscorejs](http://underscorejs.org/)

### Backend

 - [Nodejs](http://nodejs.org/)
 - [MongoDB](http://www.mongodb.org/)
 - [ExpressJS](http://expressjs.com/)
 - [PassportJS](http://passportjs.org/)
 - [Socket.io](http://socket.io/)
 - [Jade](http://jade-lang.com/)
 - [Mongoosejs](http://mongoosejs.com/)
 - [Underscorejs](http://underscorejs.org/)


## Install

** NOTE: ** You need install nodejs and mongodb.

1. Clone this repository ``` $ git clone https://github.com/philipesteiff/demo-login-nodejs-mongodb-backbonejs-socket.io.git ```.

2. Install the modules with NPM. Use this command in the root of project ``` $ npm install ```.

3. Go to and open ``` config/config.js ``` and configure your ``` clientID ``` and ``` clientSecret ```. This information you get from Facebook and Google.

4. Run the Mongodb ``` $ mongod ```.

5. In the root of your project type this command ``` $ node app ```.

## Directory structure

```
-app/
    |__controllers/
    |__models/
    |__views/
-config/
    |__config.js
    |__routes.js
    |__passport.js
    |__express.js
-public/
    |__css/
    |__img/
    |__js/
        |__libs/
        |__models/
        |__views/
    |__templates/
```
