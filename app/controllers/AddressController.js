const {Address} = require("../database/db");

module.exports = {
    async all(req, res){
        let address = await Address.findAll({
            include : {
                association : "residente",
                attributes : ["name"]
            },
            attributes: ["street"]
        });
        res.json(address);
    }
}