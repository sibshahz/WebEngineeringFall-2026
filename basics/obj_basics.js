const simpleObject = {
  name: "John",
  age: 30,
  isStudent: false,
  hobbies: ["reading", "traveling", "coding"],
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "USA",
    display_pc: () => {
      console.log("22500");
    },
  },
  talk: () => {
    console.log("Hello, I am John!");
  },
};
// const allKeys = Object.keys(simpleObject).map((item) => {
//   console.log(`Currently check key: ${item} value is: `, simpleObject[item]);
// });
simpleObject.talk();
simpleObject.address.display_pc();

// const age = 35;
// const gpa = 2.9;
// console.log(
//   "Hello my name is Shahid and my age is " +
//     age +
//     ". I am a software engineer. And my gpa is: " +
//     gpa,
// );
// console.log(
//   `Hello my name is Shahid and my age is ${age}. I am a software engineer. And my gpa is: ${gpa}`,
// );

// console.log("All keys in the object:", allKeys);

// if (simpleObject.age !== undefined) {
//   console.log("Age is defined:", simpleObject.age);
// }
// if (simpleObject.gpa !== undefined) {
//   console.log("GPA is defined:", simpleObject.gpa);
// } else {
//   console.log("GPA is not defined.");
// }
