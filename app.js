// 1️⃣ Define the BankAccount class
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  // 2️⃣ Deposit method
  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }

    this.balance += amount;
    this.transactions.push({ type: "deposit", amount: amount });

    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  // 3️⃣ Withdraw method
  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }

    this.balance -= amount;
    this.transactions.push({ type: "withdraw", amount: amount });

    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  // 4️⃣ Check balance
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // 5️⃣ List all deposits
  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => t.amount);

    return `Deposits: ${deposits.join(",")}`;
  }

  // 6️⃣ List all withdrawals
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => t.amount);

    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// 7️⃣ Create an instance named myAccount
const myAccount = new BankAccount();

// 8️⃣ Add at least five transactions (2+ deposits, 2+ withdrawals, balance > 100)
myAccount.deposit(200);
myAccount.deposit(150);
myAccount.withdraw(50);
myAccount.deposit(75);
myAccount.withdraw(25);
