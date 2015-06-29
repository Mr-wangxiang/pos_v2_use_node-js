var Pos = require('../../src/model/pos');

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
    { barcode: 'ITEM000001', count: 1 },
    { barcode: 'ITEM000001', count: 1 },
    { barcode: 'ITEM000001', count: 1 },
    { barcode: 'ITEM000001', count: 1 },
    { barcode: 'ITEM000001', count: 1 },
    { barcode: 'ITEM000003', count: 2 },
    { barcode: 'ITEM000005', count: 1 },
    { barcode: 'ITEM000005', count: 1 },
    { barcode: 'ITEM000005', count: 1 }];

    it('将标签拆分成barcode和count并分组',function () {
        var pos = new Pos();

        var result = [];
        (inputs).forEach(function (tag) {
            result.push(pos.scan(tag));
        });

        expect(result).toEqual(expect_array);
    });
    

});
