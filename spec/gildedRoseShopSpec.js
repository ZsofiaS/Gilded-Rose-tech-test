'use strict';

describe('Shop', function() {
  describe('#updateQuality', function() {
    it('decreases sellIn attribute by 1 for any product but Sulfuras', function() {
      let cheddar = new Item('Cheddar', 10, 10);
      let shop = new Shop([cheddar]);
      shop.updateQuality();
      expect(cheddar.sellIn).toEqual(9);
    })
    it('does not decrease sellIn attribute for Sulfuras', function() {
      let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
      let shop = new Shop([sulfuras]);
      shop.updateQuality();
      expect(sulfuras.sellIn).toEqual(0);
    })
  })
})
