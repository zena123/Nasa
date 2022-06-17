const path = require('path');
const fs = require('fs'); // built in file system
const { parse } = require('csv-parse');  // csv-parse library

const habitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

/*
PECAP PROMISE
const promise = new Promise((resolve,reject ) =>{
    resolve(42)
});
    hen:eccepts callback function with whatever result is
promise.then((result)=>{

})

const result =  await promise;

*/


function LoadPlanetsData(){
    return new Promise((resolve, reject)=>{
        fs.createReadStream(path.join(__dirname,'..', '..','data','kepler_data.csv'))//give us events emitter , react with on
          .pipe(parse({
                comment: '#',  // line start with # is comment
                columns: true,   
            }))  // will return nicely parsed js object with key, value

          .on('data', (data)=>{
                if (isHabitablePlanet(data)){
                    habitablePlanets.push(data);
                }  
            })
         .on('error', (err)=>{
            console.log(err);
            reject(err);
        })
         .on('end',()=>{  // when end we won't be receving data
            console.log(`${habitablePlanets.length} planets found`);
            console.log("bye!!");

            //call our resolve function when  finish parsing data
            resolve();
        });

    })
    

}

    module.exports = {
        LoadPlanetsData,
       planets: habitablePlanets,
    }