const { getAllLaunches: httpGetAllLaunches } = require('../../models/lunches.model');

function httpGetAllLaunches(req, res) {
    // return res.status(200).json(Array.from(launches.values()));
    return res.status(200).json(launchesModel.getAllLaunches());
}

module.exports = {
    httpGetAllLaunches,
}