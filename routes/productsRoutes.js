const express = require('express')
const router = express.Router()

const productsController = require('../controllers/ProductsController')

router.get('/', productsController.controllerShowProducts)
router.get('/create', productsController.createProducts)
router.post('/create', productsController.createProductsPost)
router.get('/:id', productsController.controllerGetProducts)
router.post('/search', productsController.controllerSearchProducts)

module.exports = router