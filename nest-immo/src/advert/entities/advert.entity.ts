import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimestampEntity } from '../../generic/timestamp.entity';
import { UserEntity } from "src/user/entities/user.entity";
@Entity("advert")
export class AdvertEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;
    
    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    nb_rooms: number;

    @Column()
    surface: number;

    @ManyToOne(() => UserEntity, user => user.adverts)
    user: UserEntity;
}
