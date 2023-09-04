import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OwnersService } from './owners.service';
import { OwnerEntity } from './entities/owner.entity';
import { CreateOwnerDto } from './dto/incoming/createOwner.dto';
import { IOwner } from './interfaces/IOwner';

@Resolver(() => OwnerEntity)
export class OwnersResolver {
  constructor(private readonly ownersService: OwnersService) {}

  @Mutation(returns => OwnerEntity)
  createOwner(@Args('ownerData') ownerData: CreateOwnerDto): Promise<IOwner> {
    return this.ownersService.createOwner(ownerData);
  }

  @Query(reurns => [OwnerEntity])
  owners() {
    return this.ownersService.findOwners();
  }

  @Query(returns => OwnerEntity)
  getOwner(@Args('id', { type: () => Int }) id: number) {
    return this.ownersService.getOwnerById(id);
  }
}
