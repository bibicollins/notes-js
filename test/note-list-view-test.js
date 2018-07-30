(function(exports) {
  function testListViewDefaultList() {
  var viewlist = new ViewList();
  assert.isTrue(viewlist.viewlists === list);
  }
  function testViewListShow() {
    var list = new List();
    var note = new Note();
    list.addNoteText('hi');
    list.addNoteText('hello');
    var viewlist = new ViewList(list);
    assert.isTrue(viewlist.ViewListShow() === '<ul><div><li>hi</div></li><li><div>hello</div></li></ul>')
  }

  testListViewDefaultList();
  testViewListShow();
})(this);
