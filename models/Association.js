const Saucer = require('./Saucer.models');
const Sauces = require('./Sauces.models');
const OrderP = require('./받침접시-Order.models');
const OrderS = require('./소스-Order.models');
const Order = require('./NewOrder.models');

Saucer.belongsToMany(Order, { through: 'OrderP' });
Sauces.belongsToMany(Order, { through: 'OrderS' });
Order.belongsToMany(Saucer, { through: 'OrderP' });
Order.belongsToMany(Sauces, { through: 'OrderS' });