const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
]

const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
]

const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
]
console.log("ejercicio 2")
const printName = (enrollments, students, courses) => {
    students.map((student) => {
        console.log(student.name);
        enrollments.map((enrollment) => {
            if (enrollment.student_id === student._id) {
                courses.filter((course) => {
                    if (enrollment.course_id === course._id) {
                        console.log(course.title)
                    }
                })
            }
        })
    })
}
printName(enrollments, students, courses, )