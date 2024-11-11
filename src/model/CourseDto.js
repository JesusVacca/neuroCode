import STATUS_COURSE from '../enums/StatusCourse';
export default class CoursesDto{
    constructor(
        
    ){
        this.course_id = 0;
        this.course_name = "";
        this.course_description = "";
        this.count_student = 0;
        this.course_image = "";
        this.course_image_id = "";
        this.course_creation_date = new Date();
        this.status = STATUS_COURSE.ACTIVE;
        this.teacher = "";
        this.course_level = 1;
    }
}