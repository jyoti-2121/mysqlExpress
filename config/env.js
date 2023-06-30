const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});
module.exports = {
PORT:4000,
NODE_ENV:"development"
}