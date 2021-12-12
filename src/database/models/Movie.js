module.exports = (sequelize, dataTypes) => {
    const Movie = sequelize.define("movies", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            notNull:true,
            type: dataTypes.INTEGER,
        },
        title:{
            notNull:true,
            type: dataTypes.STRING(500)
        },
        rating:{
            notNull:true,
            type: dataTypes.DECIMAL
        },
        awards:{
            notNull:true,
            type: dataTypes.INTEGER,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATE
        }

      },{
          tableName: "movies",
          timestamps: false,
      });
      return Movie;
    };