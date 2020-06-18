'use strict';

describe('Shop', function() {
  it('stores an array of items', function() {
    let agedBrie = new Item('Aged Brie', 30, 20);
    let shop = new Shop([agedBrie]);
    expect(shop.items.length).toEqual(1);
  })
  describe('#updateQuality', function() {
    //updates sellIn
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
    //updates quality
      //Sulfuras
    it('keeps quality at 80 for Sulfuras', function() {
      let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
      let shop = new Shop([sulfuras]);
      shop.updateQuality();
      expect(sulfuras.quality).toEqual(80);
    })
      //Aged Brie
    it('increases quality of Aged Brie by 1 up to 50', function() {
      let agedBrie = new Item('Aged Brie', 30, 20);
      let shop = new Shop([agedBrie]);
      shop.updateQuality();
      expect(agedBrie.quality).toEqual(21);
    })
    it('keeps quality at 50 of Aged Brie after reaching 50', function() {
      let agedBrie = new Item('Aged Brie', 30, 50);
      let shop = new Shop([agedBrie]);
      shop.updateQuality();
      expect(agedBrie.quality).toEqual(50);
    })
      //Backstage pass
    it('increases quality of Backstage Passes by 1 as long as sellIn is more than 10', function() {
      let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 12);
      let shop = new Shop([pass]);
      shop.updateQuality();
      expect(pass.quality).toEqual(13);
    })
    it('increases quality of Backstage Passes by 2 as long as sellIn is equal or less than 10', function() {
      let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 12);
      let shop = new Shop([pass]);
      shop.updateQuality();
      expect(pass.quality).toEqual(14);
    })
    it('increases quality of Backstage Passes by 3 as long as sellIn is less than 5', function() {
      let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 3, 12);
      let shop = new Shop([pass]);
      shop.updateQuality();
      expect(pass.quality).toEqual(15);
    })
    it('quality of Backstage Passes cannot be more than 50', function() {
      let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50);
      let shop = new Shop([pass]);
      shop.updateQuality();
      expect(pass.quality).toEqual(50);
    })
    it('keeps quality of Backstage Passes at 0 after passing sellIn date', function() {
      let pass = new Item('Backstage passes to a TAFKAL80ETC concert', -1, 12);
      let shop = new Shop([pass]);
      shop.updateQuality();
      expect(pass.quality).toEqual(0);
    })
    //Everything else
    it('decreases quality by 1 of all other items', function() {
      let cheddar = new Item('Cheddar', 10, 10);
      let shop = new Shop([cheddar]);
      shop.updateQuality();
      expect(cheddar.quality).toEqual(9);
    })
    it('decreases quality by 2 of all other items after passing expiry date', function() {
      let cheddar = new Item('Cheddar', 0, 10);
      let shop = new Shop([cheddar]);
      shop.updateQuality();
      expect(cheddar.quality).toEqual(8);
    })
    it('never decreases quality below 0', function() {
      let soulstone = new Item('Soulstone', 10, 0);
      let shop = new Shop([soulstone]);
      shop.updateQuality();
      expect(soulstone.quality).toEqual(0);
    })
    //Conjured
    it('decreases quality of Conjured', function() {
      let conjured = new Item('Conjured', 20, 20);
      let shop = new Shop([conjured]);
      shop.updateQuality();
      expect(conjured.quality).toEqual(18);
    })
    it('never decreases quality below 0', function() {
      let conjured = new Item('Conjured', 10, 0);
      let shop = new Shop([conjured]);
      shop.updateQuality();
      expect(conjured.quality).toEqual(0);
    })
    //Test for all kind of items
    it('updates all items as required', function() {
      let agedBrie = new Item('Aged Brie', 30, 30);
      let soulstone = new Item('Conjured', 10, 10);
      let petCharm = new Item('Pet Charm', 10, 10);
      let pass = new Item('Backstage passes to a TAFKAL80ETC concert', 7, 12);
      let sulfuras = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
      let shop = new Shop([agedBrie, soulstone, petCharm, pass, sulfuras]);
      shop.updateQuality();
      expect(agedBrie.quality).toEqual(31);
      expect(soulstone.quality).toEqual(8);
      expect(petCharm.quality).toEqual(9);
      expect(pass.quality).toEqual(14);
      expect(sulfuras.quality).toEqual(80);
    })
  })
})
