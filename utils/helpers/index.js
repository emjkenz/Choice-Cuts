const Hanlebars = require('handlebars');

// Get current year
const getCurrentYear = new Date().getFullYear();

Hanlebars.registerHelper('currentYear', getCurrentYear);

module.exports = Hanlebars