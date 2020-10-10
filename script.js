/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hello");


// Challenge Name: Convert Minutes into Seconds
// Challenge Difficulty: Very Easy

function convert(minutes) {
  return minutes * 60;
}

var test1 = convert(50);
console.log(test1);
console.log(convert(2.5));


// Challenge Name: Zipt It, If You Can?
// Challenge Difficulty: Easy

function zipIt(women, men) {
  if (women.length === men.length) {
    return women.map((woman, i) => [woman, men[i]]);
  } else {
    console.log("sizes don't match");
  }
}

var test2 = zipIt(["Mary", "Jordan", "Bessie"], ["John", "Jayden", "Jorge"]);
console.log(test2);
console.log(zipIt(["Maxie", "Gabriela"], ["Jackson"]));


// Challenge Name: Temperature Conversion
// Challenge Difficulty: Medium

function tempConversion(celsius) {
  const resultArr = [];
  const f = celsius * (9 / 5) + 32;
  const k = celsius + 273.15;
  const numF = parseFloat(f.toFixed(2));
  const numK = parseFloat(k.toFixed(2));
  if (k < 0) {
    return "Invalid";
  }
  resultArr.push(numF);
  resultArr.push(numK);
  return resultArr;
}

var test3 = tempConversion(503.543);
console.log(test3);
console.log(tempConversion(-300));


// Challenge Name: Tower of Hanoi
// Challenge Difficulty: Hard

function towerHanoi(discs) {
  var moves = Math.pow(2, discs) - 1;
  return moves;
}

var test4 = towerHanoi(64);
console.log(test4);
console.log(towerHanoi(521));


// Challenge Name: Temperature Conversion
// Challenge Difficulty: Very Hard

function combinations(k, n) {
  const fact = num => {
    if (num < 0) return -1;
    else if (num == 0) return 1;
    else {
      return num * fact(num - 1);
    }
  };
  return Math.round(fact(n) / (fact(k) * fact(n - k)));
}

var test5 = combinations(101, 101);
console.log(test5);
console.log(combinations(5, 10));