import Location from "../models/location.model";


//get all locations
export async function getAllLocations(){
    return Location.find().catch((errro : any) => console.log("Error finding locations") );
}


//get locations within a certain range

export async function getLocationWithinRange( center: number[], range: number){
    return Location.find({
        location: {
            // expected location in miles , we ask the user for km !!!!! 1 mile = 1.65 KM
            $geoWithin : {
                $centerSphere : [center, range / (3963.2)  ] 
            }
        }
    }).catch((error : any) => console.log("Erorr fining nearest", error));
    

}



