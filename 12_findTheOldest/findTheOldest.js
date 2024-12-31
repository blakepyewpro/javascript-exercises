const getAge = function (birth, death) {
  if(!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function(array) {
  return array.reduce((oldest, current) => {
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    return currentAge > oldestAge ? current : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
