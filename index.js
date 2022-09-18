const server = require ('./app/routes/index');
const key = require ('./app/config/key')
const db = require ('./app/config/db')



const Port = process.env.PORT || 3333;


db()
.then(
    ()=> {
        console.log('database connected');
    }
).catch()


server.listen(Port, () => {
    console.log(`backend server running on port ${Port}`);
})