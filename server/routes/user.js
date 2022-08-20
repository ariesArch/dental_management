const express = require("express");
const userRoutes = express.Router();
const { User } = require("../models/user");

userRoutes.route('/users').get(async function (request, response) {
    const allUsers = await User.find();
    return response.status(200).json(allUsers);
})
userRoutes.route('/users').post(function (request, response) {
    console.log(request.body)
    try {
        const newUser = new User({ ...request.body });
        const insertedUser = newUser.save();
        console.log(insertedUser);
        // return response.status(201).json(insertedUser);
    } catch (err) {
        console.log(err)
    }
})
// userRoutes.route('/users').post(async function (request, response) {
//     try {
//         console.log(request.body)
//         const newUser = new User({ ...request.body });
//         const insertedUser = await newUser.save();
//         return response.status(201).json(insertedUser);
//     } catch (error) {
//         return response.status(400).send(error);
//         if (error.name === "ValidationError") {
//             let errors = {};

//             Object.keys(error.errors).forEach((key) => {
//                 errors[key] = error.errors[key].message;
//             });

//             return response.status(400).send(errors);
//         }
//         return response.status(500).send("Something went wrong");

//     }
// })
// userRoutes.route('/users/:id').put(async function (request, response) {
//     const { id } = request.params;
//     await User.updateOne({ id }, request.body);
//     const updatedUser = await User.findById(id);
//     return response.status(200).json(updatedUser);
// })
module.exports = userRoutes;
