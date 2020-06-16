class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {

      // case for Aged Brie
      if (this.items[i].name == 'Aged Brie') {
            this.items[i].sellIn--;
        if (this.items[i].quality < 50) {
          this.items[i].quality++;
        } else {
          this.items[i].quality = 50;
        }
      }
      // case for Backstage Pass
      else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn < 0) {
           if (this.items[i].quality < 50) {
             this.items[i].quality = 0;
           }
        } else if (this.items[i].sellIn <= 5) {
           if (this.items[i].quality < 50) {
             this.items[i].quality = this.items[i].quality + 3;
           }
        } else if (this.items[i].sellIn <= 10) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 2;
          }
        } else if (this.items[i].sellIn > 10) {
            if (this.items[i].quality < 50) {
              this.items[i].quality++;
            }
        }
      }
      // case for everything else
       else if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
            && this.items[i].name != 'Sulfuras, Hand of Ragnaros'
            && this.items[i].name != 'Aged Brie') {
             this.items[i].sellIn--;
             this.items[i].quality--;
       }
    }

    return this.items;
  }
}
