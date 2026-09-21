let success = true;

function getUserName() {
  return new Promise((resolve, reject) => {
    console.log("REading form database");
    if (success) {
      const result = {
        name: "John Doe",
        age: 35,
      };
      resolve(result);
    } else {
      reject("Unable to read database");
    }
  });
}

getUserName()
  .then((value) => {
    console.log(`OUR RESULTS IS: ${value.name} and age is: ${value.age}`);
  })
  .catch((error) => {
    console.log("Error occured: ", error);
  });
