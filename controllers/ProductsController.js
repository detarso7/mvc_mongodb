const Products = require('../models/ProductsModel')

module.exports = class ProductsController {

    // Todos os Produtos
    static async controllerShowProducts (req, res) {
        const showProducts = await Products.getProducts()
                
        res.render('products/all', {showProducts})
    }

    // Form Criação de Produtos
    static createProducts (req, res){
        res.render('products/create')
    }

    // Criação de Produtos
    static createProductsPost (req, res){

        const {name, price, image, description} = req.body

        const product = new Products(name, price, image, description)

        product.save()

        res.redirect('/products')
    }

    // GET Produto
    static async controllerGetProducts(req, res){
        const id = req.params.id

        const showProduct = await Products.showProduct(id)

        res.render('products/product', {showProduct})

    }

    // Pesquisa de Produtos
    static async controllerSearchProducts(req, res) {
        const search = req.body.search;
        const showProducts = await Products.searchProduct(search);

        res.render('products/all', {showProducts});

      }

      // Exclusão de Produtos
      static async deleteProducts(req, res) {
        const id = req.params.id
        await Products.deleteProduct(id)

        res.redirect('/products')
      }
    
      // Form Atualização de Produtos
      static async editProducts(req, res){
        const id = req.params.id

        const editProduct = await Products.showProduct(id)

        res.render('products/edit', {editProduct})
      }

      // Atualização de Produtos
      static async editProductsPost(req, res){
        const id = req.params.id
        const {name, price, image, description} = req.body

        const product = {
            name: name,
            price: price,
            image: image,
            description: description
        }

        await Products.upDateProduct(id, product)

        res.redirect('/products')
      }

}