const parse = require('csv-parse');  // csv-parse library
const fs = require('fs'); // built in file system
const habitablePlanets = [];

function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_prad'] < 1.6;
}

//module 6, vedio 6
// read our file
fs.createReadStream('kepler_data.csv') //give us events emitter , react with on
    .pipe(parse({
        Comment : '#',  // line start with # is comment
        columns : true,   
    }))  // will return nicely parsed js object with key, value

    .on('data', (data)=>{
        if (isHabitablePlanet(data)){
            habitablePlanets.push(data);
        }  
    })
    .on('error', (err)=>{
        console.log(err);
    })
    .on('end',()=>{  // when end we won't be receving data
        // console.log(`${data.length} planets found`);
        console.log("bye!!");
    });

    module.exports = {
       planets: habitablePlanets,
    }