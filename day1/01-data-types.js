let dennis = {
  name: "dennis",
  age: 18,
  height: 180,
  isHandsome: true,
};

console.log(typeof dennis);

const HONG_KONG = "is dead";

// HONG_KONG = "is alive";

dennis["number_of_girlfriends"] = 999;

// dennis = "is ugly";

console.log(dennis);

console.log(typeof dennis.age);
console.log(typeof dennis.isHandsome);

let student_a = {
  name: "a",
};

let student_b = {
  name: "a",
};

let student_c = student_a;

student_c.name = "c";

console.log(student_a);

console.log(student_a === student_b);

let number_a = 10;

let number_b = 10;

console.log(number_a === number_b);

let arr_a = [];

let arr_b = [];

// pass by value vs pass by reference

console.log(arr_a === arr_b);

let num_arr = [12321, 545, 776, 675464, 567674564, 66543];

for (num of num_arr) {
  if (num % 2 == 0) {
    console.log(num);
  } else {
    console.log("byeeeee");
  }
}
