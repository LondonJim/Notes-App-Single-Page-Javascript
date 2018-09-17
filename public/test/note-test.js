(function(exports) {

  function testNoteInstantiation() {
    var noteModel = new NoteModel("Test note");

    if(noteModel.textReturn() !== "Test note") {
      throw new Error("Note not instantiated correctly")
    } else { console.log("testNoteInstantiation passed") }

  };

  testNoteInstantiation();

})(this);
