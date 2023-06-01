const products = require('../models/Products')

module.exports = class ProductsController {


    static controllerShowProducts (req, res) {
        res.render('/all')
    }


}