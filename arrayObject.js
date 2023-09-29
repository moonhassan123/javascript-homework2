
// let - let us ressign
// let name = 'mehedi'
// name = 'mehedi'


// const - do not allow us to ressign

const fruit = 'Apple';
// fruit = 'banana';
// console.log(fruit);

// array
const student_name_arrya =['mehedi', 'moon', 'ruhul', 'jony']
// student_name_arrya.push('joy')
// student_name_arrya.pop()
// student_name_arrya.unshift('nahid_ar_mainMaster_sopna')
// console.log(student_name_arrya);


// for of
for(const name of student_name_arrya){
    // console.log(name);
    // console.log(name + ' ' + 'Shaha');
}


const student = {name: 'mehedi', age: 22, class:'diploma'}
const nameStorer = student['name']
const ageStorer = student.age
// console.log(nameStorer);
// console.log(ageStorer);

student['id'] = 464298;
// console.log(student);


const developer = { name: "Rohul", Designation: "Developer", Salary: 35000 }

const keysOrPropertyName = Object.keys(developer)
console.log("Property name =", keysOrPropertyName)

const propertyValues = Object.values(developer);
console.log("Property Values=", propertyValues);
