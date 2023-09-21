import axios from 'axios';



export const getPlacesData = async (type, sw, ne) => {
    try {
        const {data: { data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`, {
   
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
        
            },
            headers: {
              'X-RapidAPI-Key': 'e2c0187cdamsh21ab2f159f6ff99p1b01e7jsnd3980bb1c28f',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        
         
        return data;
    } catch (error){
        console.log(error)

    }
}
