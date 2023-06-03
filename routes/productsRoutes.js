const express = require('express')
const router = express.Router()

const productsController = require('../controllers/ProductsController')

router.get('/', productsController.controllerShowProducts)
router.get('/create', productsController.createProducts)
router.post('/create', productsController.createProductsPost)
router.get('/:id', productsController.controllerGetProducts)
router.post('/search', productsController.controllerSearchProducts)
router.post('/delete/:id', productsController.deleteProducts)
router.get('/edit/:id', productsController.editProducts)
router.post('/edit/:id', productsController.editProductsPost)

module.exports = router