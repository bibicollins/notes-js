(function(exports) {
  function testListInitialize() {
    var list = new List();

    assert.isTrue(list.lists.length === 0);
  }

  function testaddNoteText() {
    var list = new List();

    list.addNoteText("Favourite drink: seltzer")
    assert.isTrue(list.lists.length === 1);
  }

  function testShowNotes() {
    var list = new List();
    list.addNoteText("Favourite drink: seltzer")
    assert.isTrue(list.ShowNotes().includes("Favourite drink: seltzer"))

   }


  testListInitialize();
  testaddNoteText();
  testShowNotes();
})(this);
