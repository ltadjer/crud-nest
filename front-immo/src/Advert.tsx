import { useEffect, useState } from "react";
import AdvertList from "./components/AdvertList";
import AdvertPaginate from "./components/AdvertPaginate";
import FormAdvert from "./components/AdvertForm";
import AdvertService from "./services/advert.service";

function Advert() {
    const [totalCount, setTotalCount] = useState(0)
    const [advertList, setAdvertList] = useState([])

    useEffect(() => {
        console.log('Advert component mounted');

        fetchAllAdverts()
        return () => {
            console.log('Advert component unmounted');
        }
    }, [])

    const fetchAllAdverts = async () => {
        try {
            const {data, totalCount} = await AdvertService.findAll();
            setAdvertList(data)
            setTotalCount(totalCount)
        } catch(error) {
            console.log(error);
        }
    }
    return( 
    <>        
        <FormAdvert fetchAllAdverts={fetchAllAdverts} />
       <AdvertList advertList={advertList} />
       <AdvertPaginate totalCount={totalCount} />
       
    </>
    )
}

export default Advert;