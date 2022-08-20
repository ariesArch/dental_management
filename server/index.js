const mongoose = require('mongoose');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000
const mongo_server = '127.0.0.1:27017'
const mongo_db = 'dental_clinic_db'
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(require('./routes/city'))
app.use(require('./routes/user'))
class Server {
    constructor() {
        this.__connect()
    }
    __connect() {
        app.listen(port, function () {
            mongoose.connect(`mongodb://${mongo_server}/${mongo_db}`).then(res => {
                console.log(`Server is running on port ${port}`);
                console.log("Conntected to Mongoose");
            })
        })
    }
}
module.exports = new Server();