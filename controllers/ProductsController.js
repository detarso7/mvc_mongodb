const Products = require('../models/ProductsModel')

module.exports = class ProductsController {


    static async controllerShowProducts (req, res) {
        const showProducts = await Products.getProducts()
        
        res.render('products/all', {showProducts})
    }

    static createProducts (req, res){
        res.render('products/create')
    }

    static createProductsPost (req, res){

        const {name, price, image, description} = req.body

        const product = new Products(name, price, image, description)

        product.save()

        res.redirect('/products')
    }


}