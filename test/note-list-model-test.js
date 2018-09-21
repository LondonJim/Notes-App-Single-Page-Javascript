(function(exports) {

  function noteListTests() {
    var noteList = new NoteList();

    assert.equals((noteList.notes).length, 0, 'noteList Instantiates with an array containing 0 elements');

    assert.equals((noteList.notesReturn()).length, 0, 'noteList returns empty array')


    testNote = noteList.createNote("test note")

    assert.equals(testNote.text, 'test note', "noteList creates a note equals to 'test note'")

    assert.equals(testNote.id, 0, "noteList creates a note with id that equals 0")

    assert.equals(noteList.notesReturn().length, 1, 'noteList adds object to array, array contains 1 element')

    assert.equals(noteList.notes[0].text, 'test note', "noteList adds new note to array that equals 'test note'")

  };

  noteListTests();

})(this);

mockModel = {}
