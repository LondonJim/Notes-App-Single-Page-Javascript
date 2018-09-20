function Assert() {};

  Assert.prototype.equals = function(firstElement, secondElement, description) {
    if (firstElement != secondElement) {
      console.error(Error("Assertion failed: " + firstElement + " does not equal " + secondElement + ". " + description));
    } else {
      console.log("%cAssertion Passed: " + firstElement + " equals " + secondElement + ".  " + description, 'color: green');
    }
  }

  Assert.prototype.isTrue = function(assertionToCheck, description) {
    if (!assertionToCheck) {
      console.error(Error("Assertion failed: " + assertionToCheck + " is not truthy. " + description));
    } else {
      console.log("%cAssertion Passed: " + assertionToCheck + ". " + description, 'color: green');
    }
  }

  Assert.prototype.includes = function(firstElement, secondElement, description) {
    if (firstElement.includes(secondElement)) {
      console.error(Error("Assertion failed: " + firstElement + " contains " + secondElement + ". " + description));
    } else {
      console.log("%cAssertion Passed: " + firstElement + " contains " + secondElement + ". " + description, 'color: green');
    }
  }

assert = new Assert();
