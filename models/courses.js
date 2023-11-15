import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class courses extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    courseid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_course: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'courses',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "courses_pkey",
        unique: true,
        fields: [
          { name: "courseid" },
        ]
      },
    ]
  });
  }
}
