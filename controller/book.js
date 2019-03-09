var books = {
  getAll : function(req, res) {
    return data;
  },
  getOne : function(req, res) {
    var id = req.params.id;
    var book = data[id];
    return book;
  },
  insertBook : function(req, res) {
    var newBook = req.body;
    data.push(newBook);
    return data;
  }
};
module.exports = books;
