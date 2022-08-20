const express = require('express')

const cityRoutes = express.Router();

const dbo = require('../db/conn')
const ObjectId = require('mongodb').ObjectId;

cityRoutes.route('/cities').get(function (request, response) {
    const db_connect = dbo.getDb();
    db_connect.collection('cities').find({}) // get collection 
        .toArray(function (err, result) {
            if (err) throw err;
            response.json(result);
            // response.json({ status: 200, data: result })
        });
})

cityRoutes.route('/cities').post(function (request, response) {
    const payload = request.body
    const db_connect = dbo.getDb();
    db_connect.collection('cities').insertOne(payload, function (err, result) {
        if (err) throw err;
        response.json(result);
    })
})
module.exports = cityRoutes;
