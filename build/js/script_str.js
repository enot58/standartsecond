const firstName ='Denis';
const lastName ='Vishnya';
const age = 30;

let str;

str = 'Hello my name is ' + firstName + ' ' + lastName;

str = '<ul>' + 
	  '<li>firstName: ' + firstName + '<li>' + 	
	  '<li>firstName: ' + lastName + '<li>' + 	
	  '<li>firstName: ' + age + '<li>' + 	
	  '</ul>';


// console.log(str);


//ES6


str = `

	<ul>
		<li>FirstName: ${firstName} </li>
		<li>LastName: ${lastName} </li>
		<li>Age: ${age} </li>

	</ul>

`

document.body.innerHTML = str;

