import { getLocationWithinRange, getAllLocations } from "../services/location.service";
import { Request, Response } from "express";


export async function getAllLocationsHandler( req: Request , res: Response){
    const locations  = await getAllLocations(); 

    res.json(locations).status(200); 
}

export async function getLocationWithinRangeHandler( req : Request , res : Response) {
       
    const {locationX,  locationY, distance} = req.params as any;


    const locations = await getLocationWithinRange ( [locationX, locationY], distance); 
    res.send(locations).status(200);
}