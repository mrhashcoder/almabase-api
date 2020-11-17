const fetch = require('node-fetch');
const httpRequest = require('./httpRequest');

module.exports = async(orgname, repoList , m , n) => {
    var urlBase = "https://api.github.com/repos/" + orgname + "/";
    url = [];
    for(var i = 0 ; i < repoList.length ; i++){
        contributionurl =  urlBase + repoList[i] + "/contributors";
        url.push(contributionurl)
    }
    n = Math.min(n , repoList.length);
    result = [];
    for(var i = 0; i < n ; i++){
        var response = await httpRequest(url[i]);
        response.sort((a,b) => {
            return b["contributions"] - a["contributions"];
        });
        repo = {};
        contributers = [];
        for(var j = 0 ; j < Math.min(m , response.length) ; j++){
            contributer = {};
            contributer["contributer"] = response[j]["login"];
            contributer["commit"] = response[j]["contributions"];
            contributers.push(contributer);
        }
        repo["reponame"] = repoList[i];
        repo["contributers"] = contributers;

        result.push(repo);                
    }
    return result;
}

