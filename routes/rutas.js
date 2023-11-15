//----------------------------Funcionalidades de la aplicación --------------------------//
import { Router } from "express";
import {login_teacher,login_student,viewTeacher,viewStudent,registerGrade,viewGrade} from "../controllers/controllers.js" // revisar funcion studentGrades
const router= Router()



// Mostrar estudiantes en pantalla
router.get("/teachers/login", login_teacher)
router.get("/students/login", login_student)
router.get("/teachers/info", viewTeacher) // muestra las materias que cada profesor da

router.get("/students/info", viewStudent)
router.get("/teachers/grades",viewGrade)
// ---------------- PRUEBA ------------------------------//
router.put('/teacher/registerGrade/:studentid',registerGrade)
//..........................................................//
export default router





























/* Ejemplo

//import {createUser, deleteUser} from "../controllers/controllers.js" importar las rutas de controles 

Usamos funcionalidades HTTP 
get : para obtener información 


const router= Router()

//router.post("/user/create",createUser)
//router.delete("/user/delete/:id",deleteUser)

export default router 
*/