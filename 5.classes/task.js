// Task 1

class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	fix() {
		this.state *= 1.5;
	}
	set state(count) {
		if (count < 0) {
			this._state = 0;
		} else if (count > 100) {
			this._state = 100;
		} else {
			this._state = count;
		}
	}
	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "book";
		this.author = author;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

// Task 2

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {

		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].hasOwnProperty(type) && this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		const searchEl = this.books.find(item => item.name === bookName);
		if (typeof searchEl === 'object') {
			let index = this.books.indexOf(searchEl);
			this.books.splice(index, 1);
			return searchEl;
		} else {
			return null;
		}
	}
}

// Task 3

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(count, type) {
		if (count >= 2 && count <= 5) {
			if (this.marks.hasOwnProperty(type)) {
				this.marks[type].push(count);
			} else {
				this.marks[type] = [];
				this.marks[type].push(count);
			}
		} else {
			return;
		}

	}

	getAverageBySubject(type) {
		if (this.marks.hasOwnProperty(type)) {
			return this.marks[type].reduce((acc, item) => {
				return acc += item / this.marks[type].length;
			}, 0);
		} else {
			return 0;
		}
	}

	getAverage() {
		let arr = Object.keys(this.marks);
		return arr.reduce((acc, item) => {
			return acc += this.getAverageBySubject(item) / arr.length;
		}, 0);
	}
}