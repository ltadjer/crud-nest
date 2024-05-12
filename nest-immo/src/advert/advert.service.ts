import { Injectable } from '@nestjs/common';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdvertEntity } from './entities/advert.entity';
import { QueriesAdvertDTO } from './dto/queries-advert.dto';

@Injectable()
export class AdvertService {
  constructor(
    @InjectRepository(AdvertEntity)
    private readonly advertRepository: Repository<AdvertEntity>,
  ) {}

  create(createAdvertDto: CreateAdvertDto) {
    try {
      return this.advertRepository.save(createAdvertDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(queries: QueriesAdvertDTO) {
    console.log(queries);
    let max_price: number
    let min_rooms: number
    let min_surface: number
    let max_surface: number
    let page = 1;
    let limit = 2;
    let offset = 0;

    //convert int
    if (queries.max_price) max_price = parseInt(queries.max_price);
    if (queries.min_rooms) min_rooms = parseInt(queries.min_rooms);
    if (queries.min_surface) min_surface = parseInt(queries.min_surface);
    if (queries.max_surface) max_surface = parseInt(queries.max_surface);
    if (queries.page) page = parseInt(queries.page);
    if (queries.limit) limit = parseInt(queries.limit);

    //select * from advert where price <= max_price and nb_rooms >= min_rooms
    let queryBuilder = this.advertRepository.createQueryBuilder("advert");

    if(max_price && max_price > 0) {
      queryBuilder.andWhere("advert.price <= :max_price", { max_price });
    }
    if(min_rooms && min_rooms > 0) {
      queryBuilder.andWhere("advert.nb_rooms >= :min_rooms", { min_rooms });
    }

    // Ajouter un filtre pour la surface min et max
    if(min_surface && min_surface > 0) {
      queryBuilder.andWhere("advert.surface >= :min_surface", { min_surface });
    }

    if(max_surface && max_surface > 0) {
      queryBuilder.andWhere("advert.surface <= :max_surface", { max_surface });
    }

    queryBuilder.leftJoinAndSelect("advert.user", "user");
    
    offset = (page - 1) * limit;

    queryBuilder
      .limit(limit)
      .offset(offset)

    const [advertList, totalCount] = await queryBuilder.getManyAndCount();

    return {
      data: advertList,
      totalCount: totalCount,
      totalPage: Math.ceil(totalCount / limit),
      page: page,
    }
    
  }

  findOne(id: number) {
    return this.advertRepository.findOneBy({id: id});
  }

  update(id: number, updateAdvertDto: UpdateAdvertDto) {
    return this.advertRepository.update(id, updateAdvertDto);
  }

  remove(id: number) {
    return this.advertRepository.softDelete(id);
  }
}
