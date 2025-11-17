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
    private readonly isbn: string,
    public readonly title: string,
    public readonly author: string,
    private isAvailable: boolean = true
  ) {};

  public getIsbn() {
    return this.isbn;
  };

  public setBookStatus(status: boolean) {
    return this.isAvailable = status;
  };

  public getBookStatus() {
    return this.isAvailable;
  };
  
  public checkOut() {
    if(!this.getBookStatus()) {
      return "This book is not available!";
    };
    this.setBookStatus(false);
    return true;
  };

  public returnBook() {
    if(this.getBookStatus()) {
      return "This book is not checked out!";
    };
    

    this.setBookStatus(true);
    return true;
  };

  public getInfo() {
    return `${this.title} by ${this.author}`;
  };
};


class Member {
  constructor(
    private readonly memberId: string,
    public name: string,
    public maxBooks: number = 3,
    public borrowedBooks: Map<string, Book> = new Map() 
  ) {};

  public getMemberId() {
    return this.memberId;
  }

  public getBorrowedCount() {
    return this.borrowedBooks.size;
  };

  public canBorrow() {
    if(this.borrowedBooks.size <= this.maxBooks) {
      return true;
    }
    else {
      return false;
    };
  };

  public listBorrowedBooks() {
    if(this.borrowedBooks.size > 0) {
      return this.borrowedBooks;
    }
    else {
      return "You have no borrowed books!"
    };
  };
};

class Library {
  constructor(
    public readonly name: string,
    public books: Map<string, Book> = new Map(), 
    public members: Map<string, Member> = new Map()
  ) {};

  public addBook(book: Book) {
    this.books.set(book.getIsbn(), book);
    return true;
  };

  public addMember(member: Member) {
    return this.members.set(member.getMemberId(), member);
  }

  public borrowBook(member: Member, book: Book) {
    if(member.borrowedBooks.size >= member.maxBooks) {
      return "You have reached the maximum number of books allowed!";
    }
    else if(!book.getBookStatus()) {
      return "This book is not available!";
    };

    member.borrowedBooks.set(book.getIsbn(), book);
    this.members.set(member.getMemberId(), member);
    
    book.checkOut();
    this.books.set(book.getIsbn(), book);

    return true;
  };

  public returnBook(member: Member, book: Book) {
    if(member.borrowedBooks.size === 0) {
      return "You have not checkout any any books!";
    }
    else if(book.getBookStatus()) {
      return "this book is not checked out!";
    };

    member.borrowedBooks.delete(book.getIsbn());
    book.returnBook();

    this.members.set(member.getMemberId(), member);
    this.books.set(book.getIsbn(), book);
    
    return true;
  };

  public findBook(isbn: string) {
    const book = this.books.get(isbn);
    return book;
  };

  public findMember(memberId: string) {
    const member = this.members.get(memberId);
    return member;
  };

  public getAvailableBooks() {
    return this.books;
  };

  public getTotalBooks() {
    return this.books.size;
  };

  public getMemberCount() {
    return this.members.size;
  };
}


const member1 = new Member("ME324", "Frank", 3);
const book1 = new Book("415J", "Typescript 101", "Dr. Smith")

const library = new Library("Town Library");

console.log("Adding new member", library.addMember(member1));
console.log("Adding new book", library.addBook(book1));


console.log("Member is checking out library book", library.borrowBook(member1, book1));


console.log("Member info post checkout:",
  "Member checkout out book:", member1.listBorrowedBooks(),
  "Number of borrowed books:", member1.getBorrowedCount()
);


console.log("Is book available after return?", book1.getBookStatus())


console.log("Member is returning book", library.returnBook(member1, book1));

console.log("Member info post return:", "Member returned book:", member1.listBorrowedBooks(),
  "Number of borrowed books:", member1.getBorrowedCount()
);

console.log("Is book available after return?", book1.getBookStatus());


