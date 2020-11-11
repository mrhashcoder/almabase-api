module.exports = (orgname , n , m) => {
    if(orgname == undefined){
        return false;
    }
    if(orgname == ""){
        return false;
    }
    if(isNaN(n)){
        return false;
    }
    if(isNaN(m)){
        return false;
    }
    return true;
}