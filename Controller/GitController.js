// Importing Libraries and Funtions
var fetch = require('node-fetch');

var requestValidator = require('../Utills/validateRequest');
var getOrganization = require('../Utills/getOrganization');
var getRepos = require('../Utills/getRepos');
var getContributters = require('../Utills/getContributers');


exports.gitControl = async(req , res) => {
    try{
        var orgname = req.body.orgname;
        var n = req.body.n;
        var m = req.body.m;
        
        // Validating Request data
        if(requestValidator(orgname , n , m) == false){
            return res.status(422).json({response : "Data Missing" , status : 422});
        }

        // Validating does Organization Exists?

        var organization = await getOrganization(orgname);
        if(organization["message"] == "Not Found"){
            return res.status(404).json({response : "Organization  Not Found" , status : 404});
        } 
        // creating list of repos
        var repos = await getRepos(orgname , n);

        //getting m commitee of each n repose
        var contributions = await getContributters(orgname , repos , m , n);

        return res.json({response : contributions , status : 200});
        
    }catch(err){
        console.log(err);
        return res.status(500).json({response : "Internal Server Error" , status : 500});
    }
}