(function(exports) {

  function noteListModelTests() {
    var noteListModel = new NoteListModel();

    if ((noteListModel.notes).length != 0 ) {
      throw new Error('No array is instantiated')
    } else {
        console.log('Instantiates with an array')
    }

    if ((noteListModel.notesReturn()).length != 0 ) {
      throw new Error('Array is not returned')
    } else {
        console.log('notesReturn() returns array')
    }

  };

  noteListModelTests();

})(this);
