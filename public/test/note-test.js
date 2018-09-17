(function(exports) {

  function testNoteInstantiation() {
    var note = new Note("Test note");

    if(note.textReturn() !== "Test note") {
      throw new Error("FAIL: Note not instantiated correctly")
    } else { console.log("PASSES: Instantiates correctly") }

  };

  testNoteInstantiation();

})(this);
