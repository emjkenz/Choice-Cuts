const { Product } = require('../models');

const productData = [
    {
        product_name: 'Cow',
        price: 1337,
        stock: 69,
        category_id: 1,
    },
    {
        product_name: 'Chicken',
        price: 42,
        stock: 42,
        category_id: 2,
    },
    {
        product_name: 'Piggies',
        price: 333,
        stock: 666,
        category_id: 3,
    },
    {
        product_name: 'Sheep',
        price: 316,
        stock: 3,
        category_id: 4,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;