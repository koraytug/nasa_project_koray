const { getAllPlanets: httpGetAllPlanets } = require('../../models/planets.model')

function httpGetAllPlanets(req, res) {
    return res.status(200).json(httpGetAllPlanets());
}

module.exports = {
    httpGetAllPlanets,
}