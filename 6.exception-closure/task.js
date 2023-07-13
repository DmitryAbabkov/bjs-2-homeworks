function parseCount(number) {
	let res = Number.parseFloat(number);
	if (isNaN(res)) {
		throw new Error('Невалидное значение');
	} else {
		return res;
	}
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (e) {
		return e;
	}
}

// Task 2


class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a + b < c || a + c < b || b + c < a) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
	}
	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = 0.5 * this.perimeter;
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {

		return new Triangle(a, b, c);

	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		};
	}

}


class Worker {
    constructor(name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    get name() {
        return this._name;
    }
    get surname() {
        return this.surname;
    }
    set rate(rate) {
        this.rate = rate;
    }
    get rate() {
        return this.rate;
    }
    set days(days) {
        this.days = days;
    }
    get days() {
        return this.days;
    }

    getSalary() {
        return this._rate * this._days;
    }
}

const rab1 = new Worker ('Maks', 'Kuzmin', 1200, 10);
const rab2 = new Worker ('Dmitry', 'Ababkov', 5000, 10);

console.log(rab1.getSalary() + rab2.getSalary());


class MyString {
    reverse(str) {
       const rev = str.split('').reverse().join('');
       return rev;
    }

    ucFirst(str) {

    }

    ucWords(str) {

    }

}

const str = new MyString();

console.log(str.reverse("Перевернутая"));