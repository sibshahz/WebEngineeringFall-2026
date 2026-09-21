const input = [
  4, 7, 4, 9, 2, 0, 1, 7, 8, 12, 123, 584, 14, 0, 4, 4, 0, 7, 9, 0,
];

function main(arr, evenHandler, oddHandler) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      console.log("Skipping a 0 value...");
      continue;
    }

    if (arr[i] % 2 === 0) {
      evenHandler(arr[i]);
    } else {
      oddHandler(arr[i]);
    }
  }
}

function myEvenHandler(val) {
  console.log("We have got an even value: ", val);
}
function myOddHandler(val) {
  console.log("We have got an odd value: ", val);
}
main(input, myEvenHandler, myOddHandler);
main()
