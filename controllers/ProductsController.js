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

    static async controllerGetProducts(req, res){
        const id = req.params.id

        const showProduct = await Products.getProduct(id)

        res.render('products/product', {showProduct})


    }

        // static async controllerSearchProducts(req, res){
        //     const id = req.body.id

        //     showProduct = Products.getProduct(id)

        //     res.redirect('/products', {showProduct})
        // }

}