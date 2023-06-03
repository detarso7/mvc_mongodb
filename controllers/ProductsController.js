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

        const showProduct = await Products.showProduct(id)

        res.render('products/product', {showProduct})


    }

    static async controllerSearchProducts(req, res) {
        const search = req.body.search;
        const showProducts = await Products.searchProduct(search);

        res.render('products/all', {showProducts});

      }

      static async deleteProducts(req, res) {
        const id = req.params.id
        await Products.deleteProduct(id)

        res.redirect('/products')
      }

}