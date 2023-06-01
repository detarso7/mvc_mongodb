const conn = require('../db/conn')

class ProductsModel {
    constructor (name, price, description){

        this.name = name
        this.price = price
        this.description = description

    }

    save(){
        const product = conn.db().collection('Produtos').insertOne({
            name: this.name,
            price: this.price,
            description: this.description 
        })

        return product
    }
}

module.exports = ProductsModel