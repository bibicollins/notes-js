(function(exports) {
  function testSingleNoteCanBeInstantiated() {
    var singlenote = new singleNoteView();
    assert.isTrue(singlenote instanceof singleNoteView)
  }
  function testSingleNoteReturnsHTML() {

    var singlenote = new singleNoteView();

  }
  testSingleNoteReturnsHTML()
  testSingleNoteCanBeInstantiated()
})(this);

// MAKE IT RETURN THE STRING
