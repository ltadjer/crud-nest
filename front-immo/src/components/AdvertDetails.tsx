import { useParams } from "react-router-dom";
import AdvertService from "../services/advert.service";
import { useEffect, useState } from "react";
import { AdvertType } from "../types/advert";


const AdvertDetails = () => {

    const { id } = useParams();
    const { advert, setAdvert } = useState<AdvertType>({})

    useEffect(() => {
        console.log('Advert Details component mounted');

        fetchOneAdvert()
        return () => {
            console.log('Advert Details component unmounted');
        }
    }, [])

    const fetchOneAdvert = async () => {
        try {
            const { data } = await AdvertService.findOne(id);
            setAdvert(data);
        } catch(error) {
            console.log(error);
        }
    }

    if(!advert) {
        return <div>Loading... </div>
    }

    return (
        <div>
            <h1>AdvertDetails</h1>
            <p>{advert.title}</p>
        </div>
    );
}
export default AdvertDetails;