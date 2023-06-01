const Products = require('../models/ProductsModel')

module.exports = class ProductsController {


    static controllerShowProducts (req, res) {
        res.render('products/all')
    }

    static createProducts (req, res){
        res.render('products/create')
    }

    static createProductsPost (req, res){

        const {name, price, desciption} = req.body

        const product = new Products(name, price, desciption)

        product.save()

        res.redirect('/products')
    }

}