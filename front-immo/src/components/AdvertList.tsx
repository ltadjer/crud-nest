import { Link } from 'react-router-dom';
import { AdvertType } from '../types/advert';

type PropsAdvertList = { advertList: AdvertType[]; };


const AdvertList = ({advertList}: PropsAdvertList) => {
    return ( 
    <ul>
        {advertList.map((advert: AdvertType) => (
            <li key={advert.id}>
                {advert.title}
               <Link to={`/adverts/${advert.id}`}>Learn more</Link>
            </li>
        ))}
    </ul>
     );
}
 
export default AdvertList;