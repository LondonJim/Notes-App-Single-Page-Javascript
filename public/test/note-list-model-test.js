(function(exports) {

  function noteListTests() {
    var noteList = new NoteList();

    if ((noteList.notes).length !== 0 ) {
      throw new Error('FAIL: No array is instantiated')
    } else { console.log('PASSES: Instantiates with an array') }

    if ((noteList.notesReturn()).length !== 0 ) {
      throw new Error('FAIL: Array is not returned')
    } else { console.log('PASSES: .notesReturn() returns array') }

    if(noteList.createNote("test note").text !== "test note") {
      throw new Error('FAIL: New note object is not returned')
    } else { console.log('PASSES: .createNote() returns a Note object')}

    if(noteList.notesReturn().length !== 1) {
      throw new Error('FAIL: New object is not pushed into notes')
    } else { console.log('PASSES: .createNote() passes object into notes')}

    if(noteList.notes[0].text != "test note") {
      throw new Error('FAIL: new Note object not in notes')
    } else { console.log('PASSES: .createNote() passes Note object into notes')}

  };

  noteListTests();

})(this);
