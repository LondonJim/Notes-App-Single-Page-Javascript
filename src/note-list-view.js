(function(exports) {
  function NoteListView() {
    this.notesInArray = ""
  };

  NoteListView.prototype.displayHTML = function(noteList) {
    this.notesInArray = noteList;
    var noteArray = this.notesInArray.notesReturn(); // array of note objects
    returnedHTML = "<ul><div>";
    noteArray.forEach(function(note) {
      returnedHTML += `<a href="" id="note${note.id}"><li>${this.calcLength(note.text)}</li></a>`
    }.bind(this));
    returnedHTML += "</div></ul>";
    return returnedHTML;
  };

  NoteListView.prototype.calcLength = function(note) {
    if (note.length <= 20) {
      return (note);
    } else {
      return ((note).substring(0,20) + "...");
    };
  };

  exports.NoteListView = NoteListView;

})(this);
