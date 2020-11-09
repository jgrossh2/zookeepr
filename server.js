const express =  require('express');
const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');
const { dirname } = require('path');
const { setFlagsFromString } = require('v8');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/apiRoutes/htmlRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
//connecting css and js files-middleware function
app.use(express.static('public'));
//parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
//tells server that app will use router set up in apiRoutes
app.use('/api', apiRoutes);
//if / is endpoint, router will serve back HTML routes
app.use('/', htmlRoutes);



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});