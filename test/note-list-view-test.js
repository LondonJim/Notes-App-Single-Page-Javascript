(function(exports) {

  function noteListViewTests() {

    var testNoteList = new NoteList();
    testNoteList.createNote("Test");
    testNoteList.createNote("Test2");
    var noteListView = new NoteListView();

    assert.equals(noteListView.displayHTML(testNoteList), "<ul><li><div>Test</div></li><li><div>Test2</div></li></ul>", "noteListView.displayHTML() return a HTML string equal to all note texts created")

  };

  noteListViewTests();

})(this);
