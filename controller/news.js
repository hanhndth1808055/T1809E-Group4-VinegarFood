var news = {
  getAll : function(req, res) {
    return data3;
  },
  getOne : function(req, res) {
    var id = req.params.id;
    var newsitem = data3[id];
    return newsitem;
  }
};
module.exports = news;
