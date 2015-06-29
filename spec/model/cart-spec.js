var Cart = require('../../src/model/cart');
var Pos = require('../../src/model/pos');
var CartItem = require('../../src/model/cartitem');

describe('tags',function () {
    var inputs = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005'
    ];
    var expect_array = [
    new CartItem('ITEM000001',5),
    new CartItem('ITEM000003',2),
    new CartItem('ITEM000005',3)];

    it('计算每个商品对应的count',function () {
        var pos = new Pos();
        var cart = new Cart();

        (inputs).forEach(function (tag) {
            cart.add(pos.scan(tag));
        });

        expect(cart.cartitems).toEqual(expect_array);
    });
    it('计算每个商品对应的总计',function () {
        var pos = new Pos();
        var cart = new Cart();

        (inputs).forEach(function (tag) {
            cart.add(pos.scan(tag));
        });

        expect(cart.cartitems).toEqual(expect_array);
    });

});
