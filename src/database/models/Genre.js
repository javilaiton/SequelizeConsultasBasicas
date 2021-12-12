module.exports = (sequelize, dataTypes) => {
    const Genre = sequelize.define("genres", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            notNull:true,
            type: dataTypes.INTEGER,
        },
        name:{
            notNull:true,
            type: dataTypes.STRING(100)
        },
        ranking:{
            notNull:true,
            type: dataTypes.DECIMAL
        },
        active:{
            notNull:true,
            type: dataTypes.INTEGER,
        }

      },{
          tableName: "genres",
          timestamps: false,
      });
      return Genre;
    };