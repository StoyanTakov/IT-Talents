function Book(name, printDate, publisher, genre) {
    this.name = name;
    this.printDate = printDate;
    this.publisher = publisher;
    this.genre = genre;
    var history = [];
    this.addHistory = function (dateTaken, dateReturned) {
        history.push(new History(dateTaken, dateReturned));
    }
}

function Magazine(name, publisher, category, numberOfPublish, printDate) {
    this.name = name;
    this.publisher = publisher;
    this.category = category;
    this.numberOfPublish = numberOfPublish;
    this.printDate = printDate;
    var history = [];
    this.addHistory = function (dateTaken, dateReturned) {
        history.push(new History(dateTaken, dateReturned));
    }
}

function StudyBook(name, author, publisher, subject) {
    this.name = name;
    this.author = author;
    this.publisher = publisher;
    this.subject = subject;
    var history = [];
    this.addHistory = function (dateTaken, dateReturned) {
        history.push(new History(dateTaken, dateReturned));
    }
}

function History(dateTaken, dateReturned) {
    var dateTaken = dateTaken;
    var dateReturned = dateReturned;
}

function Library(name) {
    this.name = name;
    var books = [];
    var magazines = [];
    var studyBooks = [];
    var catalog = [books,magazines,studyBooks];
    this.addBook = function (book) {
        books.push(book);
        books.sort((bookOne, bookTwo) => bookOne.genre > bookTwo.genre);
    }
    this.addMagazine = function (magazine) {
        magazine.push(magazine);
        magazine.sort((magazineOne, magazinTwo) => magazineOne.category > magazineTwo.category)
    }
    this.addStudyBook = function (studyBook) {
        studyBooks.push(studyBook);
        studyBooks.sort((studyBook1, studyBook2) => studyBook1.subject > studyBook2.subject);
    }
    this.getBooksByGenre= function(genre){
        books.filter(book => book.genre === genre).forEach(book => console.log(book.name+" "+book.author));
    }
    this.getMagazinesByCategory= function(category){
        magazines.filter(magazine => magazine.category === category).forEach(magazine => console.log(magazine.name+" "+magazine.publisher));
    }
    this.getStudyBooksBySubject = function(subject){
        studyBooks.filter(studyBook => studyBook.subject===subject).forEach(studyBook => console.log(studyBook.name+" "+studyBook.publisher));
    }
    this.showCatalogByType = function(type){
       if (type === "books") {
           books.forEach(book => console.log(book));
       }else{
           if (type === "magazines") {
               magazines.forEach(magazine => console.log(magazine));
           }else{
               if (type === "study books") {
                   studyBooks.forEach(studyBook => console.log(studyBook));
               }
           }
       }
    }
    this.showBooks = function () {
        books.forEach(book => console.log(book));
    }
}
var biblio = new Library("Biblio");
biblio.addBook(new Book("addd", 2000, "Vrr", "horror"));
biblio.addBook(new Book("ddd", 1999, "Vrr", "horror"));
biblio.addBook(new Book("srrr", 1999, "Vrr", "action"));
biblio.showBooks();
biblio.showCatalog();
