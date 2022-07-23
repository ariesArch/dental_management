### Setup Project 
cd Desktop
mkdir dental_management
cd dental_management
#### Setup Backend(Server)
mkdir server 
cd server 
npm init -y
npm install mongodb express cors dotenv
mkdir db
mkdir routes
touch config.env
touch server.js 
cd db 
touch conn.js 
cd /routes 
touch user.js 

### Setup Frontend(Client) 
cd Desktop/dental_management
npx create-react-app client 
