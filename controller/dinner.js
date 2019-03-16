var dishes = {
  getAll : function(req, res) {
    return data2;
  },
  getOne : function(req, res) {
    var id = req.params.id;
    var dish = data2[id];
    return dish;
  }
};
module.exports = dishes;
