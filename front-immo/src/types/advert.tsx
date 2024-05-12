export type CreateAdvertDTO = {
    title: string;
    description: string;
    nb_rooms: number;
    price: number;
    surface: number;
}


export type AdvertType = {
    id: number;
    title: string;
    nb_rooms: number;
    createdAt: string;
    surface: string;
}