const http =  require('http');
const app = require('./app');  // relative import

const PORT = process.env.PORT || 8000;   // react port is 3000 



//bulid node http server depande on built in http server

//express like a middle ware added on top of http server

const server = http.createServer(app);
server.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}....`)
})


