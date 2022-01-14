import mongoose from 'mongoose'; 
import Location from '../models/location.model';

export default async function connect () {
    try{
        await mongoose.connect('mongodb://localhost:27017/maps');
        console.log('Db connected :)');
        

        // await Location.create({name : 'Sagrada Familia', location : {
        //     type: 'Point', 
        //     coordinates : [41.40, 2.17 ]
        // }}); 

        // await Location.create({name : 'Casa Batllo', location : {
        //     type: 'Point', 
        //     coordinates : [41.39, 2.16 ]
        // }}); 

        // await Location.create({name : 'Collins Bar', location : {
        //     type: 'Point', 
        //     coordinates : [41.40, 2.17 ]
        // }}); 

    } catch{

        console.log('Db not connected :(');
    }
}