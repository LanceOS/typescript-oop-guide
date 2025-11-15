/**
 * Exercise 3: Multiple Objects (Medium)
 *
 * Create a BankAccount class with:
 * - Properties: accountNumber, ownerName, balance
 * - Methods: deposit(), withdraw(), getBalance(), transfer()
 *
 * See README.md for full requirements and example usage.
 */

// Your code here

class BankAccount {
    constructor(
        private readonly accountNumber: string,
        public readonly ownerName: string,
        private balance: number
    ) {}

    public getBalance() {
        return this.balance;
    }

    public deposit(amount: number) {
        if (amount <= 0) {
            throw new Error("Deposit amount cannot be zero");
        }
        return (this.balance += amount);
    }

    public withdraw(amount: number) {
        if (amount <= 0) {
            throw new Error("Withdraw amount cannot be zero");
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds!");
        }

        return (this.balance -= amount);
    }

    public transfer(amount: number, toAccount: BankAccount) {
        if (amount > this.getBalance()) {
            throw new Error("Insufficient funds!");
        }
        this.withdraw(amount);
        toAccount.deposit(amount);
        return amount;
    }
}

const account1 = new BankAccount("ACT1", "Steve", 400);
const account2 = new BankAccount("ACT2", "Frank", 100);
console.log("Steve's starting balance:", account1.getBalance());
console.log("Frank's starting balance:", account2.getBalance());

// 400 + 350 = 750
console.log("Steve deposits 350.", "New balance:", account1.deposit(350));

console.log(
    "Steve has transferred 100 to Frank:", account1.transfer(100, account2));
console.log("Steve's new balance is:", account1.getBalance());
console.log("Frank's new balance is:", account2.getBalance());
