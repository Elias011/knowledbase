function plusMinus(arr) {
  let arr1 = arr.filter(i => i > 0);
  let arr2 = arr.filter(i => i < 0);
  let arr3 = arr.filter(i => i === 0);
  console.log(arr1.length / arr.length)
  console.log(arr2.length / arr.length)
  console.log(arr3.length / arr.length)
  }

plusMinus([-4, 3, -9, 0, 4, 1])