import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class students extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    s_relationid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    courseid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'courseid'
      }
    },
    user_studentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_students',
        key: 'user_studentid'
      }
    },
    subjectid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'subjects',
        key: 'subjectid'
      }
    },
    first_period: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    second_period: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    third_period: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'students',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "students_pkey",
        unique: true,
        fields: [
          { name: "s_relationid" },
        ]
      },
    ]
  });
  }
}
