import { Args, Int, Mutation, Parent, Query, Resolver, ResolveField } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { IPet } from './interfaces/IPet';
import { PetEntity } from './entities/pet.entity';
import { CreatePetDto } from './dto/incoming/CreatePet.dto';
import { OwnerEntity } from 'src/owners/entities/owner.entity';

@Resolver(of => PetEntity)
export class PetsResolver {
  constructor(private readonly petsService: PetsService) {}

  @Query(returns => [PetEntity])
  pets(): Promise<IPet[]> {
    return this.petsService.findAll();
  }

  @Query(returns => PetEntity)
  getPet(@Args('id', {type: () => Int}) id: number): Promise<IPet> {
    return this.petsService.getPetbyId(id);
  }

  @Mutation(returns => PetEntity)
  createPet(@Args('petData') petData: CreatePetDto): Promise<IPet> {
    return this.petsService.createPet(petData);
  }

  @ResolveField(returns => OwnerEntity)
  owner(@Parent() pet: IPet) {
    return this.petsService.getOwner(pet.ownerId)
  }
}
