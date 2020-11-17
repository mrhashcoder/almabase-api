const fetch = require('node-fetch');

module.exports = async(url) => {
    // console.log(url)
    var response =  await (await fetch(url)).json();
    // console.log(response);
    return response;
}

// "452331a55499b6b96c6a8109b822af5fb91060fa
