var Cart = require('./model/cart');
var Pos = require('./model/pos');
function printInventory(collection) {
    var pos = new Pos();
    var cart = new Cart();
    (collection).forEach(function (tag) {
        cart.add(pos.scan(tag));
    });
    return pos.print_goods_list(cart);
}
module.exports = printInventory;
