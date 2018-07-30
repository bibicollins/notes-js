(function(exports) {
  function ViewList(list) {
    this.viewlists = list;
  };

  ViewList.prototype.ViewListShow = function() {
    return ('<ul><div><li>' + this.viewlists.lists.join('</div></li><li><div>')+ '</div></li></ul>');
  }

exports.ViewList = ViewList;
})(this);
