class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      this._updateQualityByType(item);
      this._updateSellInByType(item);
    });
    return this.items;
  }
  _updateQualityByType(item) {
    let types = {
      'Aged Brie': this._updateAgedBrie,
      'Backstage passes to a TAFKAL80ETC concert': this._updateBackstagePass,
      'Conjured': this._updateConjured,
      'Sulfuras, Hand of Ragnaros': function() { return },
      'default': this._updateElse
    }
    types[item.name] ? types[item.name](item) : types['default'](item);
  }
  _updateSellInByType(item) {
    let types = {
      'Sulfuras, Hand of Ragnaros': function() { return },
      'default': function() { item.sellIn-- }
    }
    types[item.name] ? types[item.name](item) : types['default'](item);
  }
  _updateAgedBrie(item) {
    item.quality < 50 ? item.quality++ : null
  }
  _updateBackstagePass(item) {
    if (item.quality < 50) {
      if (item.sellIn <= 0) {
           item.quality = 0;
      } else if (item.sellIn <= 5) {
           item.quality = item.quality + 3;
      } else if (item.sellIn <= 10) {
          item.quality = item.quality + 2;
      } else if (item.sellIn > 10) {
            item.quality++;
      }
    }
  }
  _updateConjured(item) {
    item.quality > 1 ? item.quality = item.quality -2 : null
  }
  _updateElse(item) {
    if (item.sellIn <= 0) {
      item.quality > 1 ? item.quality = item.quality - 2 : null
    } else {
      item.quality > 0 ? item.quality-- : null
    }
  }
}
