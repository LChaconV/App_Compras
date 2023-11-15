import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class teachers extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    t_relationid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_teacherid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_teachers',
        key: 'user_teacherid'
      }
    },
    courseid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'courses',
        key: 'courseid'
      }
    },
    subjectid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'subjects',
        key: 'subjectid'
      }
    }
  }, {
    sequelize,
    tableName: 'teachers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "teachers_pkey",
        unique: true,
        fields: [
          { name: "t_relationid" },
        ]
      },
    ]
  });
  }
}
