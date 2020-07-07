let value;


// Number to string

value = String(10);
value = new String(10+40)
value = (40).toString()

// Boolern to string

value = String(true);
//Array to string

value = String([1,2,3]);

// Object to string

value = new String({
	name: 'Denis',
	age: 23
});


value = 30 + '' + 30;

value = 30 - '5';

value = true + 10;

// Strin to number

value = Number('23');
value = Number(false);
value = Number(null);
value = Number('false');
value = Number([1,2,3]);


value = parseInt('200sgsgsgsg');
value = parseFloat('200.12dasggs');

// BooLEan

value = Boolean('hello');

value = Boolean('');
value = Boolean(-100);
value = Boolean(0);
value = Boolean(undefined);
value = Boolean(null);






console.log(value);

console.log(typeof value);