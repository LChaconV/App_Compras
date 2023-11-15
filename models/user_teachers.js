import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_teachers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_teacherid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_teacher: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    user_teacher: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "user_teachers_user_teacher_key"
    },
    password_teacher: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_teachers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_teachers_pkey",
        unique: true,
        fields: [
          { name: "user_teacherid" },
        ]
      },
      {
        name: "user_teachers_user_teacher_key",
        unique: true,
        fields: [
          { name: "user_teacher" },
        ]
      },
    ]
  });
  }
}
