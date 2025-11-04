// Task 1: Round a Decimal Number
// Problem:
//  Given a decimal number, display its rounded value using JavaScript’s Math methods.
//  ans:

// let num=Number(prompt("Enter your number :"))

// console.log(`Ans:
// Original :${num}`)
// console.log(`Rounded (Nearest) :${(num.toFixed(0))}`);
// console.log(`Rounded (2 decimal places):${(num.toFixed(2))}`);


// Task 2: Generate a Random Number between Two Values
// Problem:
//  Write a program that generates a random integer between two given numbers (inclusive).
//  ans:

//  let x=parseInt(prompt("Enter your min value :"))
// let y=parseInt(prompt("Enter your max value :"))
// let random = (Math.random()*(y-x)+x).toFixed(0);
// console.log(`Ans: Random number between ${x} and ${y} : ${random}`)

// Task 3: Sum of Digits of a Number
// Problem:
//  Write a JavaScript program to find the sum of all digits in a given number.
//  The number may be positive or negative.
//  ans:self code

// let num=prompt("Enter your numbers : ")
// let newNum=Math.abs(num)
// let str=newNum.toString()
// count=0
// for (i=0;i<str.length;i++){
//     count+=parseInt(str[i])
// }
// console.log(`Ans:Sum of digits: ${count}`)


// Task 4: Format a Number as Currency
// Problem:
//  Write a JavaScript program that takes a number and formats it as currency (for example, in Indian Rupees).
//  ans:discuss krishna 

// let rupees=Number(prompt("Enter your amount :"))
// newNum="₹"+rupees.toLocaleString('en-IN');
// console.log(`Ans: Formatted amount:${newNum}`)

// Task 5: Calculate Compound Interest
// ans:

// let p=prompt("Enter your principal value :")
// let r=prompt("Enter your rate value :")
// let t=prompt("Enter your time value :")

// function compound (p,r,t){
//     return a=p*(1+(r/100))**t
// }
// console.log (`Ans: Total amount : ${(compound(p,r,t))}`)
// function compoundint(a,p){
//     return a-p
// }
// console.log(`Ans: Compound interest : ${(compoundint(a,p))}`)

//  Task 6: Convert Case and Reverse a String
// Problem:
//  Write a program that converts all letters in a string to uppercase and also prints the reversed version of the string.
// ans:

// let str=prompt("Enter your string :")
// let newstr=""
//  console.log(`Ans: UpperCase : ${(str.toUpperCase())}`)
//  for (i=str.length-1;i>=0;i--){
//      newstr+=str[i]
//  }
//  console.log(`Ans: Reversed : ${(newstr)}`)

// Task 7: Check for Palindrome
// Problem:
//  Write a program that checks whether a given string reads the same backward and forward (ignoring case and spaces).
// ans:

// let str=prompt("Enter your string :")
// let newstr=""
//  for (i=str.length-1;i>=0;i--){
//      newstr+=str[i]
//  }
// if (str==newstr){
//     console.log("Ans: Is Palindrome: True")
// }
// else{
//     console.log("Ans: Is Palindrome: False")
// }

// Task 8: Count the Occurrences of a Word
// Problem:
//  Write a JavaScript program to count how many times a specific word appears in a sentence.
// ans:self code

// let sentence=prompt("Enter you sentence :")
// let word=prompt("Enter you word :")
// let count=0

// for(i=0;i<=sentence.length;i++){
//   if (word.split(" ")==sentence.split(" ")[i]){
//       count+=1
//   }
// }
// console.log(`Ans: ${word} appears ${count} times`)

// Task 9: Capitalize the First Letter of Each Word
// Problem:
//  Write a JavaScript program that capitalizes the first letter of every word in a given sentence.
// ans:self code

// let str=prompt("Enter your string :")
// let newStr=str.split(" ")
// let upperCase=""
// for (i=0;i<newStr.length;i++){
//     let word=newStr[i]
//     for (j=0;j<word.length;j++){
//         if(j==0){
//             upperCase+=word[j].toUpperCase()
//         }
//         else{
//             upperCase+=word[j]
//         }
//         }
//     upperCase+=" "
// }
// console.log(`Ans: ${upperCase}`)


// Task : 10. Remove Duplicate Characters
// Problem:
//  Write a JavaScript program that removes duplicate characters from a string.
// Sample Input:self code
// ans:

// let str=prompt("Enter you string :")
// newStr=""
// for(i=0;i<str.length;i++){
//     if (!newStr.includes(str[i])){
//         newStr+=str[i]
//     }
// }
// console.log(`Ans: After removing duplicates: ${newStr}`)
