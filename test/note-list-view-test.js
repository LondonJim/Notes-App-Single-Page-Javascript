(function(exports) {

  function noteListViewTests() {

    var testNoteList = new NoteList();
    testNoteList.createNote("First Testing the length");
    testNoteList.createNote("Second Testing the length");
    var noteListView = new NoteListView();

    assert.equals(noteListView.displayHTML(testNoteList),
    `<ul><div><a href="" id="note0"><li>First Testing the le...</li></a><a href="" id="note1"><li>Second Testing the l...</li></a></div></ul>`,
    "noteListView.displayHTML() return a HTML string that is limited to 20 characters of all note texts created");

  };

  noteListViewTests();

})(this);
