const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connnection");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  { sequelize }
);
module.exports = Post;
