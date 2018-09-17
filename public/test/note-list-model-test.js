(function(exports) {

  function noteListTests() {
    var noteList = new NoteList();

    assert.isTrue((noteList.notes).length === 0, 'noteList Instantiates with an array');

    assert.isTrue((noteList.notesReturn()).length === 0, 'noteList returns empty array')

    assert.isTrue(noteList.createNote("test note").text === "test note", 'noteList creates a note')

    assert.isTrue(noteList.notesReturn().length === 1, 'noteList adds object to array')

    assert.isTrue(noteList.notes[0].text === "test note", 'noteList adds new note to array')

  };

  noteListTests();

})(this);
