const app = require('express')();
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.post('/login', (req, res) => {
    // const cookie = 'user=aman; samesite=strict; secure';
    const cookie = 'user=aman; samesite=lax; secure';
    // const cookie = 'user=aman; samesite=none; secure';
    // const cookie = 'user=aman';

    res.setHeader('set-cookie', [cookie]);
    res.send('ok')
});

app.get('/img', (req, res) => {
    const cookie = req.headers.cookie;
    if (cookie) {
        res.sendFile(`${__dirname}/cookie.png`);
    } else {
        res.sendStatus(403);
        res.end();
    }
})


app.listen(8000, () => console.log(('port is 8000')));