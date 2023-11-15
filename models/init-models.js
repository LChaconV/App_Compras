import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _courses from  "./courses.js";
import _students from  "./students.js";
import _subjects from  "./subjects.js";
import _teachers from  "./teachers.js";
import _user_students from  "./user_students.js";
import _user_teachers from  "./user_teachers.js";

export default function initModels(sequelize) {
  const courses = _courses.init(sequelize, DataTypes);
  const students = _students.init(sequelize, DataTypes);
  const subjects = _subjects.init(sequelize, DataTypes);
  const teachers = _teachers.init(sequelize, DataTypes);
  const user_students = _user_students.init(sequelize, DataTypes);
  const user_teachers = _user_teachers.init(sequelize, DataTypes);

  students.belongsTo(courses, { as: "course", foreignKey: "courseid"});
  courses.hasMany(students, { as: "students", foreignKey: "courseid"});
  teachers.belongsTo(courses, { as: "course", foreignKey: "courseid"});
  courses.hasMany(teachers, { as: "teachers", foreignKey: "courseid"});
  students.belongsTo(subjects, { as: "subject", foreignKey: "subjectid"});
  subjects.hasMany(students, { as: "students", foreignKey: "subjectid"});
  teachers.belongsTo(subjects, { as: "subject", foreignKey: "subjectid"});
  subjects.hasMany(teachers, { as: "teachers", foreignKey: "subjectid"});
  students.belongsTo(user_students, { as: "user_student", foreignKey: "user_studentid"});
  user_students.hasMany(students, { as: "students", foreignKey: "user_studentid"});
  teachers.belongsTo(user_teachers, { as: "user_teacher", foreignKey: "user_teacherid"});
  user_teachers.hasMany(teachers, { as: "teachers", foreignKey: "user_teacherid"});

  return {
    courses,
    students,
    subjects,
    teachers,
    user_students,
    user_teachers,
  };
}
