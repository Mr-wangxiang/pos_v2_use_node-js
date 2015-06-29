var fixtures = require('../../src/fixtures');
var Promotion = require('../../src/model/promotion');

describe('商品列表',function () {

    var promotion = new Promotion();
    var result = [
        new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
            'ITEM000005'
        ])
    ];

    it('商品列表信息',function () {

        expect(fixtures.loadPromotions()).toEqual(result);
    });

});
