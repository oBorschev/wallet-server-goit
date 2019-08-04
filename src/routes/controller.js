const path = require("path");
const costsPath = path.join(__dirname, "../db/costs/all-costs.json");
const costsFile = require(costsPath);

const getAllCosts = function(req, res) {
  const category = req.query.category;

  if (category !== undefined) {
    const findedCostsObjects = costsFile.filter(costs =>
      costs.categories.includes(category)
    );
    res.status(200).send(findedCostsObjects);
  } else {
    res.status(200).send(costsFile);
  }
};

const getCostsById = function(req, res) {
  const convertToStringParams = JSON.stringify(req.params);
  const getIdCosts = costsFile.map(item => {
    if (convertToStringParams.includes(item.id)) return item;
    else
      return {
        status: "no products",
        products: []
      };
  });
  res.status(201).json(getIdCosts);
};

module.exports = {
  getAllCosts,
  getCostsById
};
