# Authentication System

Steps:
npm init -y
npm i express mongoose
add .gitignore
add "type": "module" in package.json to use import statement
add src/app.js
npm i morgan & use morgan in app.js
add server.js
add "dev": "npx nodemon server.js" in package.json 
npm run dev to start the server
create mongodb cluster
create .env, add it in .gitignore and install dotenv
create src/config/config.js to access env varbs
create src/config/database.js
add import connectDB in server.js
add env varb validation check in config.js
create src/models/user.model.js for user schema
create src/routes/auth.routes.js to create api to register user
import authRouter in app.js
add declaration of register user api route, this api demands data in request.body
create src/controllers/auth.controllers.js to write logic for each route 
Password is always stored in hash format to avoid leaks
Till now, user request to register and server saved password in the DB. Now, server will create a token
npm i jsonwebtoken & import it in controller
jwt secret is required, go to jwtsecrets.com 7 put secret in .env file & update config file 
import config in auth controller
check post request of register via postman
So far register user is implemented successfully
new endpoint is being created in order to identify the user by the server based on its request
add get-me route in auth routes & create it in controller