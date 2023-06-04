const { Product } = require('../models');

const {cow, pig} = require('../picker');

const productData = [
    {
        name: 'Cow',
        image: '/assets/animals/cow.jpg',
        price: 1337,
        stock: 69,
        category_id: 1,
        cuts: cow,
    },
    {
        name: 'Chicken',
        image: '/assets/animals/chicken.jpg',
        price: 42,
        stock: 42,
        category_id: 4,
    },
    {
        name: 'Piggies',
        image: '/assets/animals/pig.jpg',
        price: 333,
        stock: 666,
        category_id: 3,
        cuts: pig,
    },
    {
        name: 'Sheep',
        image: '/assets/animals/sheep.jpg',
        price: 316,
        stock: 3,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;