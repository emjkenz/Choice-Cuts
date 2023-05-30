const { Category } = require('../models');

const categoryData = [
    {
        id: 1,
        name: 'Beef',
    },
    {
        id: 2,
        name: 'Lamb',
    },
    {
        id: 3,
        name: 'Pork',
    },
    {
        id: 4,
        name: 'Fowl',
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;