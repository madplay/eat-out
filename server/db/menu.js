const Realm = require('realm');

const MenuSchema = {
    name: 'menu',
    properties: {
        name: 'string',
        restaurant: 'string'
    }
};
const menuRealm = new Realm({
    path: 'menu.realm',
    schema: [MenuSchema]
});

module.exports = {
    menuRealm
};

