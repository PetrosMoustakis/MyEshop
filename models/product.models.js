const mongoose = require('mongoose')

const Schema = mongoose.Schema

let productSchema = new Schema ({
    product: {type: String,
            required: [true, 'Product is a required field'],
            max: 100,
            unique: true,
            lowercase: true
            },
    cost: {type: Number,
            required: [true, 'Price is a required field'],
            max:50
            },
    description: {type: String,
                max: 200,
                null: true
            },
    quantity: {type: Number,
            max: 50,
            required: [true, 'Quantity is a required field']}                           
            
}, {
    collection: 'products',
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)