import express from 'express'; 
import connect from './connection/connect';
import { getAllLocationsHandler, getLocationWithinRangeHandler } from './controller/location.controller';
import { getLocationWithinRange } from './services/location.service';

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

app.get('/', (req, res) => res.send({message : 'this works'})); 

app.get('/locations', getAllLocationsHandler); 
app.get('/proximity/:locationX/:locationY/:distance', getLocationWithinRangeHandler); 


app.listen(3000, ()=>{
    console.log('Listening at http://localhost:3000');
    connect(); 
    

})

