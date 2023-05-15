const express = require('express');
const http = require('http');
const dishRouter = require('./routes/dishesRouter');
const promoRouter = require('./routes/promoRouters');
const bodyParser = require('body-parser');
const leaderRouter = require('./routes/leaders');
const hostname = 'localhost';
const port = 3000;
const app = express();
app.use(express.json())
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}
);




