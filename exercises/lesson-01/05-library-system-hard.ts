/**
 * Exercise 5: Library System (Hard)
 *
 * Build a comprehensive library management system with three classes:
 * 1. Book - represents a book with checkout functionality
 * 2. Member - represents a library member who can borrow books
 * 3. Library - manages the collection of books and members
 *
 * See README.md for full requirements and example usage.
 */

// Your code here


class Book {
  constructor(
    public isbn: string,
    public readonly title: string,
    public readonly author: string,
    public isAvailable: boolean = true
  ) {};
  
  public checkOut() {
    if(!this.isAvailable) {
      throw new Error("This book is not available!");
    };
    return this.isAvailable = false;
  };

  public returnBook() {
    if(this.isAvailable) {
      throw new Error("This book is not checked out!");
    };
    return this.isAvailable = true;
  };

  public getInfo() {
    return `${this.title} by ${this.author}`;
  };
};


class Member {
  constructor(
    private readonly memberId: string,
    public name: string,
    public borrowedBooks: Book[] = [],
    public maxBooks: number = 3 
  ) {};

  public borrowBook(book: Book) {
    if(this.borrowedBooks.length >= this.maxBooks) {
      throw new Error("You have checked out the maximum amount of books!");
    }
    else if(!book.isAvailable) {
      throw new Error("This book is not available!")
    };

    book.checkOut();
    return this.borrowedBooks.push(book);
  };

  public returnBook(book: Book) {
    if(this.borrowedBooks.length === 0) {
      throw new Error("You do not have any books checked out!");
    }
    else if(book.isAvailable) {
      throw new Error("This book has already been returned");
    };

    let tempArr = [];

    book.returnBook();
    
    for(let i = 0; i < this.borrowedBooks.length; i++) {
      if(this.borrowedBooks[i].title === book.title) {
        continue;
      }
      else {
        tempArr.push(this.borrowedBooks[i]); 
      };
    };


    return this.borrowedBooks = tempArr;
  };

  public getBorrowedCount() {
    return this.borrowedBooks.length;
  };

  public canBorrow() {
    if(this.borrowedBooks.length <= this.maxBooks) {
      return true;
    }
    else {
      return false;
    };
  };

  public listBorrowedBooks() {
    return this.borrowedBooks;
  };
};

class Library() {
  constructor(
    public readonly name: string,
    public books: Book[] = [],
    public members: Members[] = []
  ) {};

  public addBook(book: Book) {
    return this.books.push(book);
  };

  public addMember(member: Member) {
    return this.members.push(member);
  }

  public findBook(isbn: string) {
    for(let i = 0; i < this.books.length; i++) {
      if(isbn === this.books[i].isbn) {
        return this.books[i];
      };
    };
  };

  public findMember(memberId: string) {
    for(let i = 0; i < this.members.length; i++) {
      if(memberId === this.members.memberId) {
        return this.members[i];
      }; 
    };
  };

  public getAvailableBooks() {
    return this.books;
  };

  public getTotalBooks() {
    return this.books.length;
  };

  public getMemberCount() {
    return this.members;
  };
}


const member = new Member("ME324", "Frank", [], 3);
const book1 = new Book("415J", "Typescript 101", "Dr. Smith")

console.log(member.borrowBook(book1));
console.log(member.listBorrowedBooks());

console.log(member.getBorrowedCount());

console.log(member.canBorrow());





