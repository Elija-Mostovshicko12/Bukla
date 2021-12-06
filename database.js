const fs = require('fs');


const fail_database = require('./dataBase.json');

let database = {};

const load = () => {
	console.log('Начата загрузка базы данных...');
	database = fail_database;
	console.log('База данных загружена успешно!');
	console.log(database);
}

const save = () => {
	console.log('Начата сохранения базы данных...');
	fs.writeFileSync('./dataBase.json', JSON.stringify(database, null, 4));
	console.log('База данных сохранена успешно!');
}

const Get_dataBase = () =>{
	return database;
}



module.exports = {
	load,
	save,
	Get_dataBase,

}