const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connnection");

class Comment extends Model {}

Comment.init(
  {
    input: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize }
);
module.exports = Comment;
