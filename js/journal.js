function Entry(input) {
  this.input = input;
}

Entry.prototype.wordCount = function(body) {
  var wordCount = 0;
  for(var index = 1; index < body.split(" ").length; index++); {
    return wordCount;
  }

}

exports.journalModule = Entry;
