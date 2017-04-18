var Entry = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journalForm').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry("input");
    var wordCount = newEntry.wordCount(body);
    console.log(wordCount);
    $('#output').append("<p>" + wordCount + "</p>");
  });
});
