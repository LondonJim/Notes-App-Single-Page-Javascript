// NoteList Mock
(function (exports) {
  function MockNoteList() {
    this.note = []
    this.id = 0
  };
  MockNoteList.prototype.createNote = function (note) {
    this.note.push(note)
  };
  MockNoteList.prototype.notesReturn = function () {
    return [this]
  };

  exports.MockNoteList = MockNoteList;

})(this);

// NoteListView Mock
(function (exports) {
  function MockNoteListView() {
  };
  MockNoteListView.prototype.displayHTML = function (note) {
    return `<a href="" id=note0><li>${note}</li></a>`
  };

  exports.MockNoteListView= MockNoteListView;

})(this);

// Single Note view Mock

(function(exports) {

    function MockSingleNoteView() {
    };

    MockSingleNoteView.prototype.noteReturnHTML = function(note) {
      return "<div>" + note.note + "</div>"
    };

    exports.MockSingleNoteView = MockSingleNoteView;

})(this);
