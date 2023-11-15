import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class subjects extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    subjectid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name_subject: {
      type: DataTypes.STRING(150),
      allowNull: true,
      unique: "subjects_name_subject_key"
    }
  }, {
    sequelize,
    tableName: 'subjects',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "subjects_name_subject_key",
        unique: true,
        fields: [
          { name: "name_subject" },
        ]
      },
      {
        name: "subjects_pkey",
        unique: true,
        fields: [
          { name: "subjectid" },
        ]
      },
    ]
  });
  }
}
