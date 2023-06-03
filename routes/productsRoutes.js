const express = require('express')
const router = express.Router()

const productsController = require('../controllers/ProductsController')

router.get('/', productsController.controllerShowProducts)
router.get('/:id', productsController.controllerGetProducts)
// router.get('/search', productsController.controllerSearchProducts)
router.get('/create', productsController.createProducts)
router.post('/create', productsController.createProductsPost)

module.exports = router