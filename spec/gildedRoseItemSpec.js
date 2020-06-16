'use strict';

describe('Item', function() {
  let item = new Item("itemName", 0, 0);

  it('has a name', function() {
    expect(item.name).toEqual("itemName");
  })
  it('has a sellIn attribute', function() {
    expect(item.sellIn).toEqual(0);
  })
  it('has a quality attribute', function() {
    expect(item.quality).toEqual(0);
  })
})
