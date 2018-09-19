(function(exports) {

  function noteListViewTests() {

    var testNoteList = new NoteList();
    testNoteList.createNote("Test");
    testNoteList.createNote("Test2")
    var noteListView = new NoteListView();

    assert.isTrue(noteListView.displayHTML(testNoteList) === "<ul><li>Test</li><li>Test2</li></ul>", "noteListView.displayHTML() return a HTML string of all note texts")

  };

  noteListViewTests();

})(this);
