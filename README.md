# almabase-api
almabase github task api
### Follow These steps to run this locally

1. git clone this repos
2. cd almabase-api
3. npm install
4. npm start


### steps to call the api

1. URL : https://almabase-gitstat-api.herokuapp.com/git
2. Method : POST
3. body : {
    orgname : "<org-name>",
    n : "<n>"
    m : "<m>"
   } 
  
4. Response will have json object have top n repos with top m contributers with there contribution count
