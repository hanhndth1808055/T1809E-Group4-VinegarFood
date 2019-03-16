var dishes = {
  getAll : function(req, res) {
    return data1;
  },
  getOne : function(req, res) {
    var id = req.params.id;
    var dish = data1[id];
    return dish;
  }
};
module.exports = dishes;
