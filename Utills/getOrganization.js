const fetch = require('node-fetch');

module.exports = async(orgname) => {
    var url = "https://api.github.com/orgs/" + orgname;
    var response =  await (await fetch(url)).json();
    return response;
}


