(function(exports) {
  function Note() {
    this.text = 'bababa'
  };
  Note.prototype.addText = function(text) {
    this.text = text
  }
  Note.prototype.returnText = function() {
    return this.text;
  }
  exports.Note = Note;
})(this)

var note
note = console.log(Note());
