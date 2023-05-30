// import models
const Product = require('./Product');
const User = require('./User');
const Category = require('./Category');

// Categories have many Products
Category.hasMany(Product, {
    foreignKey: 'category_id'
});

// Products belongsTo Category
Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

module.exports = {
    Product,
    User,
    Category,
};