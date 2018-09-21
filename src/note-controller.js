(function(exports){

  function NoteController(noteList = new NoteList(), noteListView = new NoteListView(), singleNoteView = new SingleNoteView()){
    this.noteList = noteList;
    this.noteListView = noteListView;
    this.singleNoteView = singleNoteView;
  };

  NoteController.prototype.displayNotes = function(noteList = this.noteList) {
      document.getElementById("app").innerHTML = this.noteListView.displayHTML(noteList);
      this.eventListener();
  };

  NoteController.prototype.createNote = function(note) {
    this.noteList.createNote(note);
  };

  NoteController.prototype.eventListener = function() {
    notes = this.noteList.notesReturn();
    singleNotes = this.singleNoteView
    notes.forEach (function(note) {
      document
        .getElementById(`note${note.id}`)
        .addEventListener("click", function(clickEvent) {
          clickEvent.preventDefault();
          document.getElementById("app")
                  .innerHTML = singleNotes.noteReturnHTML(note);
        });
    });
  };

  exports.NoteController = NoteController;

})(this);
