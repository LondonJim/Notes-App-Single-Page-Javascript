(function (exports) {

  function noteController() {
    var noteController = new NoteController();
    noteController.createNote("Note Test")
    noteController.displayNotes()

    assert.isTrue(document.getElementById("app").value != undefined, 'noteController returns note HTML formatted');
  };

  noteController();

})(this);
