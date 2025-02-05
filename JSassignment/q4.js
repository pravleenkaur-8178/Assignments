const employees = [
    { name: "Alice", department: "IT", salary: 60000 },
    { name: "Bob", department: "HR", salary: 50000 },
    { name: "John", department: "IT", salary: 75000 },
    { name: "David", department: "Finance", salary: 80000 }
  ];

const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
  
console.log("Total salary of all employees:", totalSalary);
  
const itEmployees = employees.filter(employee => employee.department === "IT").map(employee => employee.name);
  
console.log("Employees in IT department:", itEmployees);
  
const highestSalaryEmployee = employees.reduce((max, employee) => (employee.salary > max.salary ? employee : max));
  
console.log("Employee with the highest salary:", highestSalaryEmployee.name);
  