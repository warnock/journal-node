function Entry(body) {
  this.body = body;
}

Entry.prototype.wordCount = function(body) {
  var wordCount = 0;
  for(var index = 0; index < body.split(' ').length; index++) {
    wordCount += 1;
  }
  return wordCount;
}

exports.journalModule = Entry;
