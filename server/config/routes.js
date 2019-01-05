const Ducks = require("../controllers/ducks")


module.exports = function(app){
    app.get("/", Ducks.getAll);
    app.post("/duck", Ducks.create);  
    app.get("/edit/:_id", Ducks.edit);   
    app.post("/custom/:_id", Ducks.custom);  
    app.get("/delete/:_id", Ducks.delete);
}








