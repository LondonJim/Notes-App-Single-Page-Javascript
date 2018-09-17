(function(exports) {
  function NoteListModel() {
    this.notes = [];
  };

  NoteListModel.prototype.notesReturn = function() {
    return this.notes;
  };

  exports.NoteListModel = NoteListModel;

})(this);
