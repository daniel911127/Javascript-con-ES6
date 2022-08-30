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
    /*- JavaScript I
  * Pedro Perez
- HTML y CSS I
  * Pedro Perez
  * Maria Gomez*/
console.log("ejercicio 1")
const printCourse = (enrollments, students, courses) => {
    courses.map((course) => {
        console.log(course.title);
        enrollments.map((enrollment) => {
            if (course._id === enrollment.course_id) {
                students.filter((student) => {
                    if (student._id === enrollment.student_id) {
                        console.log(student.name);
                    }
                });
            }
        });
    });

}
printCourse(enrollments, students, courses, )