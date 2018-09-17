(function(exports) {

  function testNoteInstantiation() {
    var noteModel = new NoteModel("Test note");

    if(noteModel.note() !== "Test note") {
      throw new Error("Note not instantiated correctly")
    }

  };

  testNoteInstantiation();

})(this);
