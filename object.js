const student={
    name:"Darun",
    age:22,
    grade:12,
    subjects:["Math","Science","English"],
    address:{
        street:"123 Main St",
        city:"New York",
        state:"NY"
    },
    "id-num":123
}
// console.log(Object.keys(student));
// console.log(Object.values(student));
// delete student["id-num"];
student.subjects.unshift("Abc");
for(let stu in student){
    console.log(stu +":"+JSON.stringify(student[stu]));
}


