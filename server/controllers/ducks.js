console.log("inside of ducks.js");

const mongoose = require("mongoose");
const Duck = mongoose.model("Duck");


class Ducks {
    getAll(req, res){
        Duck.find({}, function(err, ducks){
            res.json({ducks:ducks})
            // res.render("index.ejs", {ducks: ducks})
        })
    };

    create(req, res){
        let duck = new Duck(req.body);
        duck.save(function(err){
            res.redirect("/");
        });
    };

    edit(req, res){
        var duck = req.params;
        res.render("edit.ejs", {duck: duck});
        console.log(duck);
    };

    custom(req, res){
        Duck.findByIdAndUpdate(req.params._id, req.body, (err, duck) => {
            });
            res.redirect("/");
    }

    delete(req, res){
        Duck.findByIdAndRemove(req.params._id, (err, ducks) => {
        });
        res.redirect("/");
    }


}

module.exports = new Ducks();