const fetch = require("node-fetch");

module.exports = async(orgname , n) => {
    var url = "https://api.github.com/orgs/" + orgname + "/repos";
    var repos =  await (await fetch(url)).json();
    repos.sort((a,b) =>{
        return b["forks_count"] - a["forks_count"]
    });
    n = Math.min(n , repos.length)
    // console.log(repos);
    // repos.slice(0 , n);
    repoList = []
    for(var i = 0 ; i < n ; i++){
        repoList.push(repos[i]["name"]);
    }
    return repoList;
}