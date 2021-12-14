const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    product_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    price: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      // Decimal
      // Validates that the value is a decimal.
    },

    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Set a default value of 10.
      // Validates that the value is numeric.
    },

    category_id: {
      type: DataTypes.INTEGER,
      // References the Category model's id.
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "product",
  }
);

module.exports = Product;
