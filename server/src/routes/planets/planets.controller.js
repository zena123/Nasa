const planets = require('../../models/planets.model')

function getAllPlanets(req, res){
    return res.status(200).json(planets);
}
// export an object cause we have multiple  functions
module.exports = {
    getAllPlanets,
};