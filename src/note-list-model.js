(function(exports) {
  function NoteList() {
    this.notes = [];
    noteId = 0;
  };

  NoteList.prototype.notesReturn = function() {
    return this.notes;
  };

  NoteList.prototype.createNote = function(text) {
    var note = new Note(text, noteId);
    this.notes.push(note);
    noteId++
    return note;
  };

  exports.NoteList = NoteList;

})(this);
