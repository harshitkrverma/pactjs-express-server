const recordsModel = require('../models/recordsModel');

const getRecords = (req, res) => {
	recordsModel.getAllRecords((err, records) => {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.json(records);
		}
	});
};

const createRecord = (req, res) => {
	recordsModel.createRecord(req.body, (err, record) => {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.status(201).json(record);
		}
	});
};

const updateRecord = (req, res) => {
	const { id } = req.params;
	recordsModel.updateRecord(id, req.body, (err, record) => {
		if (err) {
			res.status(500).json({ error: err.message });
		} else {
			res.json(record);
		}
	});
};

module.exports = {
	getRecords,
	createRecord,
	updateRecord,
};
