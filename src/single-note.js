(function(exports){
  function singleNoteView(note) {
    this.note = note || new Note();
  };

  singleNoteView.prototype.getHTMLstring = function(note) {
    return '<div>'+this.note.returnText()+'<div>'
  }
  exports.singleNoteView = singleNoteView;
})(this);
