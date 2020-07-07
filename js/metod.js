// >, < , >=, <= , == , === , != , !==



// let value;

// value = 1 > 2;
// value = 2 <= 2;
// value = 1 == 1; 
// value = 1 === '1';

 
//Код символа

// value  = 'F'.charCodeAt();


const numArr = [2,1,345,352,2456,34];

let value;

value = numArr.length;
// numArr.length = 0;
// numArr.length = 100;
value = Array.isArray(numArr);
value = numArr[2];

numArr[2] = 12;

// Порядковый номер в массиве
value = numArr.indexOf(34); 

// Push добавляет в конеч
// Pop удаляет с конца
// unshift добавляет вначало
// shift  удаляет с начала
value = numArr.push(755);
value = numArr.pop();


value = numArr.shift();
value = numArr.unshift(525);


//slice вырезает часть массива не изменяя массив

value = numArr.slice(0, 3);

//splice удаление с определённого места
//есть возможность добавить новый элеменент третим значением

value = numArr.splice(1,2, 'one', 'two')

value = numArr.reverse();
value = numArr.concat(11,2);

value = numArr.join(",");

value = "hello world".split('');



console.log(value, numArr);
