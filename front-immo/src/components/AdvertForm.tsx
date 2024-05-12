import { useEffect, useState } from "react";
import AdvertService from "../services/advert.service";
import { CreateAdvertDTO } from '../types/advert';

interface FormAdvertProps {
    fetchAllAdverts: () => void
}

const FormAdvert = ({fetchAllAdverts} : FormAdvertProps) => {

    const [credentials, setCredentials] = useState<CreateAdvertDTO>({
        title:'', 
        description:'', 
        nb_rooms:0, 
        price:0, 
        surface:0,
    })

    useEffect(() => {
       checkCredentials();
    }, [credentials])

    const checkCredentials = () => {   
        console.log('checkCredentials : ', credentials);
    }

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        console.log('Change : ',e.target.value);
        const {value, name} = e.target;
        setCredentials({...credentials, [name]: value});
    }

    const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit : ', credentials);
        try {
            await AdvertService.create(credentials);
            fetchAllAdverts();
        } catch(error) {
            console.log(error);
        }
    }

    return (
       <div>
         <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={handleChange} type="text" name="title" placeholder="Titre" />
            </div>
            <div>
                <input onChange={handleChange} type="texte" name="description" placeholder="Description" />
            </div>
            <div>
                <input onChange={handleChange} type="number" name="nb_rooms" placeholder="Nombre de pièces" />
            </div>
            <div>
                <input onChange={handleChange} type="number" name="price" placeholder="Prix" />
            </div>
            <div>
                <input onChange={handleChange} type ="text" name="surface" placeholder="Surface" />
            </div>
            <input type="submit" value="Ajouter" />
        </form>
       </div>
    );
}

export default FormAdvert;