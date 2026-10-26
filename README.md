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