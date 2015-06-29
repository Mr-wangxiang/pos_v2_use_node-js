var CartItem = require('../../src/model/cartitem');
var Cart = require('../../src/model/cart');
var Pos = require('../../src/model/pos');
var Item = require('../../src/model/item');

describe('购物车商品列表',function () {
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
        new Item('ITEM000001', '雪碧', '瓶', 3.00),
        new Item('ITEM000003', '荔枝', '斤', 15.00),
        new Item('ITEM000005', '方便面', '袋', 4.50)
    ];

    it('购物车商品列表信息',function () {
        var cart = new Cart();
        var cartitem =new CartItem();
        var pos = new Pos();

        (inputs).forEach(function (tag) {
            cart.add(pos.scan(tag));
        });

        var result = [];
        (cart.cartitems).forEach(function(cartitem) {
            result.push(cartitem.get_item_by_barcode());
        });

        expect(result).toEqual(expect_array);
    });

});
