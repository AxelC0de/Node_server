const fs = require('fs');
const http = require('http');

 let addTodo = function(todo, path){
// 1. Получаем информацию из файла
let fileContent = fs.readFileSync(path, "utf8");
let fileContentParsed = JSON.parse(fileContent)
// console.log(fileContentParsed)
// 2. находим ключа todoList, закидываем в массив значение todo
fileContentParsed['todoList'].push(todo)
// console.log(fileContentParsed)
// 3. Записать файл с новыми данными
let fileContentstringified = JSON.stringify(fileContentParsed)
fs.writeFileSync(path, fileContentstringified)



}

console.log('Начинаю записывать новой Todo');

addTodo(
	{
		todo:'помыть полы',
		id: new Date().getMilliseconds(),
		isDone: false
	},
	'./state/todo_list.json'
	);


	removeTodo('12345123','./state/todo_list.json')
console.log('Запись данных завершена');