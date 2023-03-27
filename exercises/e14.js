
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let wrongBal = [];
  for (let client of array) {
    if (!client.withdrawals) {
      continue;
    }
    let deposit = 0;
    let withdrawal = 0;
    for (let num of client.deposits) {
      deposit += num;
    }
    for (let num of client.withdrawals) {
      withdrawal += num;
    }
    if((deposit - withdrawal) != client.balance) {
      wrongBal.push(client);
    }
  }
  return wrongBal;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
