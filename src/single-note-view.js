(function(exports) {
  function SingleNoteView() {
  };

  SingleNoteView.prototype.noteReturnHTML = function(note) {
    return "<div>" + note.text + "</div>"
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
