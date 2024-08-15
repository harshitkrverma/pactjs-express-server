const db = require('../db/dbConfig');

const getAllRecords = (callback) => {
	db.all('SELECT * FROM records', [], (err, rows) => {
		callback(err, rows);
	});
};

const createRecord = (data, callback) => {
	const { name, value } = data;
	db.run('INSERT INTO records (name, value) VALUES (?, ?)', [name, value], function (err) {
		callback(err, { id: this.lastID, ...data });
	});
};

const updateRecord = (id, data, callback) => {
	const { name, value } = data;
	db.run('UPDATE records SET name = ?, value = ? WHERE id = ?', [name, value, id], function (err) {
		callback(err, { id, name, value });
	});
};

module.exports = {
	getAllRecords,
	createRecord,
	updateRecord,
};
