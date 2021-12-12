const db=require("../database/models/index")

const genresController={
    list: (req,res)=>{
        db.genres.findAll()
            .then(function(genres){
                res.render("genresList",{genres:genres})
            })
        
    },
}
module.exports=genresController