const assert = {
  isTrue: function(assertionToCheck, description) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy. " + description)
    } else {console.log("Assertion Passed: " + assertionToCheck + ". " + description)
    }
  }
};
