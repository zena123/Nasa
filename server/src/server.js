const http =  require('http');
const app = require('./app');  // relative import
const {LoadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;   // react port is 3000 



//build node http server depanding on built in http server

//express like a middle ware added on top of http server

const server = http.createServer(app);

// await can be called only for async so we craete a function
async function startServer(){
    // we will await the function so data is available for requests coming & here we don't need return value , we already set our data
    await LoadPlanetsData();

    server.listen(PORT, ()=>{
        console.log(`listening to port ${PORT}....`)
    })
}
startServer();






