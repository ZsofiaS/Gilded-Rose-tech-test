class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
        // case for Aged Brie
        if (item.name == 'Aged Brie') {
          this._updateAgedBrie(item);
        } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            this._updateBackstagePass(item);
        } else if (item.name == 'Conjured') {
            this._updateConjured(item);
        } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
            return;
        } else {
            this._updateElse(item);
         }
      });

    return this.items;
  }

  _updateAgedBrie(item) {
    item.sellIn--;
    if (item.quality < 50) {
      item.quality++;
    }
  }

  _updateBackstagePass(item) {
    if (item.sellIn < 0) {
       if (item.quality < 50) {
         item.quality = 0;
       }
    } else if (item.sellIn <= 5) {
       if (item.quality < 50) {
         item.quality = item.quality + 3;
       }
    } else if (item.sellIn <= 10) {
      if (item.quality < 50) {
        item.quality = item.quality + 2;
      }
    } else if (item.sellIn > 10) {
        if (item.quality < 50) {
          item.quality++;
        }
    }
    item.sellIn--;
  }

  _updateConjured(item) {
    item.sellIn--;
    item.quality = item.quality - 2;
  }

  _updateElse(item) {
    item.sellIn--;
    item.quality--;
  }
}
