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
    // if item.name is in the 'types' object -> call the function, otherwise -> call default function
    types[item.name] ? types[item.name](item) : types['default'](item)
  }
  _updateAgedBrie(item) {
    item.sellIn--;
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
    item.sellIn--;
  }
  _updateConjured(item) {
    item.sellIn--;
    item.quality > 1 ? item.quality = item.quality -2 : null
  }
  _updateElse(item) {
    if (item.sellIn <= 0) {
      item.quality > 1 ? item.quality = item.quality - 2 : null
    } else {
      item.quality > 0 ? item.quality-- : null
    }
    item.sellIn--;
  }
}
