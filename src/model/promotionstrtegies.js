
var PromotionStrtegies = {};
PromotionStrtegies.BUY_TWO_GET_ONE_FREE = function(cartitem) {

    return (cartitem.count - cartitem.get_promotion_count()) * cartitem.get_item_by_barcode().price;
}

module.exports = PromotionStrtegies;
