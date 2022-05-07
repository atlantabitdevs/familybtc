const dotenv = require('dotenv');
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT || 4000;
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const app = express();

app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ credentials: true, origin: true }));
app.use(
    express.text({
        type: () => {
            return { text: 'text' };
        },
    })
);

app.get('/', async (req, res) => {
    res.send(`Health check! Server running on port ${PORT}!`);
});

const GLOBAL_ROUTE_PREFIX = '/api/v1';
const accountRouter = require('./api/account');
app.use(`${GLOBAL_ROUTE_PREFIX}/account`, accountRouter);

module.exports = { app, PORT };
