(function(exports) {
  function NoteList() {
    this.notes = [];
    this.noteId = 0;
  };

  NoteList.prototype.notesReturn = function() {
    return this.notes;
  };

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text, this.noteId);
    this.notes.push(note);
    this.noteId++
    return note;
  };

  exports.NoteList = NoteList;

})(this);
