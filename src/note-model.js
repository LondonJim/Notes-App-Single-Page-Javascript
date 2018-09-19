(function(exports) {
  function Note(string) {
    this.text = string;
  };

  Note.prototype.textReturn = function() {
    return this.text;
  };

  exports.Note = Note;

})(this);
