type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
    pages: string;
};

const myBook: Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan",
    },
    name: "My Best Book",
    pages: "25",
};

console.log(myBook)