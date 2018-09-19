// NoteList Mock
(function (exports) {
  function MockNoteList() {
    this.note
  };
  MockNoteList.prototype.createNote = function (note) {
    this.note = note
  };

  exports.MockNoteList = MockNoteList;

})(this);

// NoteListView Mock
(function (exports) {
  function MockNoteListView() {
  };
  MockNoteListView.prototype.displayHTML = function (note) {
    return note
  };

  exports.MockNoteListView= MockNoteListView;

})(this);
