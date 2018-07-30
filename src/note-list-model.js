(function(exports) {
  function List() {
    this.lists = [];
  };

  List.prototype.addNoteText = function(text) {
     note = new Note();
     var texts
     texts = note.addText(text)
     this.lists.push(text);
  }
  List.prototype.ShowNotes = function() {
     return this.lists;
  }
  exports.List = List;
})(this)

var list
list = console.log(List());
