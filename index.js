function isPalindrome(word) {

}

function isPalindrome(str) {

  str = str.toLowerCase();
  
  let start = 0;
  let end = str.length - 1;
  
  while (start < end) {
  
    if (str[start] !== str[end]) {
      return false;
    }

    start++;
    end--;
  }
  
  return true;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("robot")); 

if (require.main === module) {
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
