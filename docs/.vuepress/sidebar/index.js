const study = require("./study");
const technical = require("./technical");
const sidebar = {
  ...study,
  ...technical
};
module.exports = sidebar;