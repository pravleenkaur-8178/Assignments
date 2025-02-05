const students = [
    { name: "John", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Alice", score: 78 },
    { name: "David", score: 90 }
  ];
  
  students.sort((a, b) => a.score - b.score);
  
  console.log(students);