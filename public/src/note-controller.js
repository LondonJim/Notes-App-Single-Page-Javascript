(function(exports){

  function NoteController(noteList = new NoteList){
    this.noteList = noteList;
    this.noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(this.noteList)
  };

  NoteController.prototype.displayNotes = function() {
    // window.onload = function(){
      document.getElementById("app").innerHTML = this.noteListView.displayHTML();
    // };
  };
  exports.NoteController = NoteController;

})(this);
