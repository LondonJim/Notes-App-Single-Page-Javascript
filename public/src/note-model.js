(function(exports) {
  function NoteModel(string) {
    this.text = string;
  };

  NoteModel.prototype.textReturn = function() {
    return this.text;
  };

  exports.NoteModel = NoteModel;

})(this);
