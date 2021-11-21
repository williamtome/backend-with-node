const express = require('express')
const router = express.Router()
const vendorsController = require('../controllers/vendors')

router.get('/list', vendorsController.list)

module.exports = router
