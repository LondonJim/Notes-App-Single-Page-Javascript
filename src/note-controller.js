(function(exports){

  function NoteController(noteList = new NoteList(), noteListView = new NoteListView()){
    this.noteList = noteList;
    this.noteListView = noteListView;
  };

  NoteController.prototype.displayNotes = function(noteList = this.noteList) {
      document.getElementById("app").innerHTML = this.noteListView.displayHTML(noteList);
  };

  NoteController.prototype.createNote = function(note) {
    this.noteList.createNote(note);
  };

  exports.NoteController = NoteController;

})(this);
