//-------------------Almacena las funcionalidades de rutas.js------------------------------//
import initModels from "../models/init-models.js" 
import conexion from "../config/database.js"
import subjects from "../models/subjects.js";
import user_students from "../models/user_students.js";
import courses from "../models/courses.js";
//import user_students from "../models/user_students.js";
const tablas = initModels(conexion) 


//------------------- PERFIL PROFESOR-------------------------------//

// 1. Verificar el ususario ingresado. Buscar en tabla de user teacher el usuario y contraseña ingresado y comparar con la BD
export async function login_teacher (req,res){
    try {
        let studentInfo = await tablas.user_teachers.findAll();
        res.json(studentInfo)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

// 2. Ver la información relacionada con el profesor, incluye materias y cursos a cargo
export async function viewTeacher (req,res){
    try{
        let resultado = await tablas.teachers.findAll({ include: [{ 
                                                                    model:subjects,
                                                                    as:'subject',
                                                                },
                                                                { 
                                                                    model:courses,
                                                                    as:'course',
                                                                    attributes: ['name_course'],
                                                                },
                                                            ]
                                                                
                                                         });
        res.status(200).json(resultado)
    }catch(error){
        // Crear un objeto JSON con detalles del error
        const errorResponse = {
            error: true,
            message: "Error al obtener los usuarios",
            details: error.message,
        };
        res.status(500).json(errorResponse);
        console.error(error);
    }
    }

// 3. ver notas
export async function viewGrade (req,res){
    try {
        let grades = await tablas.students.findAll({ include: { 
            model:user_students,
            as:'user_student',
            attributes: ['name_student','last_name']
        }
     })
        res.json(grades)
    } catch (error) {
        res.status(500).json(error)
    }
}

// ------------------------------------- PRUEBA -------------------------------------//
//4. Registrar notas
export async function registerGrade(req,res){
    const studentsData = req.body;

    // Iterar sobre los datos de los estudiantes y actualizar la base de datos
    studentsData.forEach(async (studentData) => {
      const query = `
        UPDATE students
        SET first_period = $1, second_period = $2, third_period = $3
        WHERE user_studentID = $4 AND courseID = $5`;
  
      const values = [
        studentData.first_period,
        studentData.second_period,
        studentData.third_period,
        studentData.user_studentID,
        studentData.courseID,
      ];
  
      try {
        const result = await pool.query(query, values);
        console.log('Actualizado:', result.rows);
      } catch (error) {
        console.error('Error al actualizar:', error);
      }
    });
  
    res.json({ success: true, message: 'Datos actualizados exitosamente' });
  };
  
  
//------------------------------------------------------------------------------------//

//------------------------------ PERFIL ESTUDIANTES----------------------------------------//

// // 1. Verificar el ususario ingresado. Buscar en tabla de user_students el usuario y contraseña ingresado y comparar con la BD
export async function login_student (req,res){
    try {
        let studentInfo = await tablas.user_students.findAll();
        res.json(studentInfo)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}

// 2. Traer información de los estudiantes para mostrarla en pantalla
export async function viewStudent (req,res){
    try {
        let studentInfo = await tablas.students.findAll({ include: { 
            model:subjects,
            as:'subject',
        },
     
        
 });
        res.json(studentInfo)
    } 
    catch (error) {
        res.status(500).json(error)
    }
}




