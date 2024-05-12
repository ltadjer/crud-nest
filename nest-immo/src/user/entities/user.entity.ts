import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { TimestampEntity } from '../../generic/timestamp.entity';
import { AdvertEntity } from "src/advert/entities/advert.entity";

@Entity('user')
export class UserEntity extends TimestampEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => AdvertEntity, advert => advert.user)
    adverts: AdvertEntity[];
}
