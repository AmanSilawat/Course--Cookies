const app = require('express')();
app.get('/', (req, res) => {
    res.setHeader('set-cookie', ['set_from_server=1']);
    res.sendFile(`${__dirname}/index.html`);
});

app.get('/path1', (req, res) => {
    res.send(`Path 1: I have been sent these cookies ${req.headers.cookie}`)
});

app.get('/path2', (req, res) => {
    res.send(`Path 2: I have been sent these cookies ${req.headers.cookie}`)
});

app.get('/img', (req, res) => {
    res.send(`Path 2: I have been sent these cookies ${req.headers.cookie}`)
});

app.get('/steal', (req, res) => {
    res.send(`Hey, I saved them in my db as well here are tye ${req.query.v}`)
});

app.listen(8080, () => console.log(('port is 8080')));