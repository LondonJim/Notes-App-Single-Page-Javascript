(function(exports) {
  function NoteListView() {
    this.notesInArray = ""
  };

  NoteListView.prototype.displayHTML = function(noteList) {
    this.notesInArray = noteList
    var noteArray = this.notesInArray.notesReturn() // array of note objects
    var textArray = noteArray.map(note => (this.calcLength(note.text)));
    return "<ul><li><div>" + textArray.join('</div></li><li><div>') + "</div></li></ul>"
  }

  NoteListView.prototype.calcLength = function(note) {
    if (note.length <= 20) {
      return (note);
    } else {
      return ((note).substring(0,20) + "...")
    };
  };

  exports.NoteListView = NoteListView;

})(this);
