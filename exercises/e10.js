// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let clientsWithLetter = [];
  for (let clients of array) {
    let names = clients.name;
    for (let char of names) {
      if (char.toLowerCase() === letter.toLowerCase()) {
        clientsWithLetter.push(names);
      }
    }
  }
  return clientsWithLetter;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
