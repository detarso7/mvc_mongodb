const conn = require('../db/conn')

module.exports = class Service{

    static async showProductsService(search){

        const regex = new RegExp(search, 'i');
        const products = await conn.db().collection('Produtos').find({name: {$regex: regex}}).toArray()

        return products

    }

}