const Handlebars = require('handlebars');

// Get current year
const getCurrentYear = new Date().getFullYear();

Handlebars.registerHelper('currentYear', getCurrentYear);

module.exports = Handlebars