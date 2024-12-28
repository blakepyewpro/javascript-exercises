const palindromes = function (input) {
  let filteredArray = input.toLowerCase().split("").filter(isAlphabetic);
  let reversedArray = filteredArray.toReversed();

  if (filteredArray.join("") == reversedArray.join("")) return true;
  else return false;
};

function isAlphabetic(str) {
  const filter = " !,.?";
  if (filter.includes(str)) return false;
  else return true;
};

// Do not edit below this line
module.exports = palindromes;
