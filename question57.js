/* Find the Average Grade: given a list of grades, calculate the average grade. */
var grades = [75, 90, 95, 82, 80, 56, 60, 89];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
