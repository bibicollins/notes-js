
(function(exports) {
  function Controller(list) {
    this.notelist = list || new List();
    this.viewlist = new ViewList(this.notelist);
  }
  Controller.prototype.addNote = function(text) {
    return this.notelist.addNoteText(text);
  }
  Controller.prototype.getHTML = function() {
    var id = document.getElementById('app');
    id.innerHTML = this.viewlist.ViewListShow();
  }
  var controller = new Controller();
  controller.getHTML();
  exports.Controller = Controller;
})(this);
