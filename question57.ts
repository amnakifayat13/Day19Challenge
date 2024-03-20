/* Find the Average Grade: given a list of grades, calculate the average grade. */ 


let grades = [ 75, 90,95, 82, 80, 56, 60, 89]
let averageGrade = grades.reduce((total, grade) => total + grade, 0)/ grades.length
console.log(averageGrade);
 