/**
 * Created by fstcap on 17/4/14.
 */
var student=require('./student')
var teacher=require('./teacher')


function add(teacherName,students){
    teacher.add(teacherName)
    students.forEach(function(value,index){
        student.add(value)
    })
}
exports.add=add