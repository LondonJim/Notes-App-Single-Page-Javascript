(function(exports) {
  function NoteListView() {
    this.notesInArray = ""
  };

  NoteListView.prototype.displayHTML = function(noteList) {
    this.notesInArray = noteList
    var noteArray = this.notesInArray.notesReturn() // array of note objects
    var textArray = noteArray.map(note => note.text);
    return "<ul><li><div>" + textArray.join('</div></li><li><div>') + "</div></li></ul>"
  }

  exports.NoteListView = NoteListView;

})(this);
