const course = {
    course : "Aeronautical Physics",
    price : "2999",
    CourseTeacher : "Newton"
}

const {CourseTeacher} = course;
console.log(CourseTeacher);
const {CourseTeacher : teacher} = course;
console.log(teacher);
