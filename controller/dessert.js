var dishes = {
  getAll : function(req, res) {
    return data4;
  },
  getOne : function(req, res) {
    var id = req.params.id;
    var dish = data4[id];
    return dish;
  }
};
module.exports = dishes;
