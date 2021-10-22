//63130500134
//class ของ Person จะเก็บข้อมูลต่างๆของนักศึกษา
function Person(id, fname, lname) {
    this._id = id;
    this._fname = fname;
    this._lname = lname;
    
}

//class ของ Subject เก็บข้อมูลต่างๆในเเต่ละวิชา
function Subject(subjectId, subjectName, credit, grade) {
    this._subjectId = subjectId;
    this._subjectName = subjectName;
    this._credit = credit;
    this._grade = grade;
}

//63130500134
//class ของ Semester เก็บวิชาที่ลงทะเบียนในเเต่ละเทอมนั้นๆ
class Semeter {
    constructor(name) {
        this._name = name
        this._subjects = [];
    }

    totalCredit() {
        let total = 0;
        for(let i = 0; i < this._subjects.length; i++) {
            total += this._subjects[i]["_credit"];
        }
        return total;
    }

    //คำนวณ gpa ในเทอมนั้นๆ
    gpa() {
        let gpa = 0;
        for(let i = 0; i < this._subjects.length; i++) {
            gpa += this._subjects[i].grade;
        }
        return gpa;
    }

    addSubject(subject) {
        this._subjects.push(subject);
        return true;
    }

    getAllGrade() {
        //วนลูปเข้าไปเอาทกุๆเกรดใน _subject
        for(let i = 0; i < this._subjects.length; i++) {
            console.log(this._subjects[i]["_grade"]);
        }
    }

}

//class ของ Student เก็บข้อมูลนักศึกษาทั้งหมด (รวม Person, Semester, Subject ไว้ใน class นี้ )
class Student {
    constructor(person) {
        this._person = person;
        this._semesters = [];
    }

    addSemester(semester) {
        this._semesters.push(semester);
        return true;
    }

    getGPAX(){
        let grade = 0;
        for(let i of this._semesters){
            grade += i._gpa;
        }
        return grade / this._allterm.length;
    }

}

//63130500134 
//2.1
//สร้าง object person เก็บข้อมูลส่วนตัวนักศึกาา
let person = new Person(63130500134, 'Arisa', 'Audomkhachonkitti');
let student = new Student(person); //new object ของ Student
let semester_1_2563 = new Semeter('1_2563'); //เเละ new Subject เพื่อเตรียมเพิ่มวิชาที่ลงทะเบียน

//เพิ่มวิชาที่ลลงทะเบียนทั้งหมด
semester_1_2563.addSubject(new Subject('GEN101', 'PHYSICAL EDUCATION', 1, 'A'));
semester_1_2563.addSubject(new Subject('GEN121', 'LEARNING AND PROBLEM SOLVING SKILLSPHYSICAL EDUCATION', 3, 'ฺฺB+'));
semester_1_2563.addSubject(new Subject('INT100', 'INFORMATION TECHNOLOGY FUNDAMENTALS', 3, 'A'));
semester_1_2563.addSubject(new Subject('INT101', 'PROGRAMMING FUNDAMENTALS', 3, 'A'));
semester_1_2563.addSubject(new Subject('INT102', 'WEB TECHNOLOGY', 1, 'A'));
semester_1_2563.addSubject(new Subject('INT114', 'DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY', 3, 'A'));
semester_1_2563.addSubject(new Subject('LNG220', 'ACADEMIC ENGLISH', 3, 'B+'));

//เพิ่ม semester เข้าไปใน Student (ซึ่งจะมีข้อมูลวิชชาที่ลงทะเบียนต่างๆ)
student.addSemester(semester_1_2563);

//สั่งปริ้นข้อมูลออกมา
// console.log('Student --------------------------')
// console.log(student);
// console.log('Semester : 1/2563');
// for(let i = 0; i < student._semesters[0]._subjects.length; i++){
//     console.log(student._semesters[0]._subjects[i]);
// }

// console.log(`Total credit of 1/2563 : ${student._semesters[0].totalCredit()}`)


console.log(`${student._semesters[0].getAllGrade()}`)

console.log(`${student._semesters[0].gpa()}`)

console.log(student.getGPAX)