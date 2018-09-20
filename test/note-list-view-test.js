(function(exports) {

  function noteListViewTests() {

    var testNoteList = new NoteList();
    testNoteList.createNote("First Testing the length");
    testNoteList.createNote("Second Testing the length");
    var noteListView = new NoteListView();

    assert.equals(noteListView.displayHTML(testNoteList),
    "<ul><li><div>First Testing the le...</div></li><li><div>Second Testing the l...</div></li></ul>",
    "noteListView.displayHTML() return a HTML string that is limited to 20 characters of all note texts created");

  };

  noteListViewTests();

})(this);
