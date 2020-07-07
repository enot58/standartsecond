 const user = {

 	firstName: 'Roman',
 	age: 26,
 	isAdmin: true,
 	email: '89875041999',
 	'user-adress':{
 		city: 'Penza'
 	},

 	skills: ['html','css','js']
 };

let value;

let prop = 'skills';
// 1
value = user.firstName;

value = user['age'];

value = user['user-adress'];
value = user['user-adress'].city;
value = user['user-adress']['city'];
value = user[prop][0];

user.firstName = 'Ron';


value = user.firstName;

user.info = 'some info';

value = user.info;

user['user-adress'].city = 'Spassk';

value = user['user-adress']['city'];

user['user-adress'].country = 'Russia';

user.plan ={};



user.plan.basic = 'basic;'



console.log(value);
console.log(user);