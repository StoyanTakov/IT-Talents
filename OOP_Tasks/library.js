const MONTHS_WITH_31_DAYS = [1, 3, 5, 7, 8, 10, 12];
const MONTHS_WITH_30_DAYS = [4, 6, 9, 11];
const MONTH_APRIL = 4;
const APRIL_DAYS = 28;
const MAX_DAYS_FOR_RETURNING_BOOK = 5;
const MAX_DAYS_FOR_RETURNING_STUDY_BOOK = 3;
const DAYS_IN_BIG_MONTH = 31;
const DAYS_IN_SMALL_MONTH = 30;

function validatingDate(date, typeBook) {
    var daysForRent = 0;
    if (typeBook instanceof Book) {
        daysForRent = MAX_DAYS_FOR_RETURNING_BOOK;
    } else {
        if (typeBook instanceof StudyBook) {
            daysForRent = MAX_DAYS_FOR_RETURNING_STUDY_BOOK;
        }
    }
    var estDayOfReturn = date.getDay() + daysForRent;
    var estMonthOfReturn = date.getMonth();
    var estYearOfReturn = date.getFullYear();
    if (date.getMonth() === MONTH_APRIL && date.getDay() + daysForRent > APRIL_DAYS) {
        estDayOfReturn = date.getDay() - APRIL_DAYS + daysForRent;
        estMonthOfReturn = (date.getMonth() + 1 > 12) ? 1 : date.getMonth() + 1;
        estYearOfReturn = (date.getMonth() + 1 > 12) ? date.getFullYear() + 1 : date.getFullYear();
    } else {
        if ((MONTHS_WITH_31_DAYS.indexOf(date.getMonth()) !== -1) && date.getDay() + daysForRent > DAYS_IN_BIG_MONTH) {
            estDayOfReturn = date.getDay() - DAYS_IN_BIG_MONTH + daysForRent;
            estYearOfReturn = (date.getMonth() + 1 > 12) ? date.getFullYear() + 1 : date.getFullYear();
        } else {
            if ((MONTHS_WITH_30_DAYS.indexOf(date.getMonth()) !== -1) && date.getDay() + daysForRent > DAYS_IN_SMALL_MONTH) {
                estDayOfReturn = date.getDay() - DAYS_IN_SMALL_MONTH + daysForRent;
                estMonthOfReturn = (date.getMonth() + 1 > 12) ? 1 : date.getMonth() + 1;
                estYearOfRetrun = (date.getMonth() + 1 > 12) ? date.getFullYear() + 1 : date.getFullYear();
            }
        }
    }
    return {
        dateRented: date,
        dateToBeReturned: new Date(estYearOfReturn, estMonthOfReturn, estDayOfReturn),
        dateReturned: null
    }
}

function Book(name, printDate, publisher, genre) {
    this.name = name;
    this.printDate = printDate;
    this.publisher = publisher;
    this.genre = genre;
    var history = [];
    var tax = 2;
    this.getTax = function () {
        return tax;
    }
    this.dateTaken = function (date, typeBook) {
        var validatedDate = validatingDate(date);
        history.push(validatedDate);
    }
    this.getHistory = function () {
        console.log(history[history.length - 1]);
    }
}

function Magazine(name, publisher, category, numberOfPublish, printDate) {
    this.name = name;
    this.publisher = publisher;
    this.category = category;
    this.numberOfPublish = numberOfPublish;
    this.printDate = printDate;
}

function StudyBook(name, author, publisher, subject) {
    this.name = name;
    var tax = 3;
    this.author = author;
    this.publisher = publisher;
    this.subject = subject;
    var history = [];
    this.getTax = function () {
        return tax;
    }
    this.dateTaken = function (date,typeBook) {
        var validatedDate = validatingDate(date);
        history.push(validatedDate);
    }
    this.returnedItem = function (date) {

    }
    this.getHistory = function () {
        console.log(history[history.length - 1]);
    }
}

function Library(name) {
    this.name = name;
    var books = [];
    var magazines = [];
    var studyBooks = [];
    var catalog = [];
    this.addBook = function (book) {
        books.push(book);
        catalog.push(book);
        books.sort((bookOne, bookTwo) => bookOne.genre > bookTwo.genre);
    }
    this.addMagazine = function (magazine) {
        magazines.push(magazine);
        catalog.push(magazine);
        magazines.sort((magazineOne, magazineTwo) => magazineOne.category > magazineTwo.category)
    }
    this.addStudyBook = function (studyBook) {
        studyBooks.push(studyBook);
        catalog.push(studyBook);
        studyBooks.sort((studyBook1, studyBook2) => studyBook1.subject > studyBook2.subject);
    }
    this.getBooksByGenre = function (genre) {
        books.filter(book => book.genre === genre).forEach(book => console.log(`${book.name} - ${book.author}`));
    }
    this.getMagazinesByCategory = function (category) {
        magazines.filter(magazine => magazine.category === category).forEach(magazine => console.log(`"${magazine.name}" -` + " брой " + magazine.numberOfPublish));
    }
    this.getStudyBooksBySubject = function (subject) {
        studyBooks.filter(studyBook => studyBook.subject === subject).forEach(studyBook => console.log(studyBook.name + " " + studyBook.publisher));
    }
    this.showCatalogByType = function (type) {
        if (type === "books") {
            books.sort((book1, book2) => (book1.genre > book2.genre) || (book1.printDate - book2.printDate)).forEach(book => console.log(`${book.name} - ${book.genre}`));
        } else {
            if (type === "magazines") {
                magazines.sort((magazine1, magazine2) => (magazine1.name < magazine2.name) || (magazine1.numberOfPublish - magazine2.numberOfPublish)).forEach(magazine => console.log(`"${magazine.name}" - брой ${magazine.numberOfPublish}`));
            } else {
                if (type === "study books") {
                    studyBooks.sort((studyBook1, studyBook2) => studyBook1.subject > studyBook2.subject || studyBook1.name > studyBook2.name).forEach(studyBook => console.log(`${studyBook.name} - ${studyBook.author}`));
                }
            }
        }
    }
    this.lendingReadingMaterial = function (titleOfItem, person) {
        if (catalog.find(item => item.name === titleOfItem) !== -1) {
            var itemIndex = catalog.findIndex(item => item.name === titleOfItem);
            if (catalog[itemIndex] instanceof Magazine) {
                console.log("It cannot be rented!");
                return false;
            } else {
                if (catalog[itemIndex] instanceof StudyBook || catalog[itemIndex] instanceof Book) {
                    if (person.getMoney() >= catalog[itemIndex].getTax()) {
                        catalog[itemIndex].dateTaken(new Date(2017, 8, Math.round((Math.random() + 1) * 30)),catalog[itemIndex]);
                        return catalog[itemIndex];
                    } else {
                        console.log("Not enough money for rent.");
                        return false;
                    }
                }
            }
        } else {
            console.log("There is no such title.");
            return false;
        }

    }
    this.showCatalog = function () {
        catalog.forEach(x => console.log(x));
    }
}
var biblio = new Library("Biblio");
biblio.addBook(new Book("To Hell and back", 2000, "Ghost", "horror"));
biblio.addBook(new Book("Bring back those bodies to me", 1999, "Ghost", "horror"));
biblio.addBook(new Book("Die hardly", 1999, "Guns and puns", "action"));
biblio.addBook(new Book("Pew pew pew! said the chicken", 2005, "Chicken middle", "comedy"));
biblio.addBook(new Book("I'm back, baby", 2009, "Hearts", "romance"));
biblio.addMagazine(new Magazine("Аз, Грацията", "Tutty frutty", "Модни", 2, 2016));
biblio.addMagazine(new Magazine("Аз, Грацията", "Tutty frutty", "Модни", 13, 2016));
biblio.addMagazine(new Magazine("Краси-ва", "Tutty frutty", "Модни", 1, 2016));
biblio.addMagazine(new Magazine("Краси-ва", "Tutty frutty", "Модни", 4, 2016));
biblio.addMagazine(new Magazine("Краси-ва", "Tutty frutty", "Модни", 2, 2016));
biblio.addMagazine(new Magazine("ICare", "Patient", "Медицински", 13, 2016));
biblio.addMagazine(new Magazine("ICare", "Patient", "Медицински", 11, 2016));
biblio.addStudyBook(new StudyBook("Геометрия", "Galileo", "School", "mathematics"));
biblio.addStudyBook(new StudyBook("Mein Kampf", "Hitler", "School", "history"));
biblio.addStudyBook(new StudyBook("Art and other drawing stuff", "Leonardo", "School", "art"));
biblio.addStudyBook(new StudyBook("How to add and remove taxes...safely", "Calculator", "School", "economics"));

function Person(name, library) {
    this.name = name;
    this.library = library;
    var money = Math.round(Math.random() * 20);
    this.materialsForReading = [];
    this.getMoney = function () {
        return money;
    }
    this.rentingReadingMaterial = function (titleOfItem) {
        var readingMaterial = this.library.lendingReadingMaterial(titleOfItem, this);
        if (readingMaterial) {
            money -= readingMaterial.getTax();
            this.materialsForReading.push(readingMaterial);
            console.log(this.materialsForReading);
        }
    }
}
var pesho = new Person(pesho, biblio);
pesho.rentingReadingMaterial("Die hardly");