var assert = {

  equals: function(firstElement, secondElement, description) {
    if (firstElement != secondElement) {
      console.error(Error("Assertion failed: " + firstElement + " does not equal " + secondElement + ". " + description));
    } else {
      console.log("%cAssertion Passed: " + description, 'color: green');
    }
  },

  isTrue: function(assertionToCheck, description) {
    if (!assertionToCheck) {
      console.error(Error("Assertion failed: " + assertionToCheck + " is not truthy. " + description));
    } else {
      console.log("%cAssertion Passed: " + description, 'color: green');
    }
  },

  include: function(firstElement, secondElement, description) {
    if (firstElement.includes(secondElement)) {
      console.error(Error("Assertion failed: " + firstElement + " contains " + secondElement + ". " + description));
    } else {
      console.log("%cAssertion Passed: " + description, 'color: green');
    }
  }

};
