(function(exports) {
  function Note(text, id) {
    this.text = text;
    this.id = id
  };

  Note.prototype.textReturn = function() {
    return this.text;
  };

  Note.prototype.indexReturn = function() {
    return this.index;
  };

  exports.Note = Note;

})(this);
