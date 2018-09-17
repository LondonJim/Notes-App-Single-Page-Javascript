(function(exports) {
  function NoteModel(string) {
    this.noteText = string;
  };

  NoteModel.prototype.note = function() {
    return this.noteText;
  };

  exports.NoteModel = NoteModel;
  
})(this);
