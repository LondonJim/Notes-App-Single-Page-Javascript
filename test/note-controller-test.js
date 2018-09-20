(function (exports) {

  function noteController() {
    mockNoteList = new MockNoteList
    mockNoteListView = new MockNoteListView
    var noteController = new NoteController(mockNoteList, mockNoteListView);
    noteController.createNote("Note Test")
    noteController.displayNotes(mockNoteList.note)

    assert.equals((document.getElementById("app").innerHTML), "Note Test", 'noteController returns note equal to note created');
  };

  noteController();

})(this);
