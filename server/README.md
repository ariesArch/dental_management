### Project Setup 
cd Desktop
mkdir dental_management
cd dental_management
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

### MongoDB query example 
mongosh 
show dbs;
use dental_clinic_db;// select database 
show collections // show all collections.
db.users.find()// select all users from user collection
db.users.insertOne({
   name: "John",
   age: 20
});// insert one user document to users collection 
db.users.updateOne({name:'John'},{$set:{name:'Bolb',age:22}})// update user


### Dummy data 
db.users.insertOne({name:'admin',email:'admin@gmail.com',phone:'09999999999',city:'Yangon',township:'Hlaing',quarter:'No.1',address:'Blah'});
white_check_mark
eyes
raised_hands
React
Reply

5:55
db.branches.insertOne({name:'B-1',email:'b1@gmail.com',phone:'01292929',hotline:'012929',facebook_url:'facebook.com',viber:'0993939',city:'Yangon',township:'Hlaing',quarter:'No.1',address:'Blah'});
5:56
db.doctors.insertOne({name:'Dr. Kaung',email:'kaung@gmail.com',phone:'09292929',viber:'092929',branch:'B-1',age:34});

db.doctors.insertOne({name:'Dr. Maung',email:'kaung@gmail.com',phone:'09292929',viber:'092929',branch:'B-1',age:34});

### Project Flow 

Un-authenticated users
1. User can visit to website 
2. He/she can see clinic branches list (Filter and Search by city,township,quarter,)
3. He/she can also see doctors list  (Filter and Search by city,township,specilize,degree)
