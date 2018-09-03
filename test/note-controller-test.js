(function(exports) {
function doubleList() {}
  doubleList.prototype.addNoteText = function(text) {
    return true
  }

  function testInstantiateController() {
    var controller = new Controller(list);
    assert.isTrue(controller instanceof Controller);
  }
  function testNoteControllerAddNote() {
    var list = new doubleList();
    assert.isTrue(list.addNoteText() == true)
  }
  // function testNoteControllerNoteView() {
  //   controller.ViewNote(list);
  //   assert.isTrue
  // }
  testInstantiateController();
  testNoteControllerAddNote();
})(this);



// var mockElement = {}
// var controller = new NotesController(mockNoteList, mockElement)
// controller.update()
// expect(element.innerHTML).toEqual('<div></div>')

// NotesController.prototype.update = function(element) {
// this.element = element;
// this.notelist = noteList;
// this.noteListView(this.noteList)
// }


// Can add properties to empty objects in Javascript.
