// function foo() {
// 	console.log('Hello');
// }


// foo();

// foo.field = 'Roman';

// console.log(foo.field);

// const arr = ['Roman', 'Anna', 'Maks', 'Dasha'];

// console.log(arr);


// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
// 	newArr.push(arr[i].length);
		
// }

// console.log(newArr);

// let newArr2 = [];

// for (let i = 0; i < arr.length; i++) {
// 	newArr2.push(arr[i].toUpperCase());
// }


// console.log(newArr2);


/*const names = ['Roman', 'Anna', 'Maks', 'Dasha'];

function mapArray(arr, fn) {
	const res = [];

	for (let i = 0; i < arr.length; i++) {
		res.push(fn(arr[i]));
	}
	return res;
}



function nameLenght(el) {
	console.log(el);
	return el;
}

mapArray(names, nameLenght);

const result = mapArray(names, nameLenght);

console.log(result)


function greeting(firstName) {
	return function (lastName) {
		return `Hello, ${firstName} ${lastName}`
	};
}



const testGreeting = greeting('Roman');

console.log(testGreeting);

const fullName = testGreeting('Kiselev');

console.log(fullName);


const fName = greeting('Roman')('Kiselev');

console.log(fName)
*/





/*function question(job) {
	if (job === 'developer'){
		return function (name) {
			return `${name}, что такое JavaScript?`;
		};
	}else if (job === 'teacher') {
		return function (name) {
			return `${name}, какой предмет?`;
		};
	}
}*/

// or

/*function qustion(name) {
	const jobDictionary = {
		developer: 'что такое JavaScript',
		teacher: 'какой предмет вы ведёте'
	};

	return function(name){
		return `${name}, ${jobDictionary[job]}?`
	}
}



const developerQuestion = question('developer');
console.log(developerQuestion('Roman'));

const teacherQuestion = question('teacher');

console.log(teacherQuestion('Roman'));*/


/*function first() {
	setTimeout(function(){
		console.log(1);
	},500 );
	
}
function second() {
	console.log(2);
}

first();
second();
*/


function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});