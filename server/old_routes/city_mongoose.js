const express = require("express");
const userRoutes = express.Router();
userRoutes.route('/cities').post(function (request, response) {
    let msg = new EmailModel({
        name: 'Hello'
    })

    msg.save()
        .then(doc => {
            console.log(doc)
        })
        .catch(err => {
            console.error(err)
        })
});
module.exports = userRoutes;
