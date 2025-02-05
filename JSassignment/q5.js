const employees = [
    { name: "Alice", age: 25, salary: 6000, dob: "1998-01-15" },
    { name: "Bob", age: 30, salary: 3000, dob: "1993-05-22" },
    { name: "Charlie", age: 22, salary: 4000, dob: "2001-11-30" },
    { name: "David", age: 35, salary: 7000, dob: "1988-02-05" },
    { name: "Aaron", age: 40, salary: 800, dob: "1983-03-14" },
    { name: "Frank", age: 28, salary: 950, dob: "1995-06-09" },
    { name: "May", age: 26, salary: 2000, dob: "1997-07-19" }
  ];
  
const highSalaryEmployees = employees.filter(employee => employee.salary > 5000);
  
console.log("Employees with salary greater than 5000:", highSalaryEmployees);
  
const groupedByAge = employees.reduce((groups, employee) => {
    if (!groups[employee.age]) {
      groups[employee.age] = [];
    }
    groups[employee.age].push(employee);
    return groups;
}, {});
  
console.log("Employees grouped by age:", groupedByAge);
  
const filteredEmployees = employees.filter(employee => employee.salary < 1000 && employee.age > 20);
console.log('Employees with salary < 1000 and age > 20:', filteredEmployees);

const updatedEmployees = filteredEmployees.map(employee => {
    employee.salary *= 5;
    return employee;
  });
  console.log('Employees after salary increment:', updatedEmployees);
  
