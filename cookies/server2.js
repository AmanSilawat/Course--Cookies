const app = require('express')();
app.get('/', (req, res) => {
    res.send('home');
});

app.get('/img', (req, res) => {
    res.sendFile(`${__dirname}/cookie.png`)
});

app.get('/steal', (req, res) => {
    res.send(`Hey, I saved them in my db as well here are tye ${req.query.v}`)
});

app.listen(5050, () => console.log(('port is 5050')));