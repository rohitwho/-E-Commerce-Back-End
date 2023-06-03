const { Model, DataTypes } = require('sequelize');
const Product = require("./Product");
const Tag = require("./Tag")

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },

    // References the Product model's id.
    product_id:{
      type:DataTypes.INTEGER,
      references:{
        model: Product,
        key :"id"
      }
    },
    //References the Tag model's id.
    tag_id:{
      type:DataTypes.INTEGER,
      references:{
        model: Tag,
        key:"id"

      }
    },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
