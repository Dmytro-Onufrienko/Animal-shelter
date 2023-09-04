import { Inject, Injectable } from '@nestjs/common';
import { IPet } from './interfaces/IPet';
import { PetEntity } from './entities/pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePetDto } from './dto/incoming/CreatePet.dto';
import { OwnersService } from 'src/owners/owners.service';
import { IOwner } from 'src/owners/interfaces/IOwner';

@Injectable()
export class PetsService {
  constructor (
    @InjectRepository(PetEntity)
    private readonly petRepository: Repository<PetEntity>,
    @Inject(OwnersService)
    private readonly ownersService: OwnersService,
    ) {}

  async getPetbyId(id: number): Promise<IPet> {
    return await this.petRepository.findOneBy({id});
  }

  async createPet(petData: CreatePetDto): Promise<IPet> {
    const newPet: IPet = this.petRepository.create(petData)

    return await this.petRepository.save(newPet)
  }

  async findAll(): Promise<IPet[]> {
    return this.petRepository.find();
  }

  async getOwner(ownerId: number): Promise<IOwner> {
    return await this.ownersService.getOwnerById(ownerId);
  }
}
