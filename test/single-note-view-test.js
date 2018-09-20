(function(exports) {

  function singleNoteTests() {

    var testNoteList = new NoteList();
    testNoteList.createNote("Test");
    testNote = testNoteList.notes[0]
    var singleNoteView = new SingleNoteView();

    assert.equals(singleNoteView.noteReturnHTML(testNote), "<div>Test</div>", "singleNoteView.noteReturnHTML() return a HTML string of containing a single note")

  };

  singleNoteTests();

})(this);
