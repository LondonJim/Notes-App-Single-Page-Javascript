(function (exports) {

  function noteController() {
    mockNoteList = new MockNoteList
    mockNoteListView = new MockNoteListView
    mockSingleNoteView = new MockSingleNoteView
    var noteController = new NoteController(mockNoteList, mockNoteListView, mockSingleNoteView);
    noteController.createNote("Note Test")
    noteController.displayNotes(mockNoteList.note)

    assert.equals((document.getElementById("app").innerHTML), `<a href="" id="note0"><li>Note Test</li></a>`, 'noteController returns note equal to note created');
    
    document.getElementById("note0").click();
    assert.equals((document.getElementById("app").innerHTML), `<div>Note Test</div>`, 'noteController returns note equal to note created when link is clicked');
  };

  noteController();

})(this);
