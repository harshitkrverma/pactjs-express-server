const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const recordsRoutes = require('./routes/recordsRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use(cors());
app.use('/api/records', recordsRoutes);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
	console.log('http://localhost:3000/api-docs')
	
});

module.exports = app;
