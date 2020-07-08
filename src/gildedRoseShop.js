class Shop {
  constructor(items=[]){
    this.items = items;
    this.maxQuality = 50;
    this.sellInDate = 0;
    this.minQuality = 0;
    this.sellIn3 = 3;
    this.sellIn5 = 5;
    this.sellIn10 = 10;
  }
  updateQuality = () => {
    this.items.forEach((item) => {
      this._updateQualityByType(item);
      this._updateSellInByType(item);
    });
    return this.items;
  }
  _updateQualityByType = (item) => {
    let types = {
      'Aged Brie': this._updateAgedBrie,
      'Backstage passes to a TAFKAL80ETC concert': this._updateBackstagePass,
      'Conjured': this._updateConjured,
      'Sulfuras, Hand of Ragnaros': function() { return },
      'default': this._updateElse
    }
    types[item.name] ? types[item.name](item) : types['default'](item);
  }
  _updateSellInByType = (item) => {
    let types = {
      'Sulfuras, Hand of Ragnaros': function() { return },
      'default': function() { item.sellIn-- }
    }
    types[item.name] ? types[item.name](item) : types['default'](item);
  }
  _updateAgedBrie = (item) => {
    item.quality < this.maxQuality ? item.quality++ : null
  }
  _updateBackstagePass = (item) => {
    if (item.quality < this.maxQuality) {
      switch (true) {
        case item.sellIn <= this.sellInDate:
          item.quality = this.minQuality;
          break;
        case item.sellIn <= this.sellIn5:
          item.quality = item.quality + 3;
          break;
        case item.sellIn <= this.sellIn10:
          item.quality = item.quality + 2;
          break;
        default:
          item.quality++
          break;
      }
    }
  }
  _updateConjured = (item) => {
    item.quality > 1 ? item.quality = item.quality -2 : null
  }
  _updateElse = (item) => {
    if (item.sellIn <= 0) {
      item.quality > 1 ? item.quality = item.quality - 2 : null
    } else {
      item.quality > this.minQuality ? item.quality-- : null
    }
  }
}
