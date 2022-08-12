/**
 * Controller
 */
 const {getServiceData} = require('../services/SomeService')
 
 /**
  * Get data
  * @param {Object} req the request
  * @param {Object} res the response
  */
 async function getData (req, res) {
   const result = await getServiceData(123)
   res.send(result)
 }
 
 module.exports = {
    getData
 }