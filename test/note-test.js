(function(exports) {

  function testNoteInstantiation() {
    var note = new Note("Test note");

    assert.equals(note.textReturn(), "Test note", 'note instantiates with note text')

  };

  testNoteInstantiation();

})(this);
