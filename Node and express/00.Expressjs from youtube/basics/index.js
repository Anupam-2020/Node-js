const express = require('express');
const { getMainPage, getContactsPage, getAboutPage } = require('./Controller/main');
const { rootDir } = require('../path');

const app = express();

const PORT = 8000;

app.get('/', getMainPage);

app.get('/contacts', getContactsPage);

app.get('/about', getAboutPage);

app.get('/json', (req, resp, next) => {
    resp.json({
        id: 2,
        name: 'Anupam'
    })
})

app.get('/json/:id', (req, resp, next) => {
    const id = req.params.id
    resp.json({
        id: id,
        name: 'Anupam'
    })
})

// app.use('/html', express.static(rootDir+'/index.html'));
app.get('/html', (req, resp) => resp.sendFile(rootDir+'/index.html'));

app.listen(PORT, () => console.log(`server started on server ${PORT}`));