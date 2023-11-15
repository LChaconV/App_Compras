# App_ControlAcademico
Visualización y control de notas académicas, se requiere de un administrador para registrar los profesores y los estudiantes en la base de datos y asignar las respectivas credenciales para el inicio de sesión ( user and password)
# Installar dependencias
1- npm init -y para iniciar nuestro proyecto. 
2- crear scripts en el package.json. 
3- instalar dependencias 
	a- npm i nodemon -D 
	b- npm install --save sequelize pg pg-hstore express cors 
# Creación BD
CREATE TABLE user_teachers (
	user_teacherID SERIAL PRIMARY KEY,
	name_teacher VARCHAR (150) NOT NULL,
	last_name VARCHAR (150) NOT NULL,
	user_teacher VARCHAR (150) UNIQUE NOT NULL,
	password_teacher VARCHAR (150) NOT NULL
)
INSERT INTO user_teachers(name_teacher,last_name,user_teacher,password_teacher)
VALUES ('GONZALO LUIS','BALCAZAR CAMPOVERDE','GONZALOB3','1236'),
('FERNANDA NOEMI','CAMPOS MENDIETA','FERNANDAC4','1237'),
('JAIME EDUARDO','CÁRDENAS MOLINA','JAIMEC5','1238'),
('CARLOS DANIEL','VILLAVICENCIO PESANTEZ','CARLOSV6','1239'),
('MARLENE ESTEFANIA','NOVILLO JARA','MARLENEN7','1240')	,
('JOHANNA SOFIA','PEREZ CABRERA','JOHANNAP8','1241')	,
('MARTHA PATRICIA','MORALES HARRIS','MARTHAM9','1242')	,
('DIANA LUCÍA','IÑIGUEZ IÑIGUEZ','DIANAI10','1243')	,
('JAIME VICENTE','CHUCHUCA SERRANO','JAIMEC11','1244')	,
('XAVIER EDUARDO','MONTALVO APONTE','XAVIERM12','1245')	,
('ALEX RUBEN','COBOS VELOZ','ALEXC13','1246')	,
('MIREYA KATERINE','PAZMIÑO ARREGUI','MIREYAP14','1247')	,
('DANILO FERNANDO','GARCÍA GARCÍA','DANILOG15','1248')	,
('OSWALDO ERNESTO','LOPEZ BRAVO','OSWALDOL16','1249')	,
('JUAN JOSE','ORTEGA VINTIMILLA','JUANO17','1250')	,
('GEOVANNY RAMIRO','CABEZAS VELASCO','GEOVANNYC18','1251')
---------------------------------------------------------------------------------------------------------------
CREATE TABLE user_students (
	user_studentID SERIAL PRIMARY KEY,
	name_student VARCHAR (150) NOT NULL,
	last_name VARCHAR (150) NOT NULL,
	user_student VARCHAR (150) UNIQUE NOT NULL,
	password_student VARCHAR (150) NOT NULL
)
---------------------------------------------------------------------------------------------------------------
INSERT INTO user_students(name_student,last_name,user_student,password_student)
VALUES ('LUZ MARIUXI','MURILLO CALVACHE','PEDROL1','1300')	,
('SANTANDER ROSERO','LUIS ENRIQUE','RAQUELS2','1301')	,
('GLADYS MONSERRATE','ORDÓÑEZ ALEMÁN','GEORGINAG3','1302')	,
('MARIA JOSE','FRANCO PICO','KARINAM4','1303')	,
('DIEGO ALEJANDRO','REDROBAN BECERRA','DIEGOD5','1304')	,
('ANGELA LUCCIOLA','SUAREZ VELASQUEZ','RICARDOA6','1305')	,
('MARTHA FABIOLA','RIZZO GONZALEZ','LILLIM7','1306')	,
('CARLOS DIONISIO','SORNOZA MORAN','SUSANAC8','1307')	,
('KAREN GABRIELA','ROMERO ZAVALA','JOSÉK9','1308')	,
('MARLON ROBERTO','BANEGAS ANDRADE','EDGARM10','1309')	,
('DOUGLAS ALFREDO','PLAZA GALARZA','GUSTAVOD11','1310')	,
('TEODORO IVAN','BLAKMAN BRIONES','LOURDEST12','1311')	,
('MIREYA VERONICA','CHOEZ CAICEDO','FANNYM13','1312')	,
('KURT ERNESTO','LAINEZ LANDI','JORGEK14','1313')	,
('LUIS GABRIEL','DE SOUSA','OROL15','1314')	,
('JESSICA ROSA','MACIO CUEVA','OROJ16','1315')	,
('KERLIN GUSTAVO','YAGUAL ARREAGA','OROK17','1316')	,
('JOSE SANTIAGO','LINDAO GONZALEZ','OROJ18','1317')	,
('CARLOS HUMBERTO','VITERI TORRES','KAROLC19','1318')	,
('CARLOS ALBERTO','VACA NUÑEZ','ELIZZABETHC20','1319')	
---------------------------------------------------------------------------------------------------------------
CREATE TABLE subjects (
	subjectID SERIAL PRIMARY KEY,
	name_subject VARCHAR (150) UNIQUE
)
INSERT INTO subjects (name_subject)
VALUES ('Física'),
('Química'),
('Trigonometría'),
('Filosofía'),
('Política y Economía'),
('Arte'),
('Educación Fisica'),
('Ciencias naturales'),
('Ciencias sociales'),
('Algebra'),
('Sociales'),
('Geometría'),
('Religión'),
('Ingles'),
('Español'),
('Tecnología e Informática'),
('Matemáticas'),
('Tecnología'),
('Historia'),
('Contabilidad')
---------------------------------------------------------------------------------------------------------------
CREATE TABLE courses (
	courseID SERIAL PRIMARY KEY,
	name_course VARCHAR (150) NOT NULL
)
INSERT INTO courses (name_course)
VALUES ('PRIMERO'),
('SEGUNDO'),
('TERCERO'),
('CUARTO'),
('QUINTO'),
('SEXTO'),
('SEPTIMO'),
('OCTAVO'),
('NOVENO'),
('DECIMO'),
('UNDECIMO')
-------------------------------------------------------------------------------------------------------------------
CREATE TABLE teachers (
	t_relationid serial primary key,
	user_teacherid int NOT NULL,
	courseid int NOT NULL,
	subjectid int NOT NULL,
	FOREIGN KEY (user_teacherID)REFERENCES user_teachers (user_teacherid),
	FOREIGN KEY (courseid) REFERENCES courses (courseID),
	FOREIGN KEY(subjectID) REFERENCES subjects (subjectID)
)

INSERT INTO teachers (user_teacherID,courseID,subjectID)
VALUES (1,3,9),
(1,3,6),
(1,3,4),
(10,5,17),
(10,5,5),
(12,5,3),
(12,11,10),
(12,11,17),
(12,4,16),
(12,7,16)
---------------------------------------------------------------------------------------------------------------
CREATE TABLE students (
	s_relationid serial primary key,
	courseID INT NOT NULL,
	user_studentID INT NOT NULL,
	subjectID INT NOT NULL,
	first_period INT NOT NULL,
	second_period INT NOT NULL,
	third_period INT NOT NULL,
	FOREIGN KEY(user_studentID)REFERENCES user_students (user_studentID),
	FOREIGN KEY(courseID) REFERENCES course (courseID),
	FOREIGN KEY(subjectID) REFERENCES subjects (subjectID)
)
INSERT INTO students (courseID,user_studentID,subjectID,first_period,second_period,third_period)
values (3,1,6,0,0,0),
 (3,2,6,0,0,0),
 (3,3,6,0,0,0),
 (3,4,6,0,0,0),
 (3,5,6,0,0,0),
(2,3,7,0,0,0),
(2,3,5,0,0,0),
(2,3,1,0,0,0)

# sequelize-auto
Funcionalidad que nos mapea del codigo de BD a javaScript -->
    npx sequelize-auto -h localhost -d SchoolProject_BD -u postgres -x 1234 -p 5432 -s public --dialect postgres -o ./models -l esm