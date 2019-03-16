var dishes = {
  getAll : function(req, res) {
    return data;
  },
  getOne : function(req, res) {
    var id = req.params.id;
    var dish = data[id];
    return dish;
  }
};
module.exports = dishes;
