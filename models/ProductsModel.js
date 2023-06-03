const { ObjectId } = require('mongodb')
const conn = require('../db/conn')
const Service = require('../service/service')

class ProductsModel {
    constructor (name, price, image, description){

        this.name = name
        this.image = image
        this.price = price
        this.description = description

    }

    save(){
        const product = conn.db().collection('Produtos').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description 
        })

        return product
    }

        static async getProducts (){
            const products = await conn.db().collection('Produtos').find().toArray()

            return products
        } 
         
        static async showProduct (id){
            const products = await conn.db().collection('Produtos').findOne({_id: ObjectId(id)})

            return products
        } 

        static async searchProduct (search){
            const products = Service.showProductsService(search)

            return products
        } 
}

module.exports = ProductsModel