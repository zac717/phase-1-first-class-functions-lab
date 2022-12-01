// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  function createFareMultiplier(number) {
    return function () {
      return number ** 2;
    };
  }
  
  const fare = function createFareMultiplier(number) {
    return function () {
      return number ** 2;
    };
  };
  
  function fareDoubler(fare) {
    let doubled = fare * 2;
    return doubled;
  }
  function fareTripler(fare) {
      return fare*3;
  }
  
  function selectDifferentDrivers(arrayOfDrivers, myFunction) {
      if(myFunction == returnFirstTwoDrivers) {
          return arrayOfDrivers.slice(0, 2);
      }
      else if(myFunction == returnLastTwoDrivers) {
          return arrayOfDrivers.slice(-2);
      }
  }