const human = {
  name: "Sohail",
  age: 25,
  gpa: 2.0,
  class: "Web Engineering",
  male: true,
  siblings: ["Aisha", "Sibghatullah"],
  subjects: {
    cs: ["Intro to programming", "OOP", "Web Engineering"],
    islamiat: ["Islamiat"],
    maths: ["Linear Algebra", "Calculas"],
  },
};
// Accessing object keys and values
console.log(human.name);
console.log(human.subjects.cs[1]);
console.log("GPA WAS: ", human.gpa);
console.log("GENDER IS MALE: ", human.male);
// Changing values
human.gpa = 2.5;
human.male = false;
console.log("GPA IS: ", human.gpa);
console.log("GENDER IS MALE: ", human.male);
