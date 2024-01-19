import { Model } from 'sequelize';
/**
 * @returns {import("sequelize").ModelCtor<Model>}
 */
export function Admin(sequelize, DataTypes) {
  class admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admins.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'admins',
  });
  return admins;
};