// // ********************question-1************************

// // Numeric Types
// let age: number = 25;
// console.log(age);


// // let largeNumber: bigint = 90071992512235345466n;



// // String Type
// let nameo: string = "John Doe";
// console.log(nameo);



// // Boolean Type
// let isStudent: boolean = true;
// console.log(isStudent)


// // Array Types
// let scores: number[] = [85, 90, 95];
// let colors: string[] = ["red", "green", "blue"];
// let answers: boolean[] = [true, false, true];



// // Tuple Type
// let person: [string, number] = ["Alice", 30];
// console.log(person);


// // Enum Type
// enum Direction {
//   North,
//   East,
//   South,
//   West,
// }
// let currentDirection: Direction = Direction.North;



// // Any Type
// let randomValue: any = "Hello";
// randomValue = 42; // Can be reassigned to any type



// // Void Type
// function logMessage(message: string): void {
//   console.log(message);
// }
// logMessage("This is a log message");



// // Null and Undefined Types
// let emptyValue: null = null;
// let notAssigned: undefined = undefined;



// // Function Declarations
// function addNumbers(a: number, b: number): number {
//   return a + b;
// }
// console.log("Sum:", addNumbers(10, 20));

// function greetUser(name: string): string {
//   return `Hello, ${name}!`;
// }
// console.log(greetUser("Alice"));




// // Object Types with Interface
// interface User {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }
// let user1: User = {
//   name: "Alice",
//   age: 30,
//   isStudent: true,
// };
// console.log(user1);




// // Object Types with Type Alias
// type Product = {
//   id: number;
//   name: string;
//   price: number;
// };
// let product1: Product = {
//   id: 1,
//   name: "Laptop",
//   price: 1200,
// };
// console.log(product1);





// // Complex Array of Objects
// let products: Product[] = [
//   { id: 2, name: "Phone", price: 800 },
//   { id: 3, name: "Tablet", price: 600 },
// ];
// console.log(products);



//*********************question -2*************************



// // Enum for Book Genres

// enum Genre {
//   Fiction = "Fiction",
//   NonFiction = "Non-Fiction",
//   Mystery = "Mystery",
//   Thriller = "Thriller",
//   ScienceFiction = "Science Fiction",
// }



// // Union Type for Book Formats
// type BookFormat = "Paperback" | "Hardcover" | "Ebook";



// // Interface for Book Structure
// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   genre: Genre;
//   quantity: number;
// }



// // Intersection Type for LibraryBook
// type LibraryBook = Book & { format: BookFormat };



// // Interface for Library
// interface Library {
//   books: LibraryBook[];
//   searchBooks: (key: string, value: string) => LibraryBook[];
//   updateQuantity: (id: number, newQuantity: number) => void;
// }

// // Implementation of the Library
// class LibraryInventory implements Library {
//   books: LibraryBook[];

//   constructor() {
//     this.books = [
//       {
//         id: 1,
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         genre: Genre.Fiction,
//         quantity: 10,
//         format: "Paperback",
//       },
//       {
//         id: 2,
//         title: "The Silent Patient",
//         author: "Alex Michaelides",
//         genre: Genre.Mystery,
//         quantity: 5,
//         format: "Hardcover",
//       },
//       {
//         id: 3,
//         title: "Dune",
//         author: "Frank Herbert",
//         genre: Genre.ScienceFiction,
//         quantity: 8,
//         format: "Ebook",
//       },
//     ];
//   }



//   // Search for books by key (title, author, or genre)
//   searchBooks(key: string, value: string): LibraryBook[] {
//     return this.books.filter((book) =>
//       book[key as keyof LibraryBook]
//         ?.toString()
//         .toLowerCase()
//         .includes(value.toLowerCase())
//     );
//   }



//   // Update the quantity of a book
//   updateQuantity(id: number, newQuantity: number): void {
//     const book = this.books.find((book) => book.id === id);
//     if (book) {
//       book.quantity = newQuantity;
//       console.log(`Updated quantity of '${book.title}' to ${newQuantity}.`);
//     } else {
//       console.log(`Book with ID ${id} not found.`);
//     }
//   }



//   // Display all books
//   displayBooks(): void {
//     console.log("Library Inventory:");
//     this.books.forEach((book) => {
//       console.log(
//         `ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Genre: ${book.genre}, Quantity: ${book.quantity}, Format: ${book.format}`
//       );
//     });
//   }
// }



// // Testing the LibraryInventory
// const library = new LibraryInventory();



// // Display initial inventory
// library.displayBooks();



// // Search for books by title
// console.log("\nSearch by Title (Dune):");
// console.log(library.searchBooks("title", "Dune"));



// // Search for books by genre
// console.log("\nSearch by Genre (Mystery):");
// console.log(library.searchBooks("genre", Genre.Mystery));



// // Update quantity of a book
// console.log("\nUpdate Quantity:");
// library.updateQuantity(1, 15);

// // Display updated inventory
// console.log("\nUpdated Inventory:");
// library.displayBooks();
