import express from 'express';

const app = express();
const port = process.env.PING_LISTEN_PORT??3000;

app.get('/ping', (req, res) => {
    console.log("la requete=" + req.headers.host);
    console.log(process.env.PING_LISTEN_PORT);
    res.json({ req: req.headers});
});

app.get('*', (req, res) => {
    res.sendStatus(404);
});


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

//export PING_LISTEN_PORT=3000 && node dist/app.js 