function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

let student1 = new Student("Igor", "male", 21);
let student2 = new Student("Maksim", "male", 19);


Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
};

Student.prototype.addMarks = function(...marks) {
	if (this.marks != undefined) {
		this.marks.push(...marks);
	}
};

Student.prototype.getAverage = function() {
	if (this.marks != undefined && this.marks.length != 0) {
		const sum = this.marks.reduce((acc, item) => {
			return acc + item;
		}, 0);
		const result = sum / this.marks.length;
		return result;
	} else {
		return 0;
	}
};


Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
};