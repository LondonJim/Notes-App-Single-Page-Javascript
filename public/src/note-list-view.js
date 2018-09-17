(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.displayHTML = function() {
    var noteArray = this.noteList.notesReturn() // array of note objects
    var textArray = noteArray.map(note => note.text);
    return "<ul><li>" + textArray.join('</li><li>') + "</li></ul>"
  }

  exports.NoteListView = NoteListView;

})(this);
