console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let count = Math.round(Math.random() * (10 - 1) + 1);
function printOdds(count) {
    for(let i = 1; i <= count; i++) {
        if(i % 2 !=0) {
            console.log(i);
        }
    }
}
printOdds(count)

let countneg = Math.round(Math.random() * ((10 - 1) + 1)*-1);
function printOddsNegatives(countneg) {

    if (countneg < 0) {
       for(let i = 0; i > countneg; i--) {
           if (i % 2 != 0){
               console.log(i);
           }
       }
   }
   }
   printOddsNegatives(countneg)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `${userName} you can drive`;
    let belowSixteen = `Sorry ${userName}, you need to wait until you're 16.`;
    if (age > 16) {
      console.log(aboveSixteen);
    } else if (age < 16) {
      console.log(belowSixteen);
    } else {
      console.log("Enter in correct value");
    }
  }

  checkAge("Mary", 21)
  checkAge("Sally", 15)
  checkAge("Bobby", 43)
  
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrant (x, y) {
    if (x == 0 || y == 0) {
      
      if (x == 0 && y == 0) {
        console.log("Point is in center of graph");
      }
      else if (x == 0) {
        console.log("Point is on x-axis");
      }
      
      else if (y == 0) {
        console.log("Point is on y-axis");
      }
    } else{
        
        if (x > 0 && y > 0){
           console.log("Point is in first quadrant")
           
        }else if (x < 0 && y > 0){
          console.log("Point is in second quadrant")
        
      } else if (x < 0 && y < 0){
          console.log("Point is in third quadrant")
        
      } else{
          console.log("Point is in fourth quadrant")
      }
  
        }
    }
  
    quadrant(0,0)
    quadrant(-2,5)
    quadrant(-5,-5)
    quadrant(10,-10)


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType (a,b,c,){
    //is triangle valid
    if(a+b < c){
        console.log ("Invaid triangle")
    } else if(a == b && a == c){
        console.log("equalateral")
    } else if(a ==b || b == c || a ==c){
        console.log("Isosceles triangle")
    } else {
        console.log("Scalene triangle")
    }
}

triangleType(2,2,2);
triangleType(2, 2, 3);
triangleType(2,2,15);
triangleType(4, 5, 7);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataUsage(planLimit, day, usage){
    let length = 30;
    let average = usage / day;
    let exceedingUsage = (usage * 2) - planLimit;
    let remainingUsage = (planLimit - usage) / (length - day);
    console.log(`${day} days used, ${length - day} day's remaining`);
    console.log(`Average daily use : ${planLimit / length} GB/day`);
    console.log(`You are EXCEEDING your average daily use by (${average} GB/day),continuing this high usage,you'll exceed your data plan by ${exceedingUsage} GB.`)
    console.log(`To stay below your data plan limit, use no more then ${remainingUsage} GB/day.`)
  }

  dataUsage(100,15,56)
  dataUsage(50, 15, 25);
  dataUsage(50, 10, 25);