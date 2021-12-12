const db=require("../database/models/index")

const genresController={
    list: (req,res)=>{
        db.genres.findAll()
            .then(function(genres){
                res.render("genresList",{genres:genres})
            })
        
    },
    detail:(req,res)=>{
        db.genres.findByPk(req.params.id)
            .then(function (genre) {
                res.render("genresDetail",{genre:genre})
                
            })
    },
}
module.exports=genresController