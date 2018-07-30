(function(exports) {
  function testNoteDefaultText() {
    var note = new Note();

    assert.isTrue(note.text === 'bababa');
  }
  function testReturnText() {
    var note = new Note();
    note.addText('hi');
    assert.isTrue(note.text === 'hi');
  }

function testAddText() {
  var note = new Note();
  assert.isTrue(note.AddText("Hi Jeff") === "Hi Jeff");

}

  testNoteDefaultText();
  testReturnText();
})(this);
