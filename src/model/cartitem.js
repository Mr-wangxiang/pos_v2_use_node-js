var fixtures = require('../fixtures');
var PromotionStrtegies = require('./promotionstrtegies');

function CartItem(barcode, count) {
    this.barcode = barcode;
    this.count = count;
}
CartItem.prototype.get_item_by_barcode = function() {
    var all_items = fixtures.loadAllItems();
    var barcode = this.barcode;
    var result;
    (all_items).forEach(function(item) {
        if (item.barcode === barcode) {
            result = item;
        }
    });
    return result;
};

CartItem.prototype.get_promotion_count = function() {
    var barcode = this.barcode;
    var count = this.count;
    var promotions = fixtures.loadPromotions();
    var promotion_count = 0;
    promotions[0].barcodes.forEach(function(promotion_barcode) {
        if (promotion_barcode === barcode) {
            promotion_count = parseInt(count / 3);
        }
    });
    return promotion_count;
}

CartItem.prototype.get_subtotal = function() {
    var promotions = fixtures.loadPromotions();
    var subtotal = 0;
    var temp = this;

    promotions.forEach(function(promotion) {
        subtotal = PromotionStrtegies[promotion.type](temp);
    });
    return subtotal;
};

CartItem.prototype.get_promotion_subtotal = function() {

    return this.get_promotion_count() * this.get_item_by_barcode().price;
};
CartItem.prototype.is_promotion = function() {
    return this.get_promotion_count() ? true : false;
};
module.exports = CartItem;
