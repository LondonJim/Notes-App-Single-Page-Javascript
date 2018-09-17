(function(exports) {

  function noteListViewTests() {
    var mockModel = {}
    var noteListView = new NoteListView(mockModel);

    assert.isTrue((noteListView.noteList) === mockModel, 'noteListView takes an object on instantiation');


  };

  noteListViewTests();

})(this);
