require('dotenv').config()

module.exports = {
    PORT: process.env.PORT,
    DATA_DB: process.env.DATABASE_URI,
    TEST_DB: process.env.TEST_DB
}