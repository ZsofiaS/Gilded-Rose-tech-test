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
    it('keeps quality at 50 of Backstage Passes after reaching 50', function() {
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

  })
})
