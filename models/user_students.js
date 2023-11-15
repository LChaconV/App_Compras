import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class user_students extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    user_studentid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_student: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    user_student: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "user_students_user_student_key"
    },
    password_student: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_students',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_students_pkey",
        unique: true,
        fields: [
          { name: "user_studentid" },
        ]
      },
      {
        name: "user_students_user_student_key",
        unique: true,
        fields: [
          { name: "user_student" },
        ]
      },
    ]
  });
  }
}
