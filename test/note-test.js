(function(exports) {

  function NoteModel() {
    var note = new Note("Test note", 0);

    assert.equals(note.textReturn(), "Test note", 'note instantiates with note text')

    assert.equals(note.indexReturn(), 0, 'note instantiates with an index')
  };

  NoteModel();

})(this);
