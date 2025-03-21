import { Router } from "express";
import { addClass, addCourseStudent, addCourseTeacher, canStudentEnroll, enrolledcourseSTD, enrolledcourseTeacher, getCourse, getcourseTeacher, stdEnrolledCoursesClasses, teacherEnrolledCoursesClasses } from "../controllers/course.controller.js";
//import { authSTD } from "../middlewares/stdAuth.middleware.js";
import { authTeacher } from "../middlewares/teacherAuth.middleware.js";


const router = Router()


router.route("/all").get(getCourse)

router.route("/:coursename").get(getcourseTeacher)

router.route("/:coursename/create/:id").post(authTeacher, addCourseTeacher)

router.route("/:coursename/:courseID/add/student/:id").post( addCourseStudent)

router.route("/:coursename/:courseID/verify/student/:id").post( canStudentEnroll)

router.route("/student/:id/enrolled").get( enrolledcourseSTD)

router.route("/teacher/:id/enrolled").get(authTeacher, enrolledcourseTeacher)

router.route("/:courseId/teacher/:teacherId/add-class").post(authTeacher, addClass)

router.route("/classes/student/:studentId").get( stdEnrolledCoursesClasses)

router.route("/classes/teacher/:teacherId").get(authTeacher, teacherEnrolledCoursesClasses)

export default router;