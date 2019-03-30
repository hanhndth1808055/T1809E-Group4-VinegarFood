var dishes = {
  getAll : function(req, res) {
    return data5;
  },
  getOne : function(req, res) {
    var id = req.params.id;
    var dish = data5[id];
    return dish;
  }
};
module.exports = dishes;
