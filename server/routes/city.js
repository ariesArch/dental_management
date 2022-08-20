const { request, response } = require('express');
const express = require('express')
const cityRoutes = express.Router();
const { City } = require('../models/city')
// cityRoutes.get('/cities', function (request, response) {
//     City.find().then(result => {
//         response.status(200).json(result)
//     }).catch(error => {
//         console.log(error)
//     })
// })
// cityRoutes.get('/cities', async function (request, response) {
//     const allCities = await City.find();
//     console.log(allCities)
//     return response.status(200).json(allCities)
// })

cityRoutes.get('/cities', async (request, response) => {
    const allCities = await City.find();
    return response.status(200).json(allCities);
})

// cityRoutes.get('/cities/:id', function (request, response) {
//     const { id } = request.params
//     City.findById(id).then(result => {
//         return response.status(200).json(result);
//     }).catch(error => {
//         console.error(error)
//     })
// })
cityRoutes.get('/cities/:id', async function (request, response) {
    try {
        const city = await City.findById(request.params.id)
        return response.status(200).json(city);
    } catch (error) {
        if (error.name == 'CastError') {
            return response.status(400).json({ status: 400, message: error.message })
        }
    }
})
module.exports = cityRoutes