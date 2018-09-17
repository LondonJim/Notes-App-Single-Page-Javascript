(function(exports) {

  function noteListModelTests() {
    var noteListModel = new NoteListModel();

    if ((noteListModel.notes).length != 0 ) {
      throw new Error('No array')
    } else {
        console.log('instantiates with an array')
    }

  };

  noteListModelTests();

})(this);
