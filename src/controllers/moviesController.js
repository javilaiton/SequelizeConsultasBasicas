const db = require("../database/models/index")
const Op = db.Sequelize.Op

const moviesController={
    list: (req,res)=>{
        db.movies.findAll()
            .then(function(movies){
                res.render("moviesList",{movies:movies})
            })
        
    },
    detail: (req,res)=>{
        db.movies.findByPk(req.params.id)
            .then(function (movie) {
                res.render("moviesDetail",{movie:movie})
                
            })

    },
    new:(req,res)=>{
        db.movies.findAll({
            order:[
                ["title","ASC"]
            ]
        })
            .then(function(movies){
                res.render("moviesList",{movies:movies})
            })
    }
}

module.exports=moviesController
