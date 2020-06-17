class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
        this._updateByType(item)
      });
    return this.items;
  }
  _updateByType(item) {
    let types = {
      'Aged Brie': this._updateAgedBrie,
      'Backstage passes to a TAFKAL80ETC concert': this._updateBackstagePass,
      'Conjured': this._updateConjured,
      'Sulfuras, Hand of Ragnaros': function() { return },
      'default': this._updateElse
    }
    if (types[item.name]) {
      return types[item.name](item)
    } else {
      return types['default'](item)
    }
  }
  _updateAgedBrie(item) {
    item.sellIn--;
    if (item.quality < 50) {
      item.quality++;
    }
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
    item.sellIn--;
  }
  _updateConjured(item) {
    item.sellIn--;
    if (item.quality > 1) {
      item.quality = item.quality - 2;
    }
  }
  _updateElse(item) {
    if (item.sellIn <= 0) {
      if (item.quality > 1) {
        item.quality = item.quality - 2;
      }
    } else {
      if (item.quality > 0) {
        item.quality--;
      }
    }
    item.sellIn--;
  }
}
