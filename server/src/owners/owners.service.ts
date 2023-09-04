import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/incoming/createOwner.dto';
import { OwnerEntity } from './entities/owner.entity';
import { Repository } from 'typeorm';
import { IOwner } from './interfaces/IOwner';

@Injectable()
export class OwnersService {
  constructor (@InjectRepository(OwnerEntity) private readonly ownerRepository: Repository<OwnerEntity>) {}

  async createOwner(ownerData: CreateOwnerDto): Promise<IOwner> {
    const newOwner: IOwner = this.ownerRepository.create(ownerData)

    return await this.ownerRepository.save(newOwner);
  }

  async findOwners(): Promise<IOwner[]> {
    return await this.ownerRepository.find();
  }

  async getOwnerById(id: number): Promise<IOwner> {
    return await this.ownerRepository.findOneBy({id});
  }
}
